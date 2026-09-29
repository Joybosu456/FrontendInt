const q = (id, category, question, answer, example, language = 'JavaScript') => ({
  id: `machine-${id}`,
  category,
  question,
  answer,
  example,
  language,
})

export const machineCodingQuestions = [
  q('todo-app', 'React Components', 'How would you build a Todo component in React?', 'Keep the todo list and input value in component state. Add a trimmed non-empty item, update an item immutably when it is completed, and remove it by id. Use a stable key for each row and a form so Enter submits naturally. This example keeps data in memory; persistence can be added with localStorage or a backend.', `import { useState } from 'react';

export default function TodoApp() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    const title = text.trim();
    if (!title) return;
    setTodos(current => [
      ...current,
      { id: crypto.randomUUID(), title, done: false },
    ]);
    setText('');
  }

  function toggleTodo(id) {
    setTodos(current => current.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  function removeTodo(id) {
    setTodos(current => current.filter(todo => todo.id !== id));
  }

  return (
    <section aria-labelledby="todo-title">
      <h2 id="todo-title">Tasks</h2>
      <form onSubmit={addTodo}>
        <label htmlFor="new-todo">New task</label>
        <input id="new-todo" value={text}
          onChange={event => setText(event.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.done}
                onChange={() => toggleTodo(todo.id)} />
              <span>{todo.title}</span>
            </label>
            <button type="button" onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}`, 'React / JSX'),
  q('todo-immutable-updates', 'React Components', 'How do you add, update, and delete todos without mutating React state?', 'Use functional state setters and return new arrays and objects. map is useful for replacing the matching item, filter for removing items, and spread for appending. Never push into the current state array or mutate a todo object in place.', `setTodos(current => [...current, newTodo]);
setTodos(current => current.map(todo =>
  todo.id === changed.id ? { ...todo, done: true } : todo
));
setTodos(current => current.filter(todo => todo.id !== removedId));`),

  q('array-map', 'Array Methods', 'How does Array.prototype.map() work?', 'map calls a callback for each present array element and returns a new array containing the callback results. Use it to transform data or render React lists; it does not mutate the source array. Return a value from the callback for every item.', `const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.1);
// [11, 22, 33]

const rows = users.map(user => <li key={user.id}>{user.name}</li>);`),
  q('array-filter', 'Array Methods', 'How does Array.prototype.filter() work?', 'filter calls a predicate for each element and returns a new array containing only the elements for which the predicate is truthy. The original array is unchanged. Return a boolean condition, not the transformed item.', `const scores = [42, 88, 73, 55];
const passing = scores.filter(score => score >= 60);
// [88, 73]`),
  q('array-reduce', 'Array Methods', 'How does Array.prototype.reduce() work?', 'reduce carries an accumulator across array elements and returns one final result. Provide an initial value to define the accumulator type and handle empty arrays safely. It can calculate totals, build maps, or group values.', `const cart = [{ price: 8 }, { price: 12 }];
const total = cart.reduce((sum, item) => sum + item.price, 0);
// 20`),
  q('array-foreach', 'Array Methods', 'What does Array.prototype.forEach() do, and when should you use it?', 'forEach runs a callback for each present element and returns undefined. Use it for side effects such as logging or updating an external system, not when you need a transformed array or early exit. Use map for transformation and a loop when break is needed.', `const names = ['Ari', 'Bo'];
names.forEach((name, index) => console.log(index, name));`),
  q('array-find-findindex', 'Array Methods', 'What is the difference between find() and findIndex()?', 'find returns the first element that matches a predicate, or undefined if none match. findIndex returns its index, or -1 if none match. Use find when you need the item and findIndex when you need its position.', `const users = [{ id: 3 }, { id: 8 }];
const user = users.find(item => item.id === 8);
const index = users.findIndex(item => item.id === 8);`),
  q('array-some-every', 'Array Methods', 'What is the difference between some() and every()?', 'some returns true when at least one element passes a predicate. every returns true only when all elements pass. Both stop as soon as the result is determined; every returns true for an empty array, while some returns false.', `const ages = [19, 24, 31];
const hasMinor = ages.some(age => age < 18); // false
const allAdults = ages.every(age => age >= 18); // true`),
  q('array-includes-indexof', 'Array Methods', 'When would you use includes() versus indexOf()?', 'includes checks whether an array contains a value and returns a boolean. indexOf returns the first matching index or -1, which is useful when the position matters. Both compare using strict-like equality semantics for common values.', `const roles = ['reader', 'editor'];
roles.includes('editor'); // true
roles.indexOf('editor'); // 1`),
  q('array-flatmap', 'Array Methods', 'What does flatMap() do?', 'flatMap maps each item and flattens the returned result by one level. It is useful when each input can produce zero, one, or several output values. It is equivalent to map followed by flat(1).', `const sentences = ['red fox', 'blue jay'];
const words = sentences.flatMap(sentence => sentence.split(' '));
// ['red', 'fox', 'blue', 'jay']`),
  q('array-sort', 'Array Methods', 'How do you sort numbers and objects in JavaScript?', 'sort mutates the array and compares values as strings by default. Supply a comparator for numeric or domain-specific ordering, and copy first when the original must remain unchanged. Modern JavaScript sort is stable.', `const numbers = [20, 3, 100];
const ascending = [...numbers].sort((a, b) => a - b);
const byName = [...users].sort((a, b) => a.name.localeCompare(b.name));`),
  q('array-slice-splice', 'Array Methods', 'What is the difference between slice() and splice()?', 'slice returns a shallow copy of a range and leaves the array unchanged. splice mutates the array by removing, replacing, or inserting elements. In React state, prefer non-mutating alternatives such as filter and spread.', `const values = ['a', 'b', 'c'];
const copy = values.slice(1); // ['b', 'c']
values.splice(1, 1); // values is now ['a', 'c']`),
  q('array-methods-chain', 'Array Methods', 'How can you combine map(), filter(), and reduce() in a data task?', 'Compose methods when each step has a distinct meaning: filter to select records, map to extract or transform them, and reduce to aggregate. For very large collections, a single loop may reduce intermediate arrays, but prefer clarity until measurement shows a bottleneck.', `const revenue = orders
  .filter(order => order.status === 'paid')
  .map(order => order.total)
  .reduce((sum, total) => sum + total, 0);`),

  q('loop-for', 'Iteration', 'When would you use a classic for loop?', 'A classic for loop is useful when you need an index, want to iterate a range, need break/continue, or want explicit control over the step. For array transformations, higher-order methods may communicate intent more clearly.', `for (let index = 0; index < items.length; index += 1) {
  console.log(index, items[index]);
}`),
  q('loop-for-of', 'Iteration', 'What is the difference between for...of and for...in?', 'for...of iterates values from an iterable such as an array or string. for...in iterates enumerable property keys, including inherited enumerable keys, and is usually not the right way to traverse array values. Use Object.keys/entries for an object’s own keys.', `for (const value of ['a', 'b']) console.log(value);
for (const key in user) {
  if (Object.hasOwn(user, key)) console.log(key, user[key]);
}`),
  q('loop-foreach-vs-forof', 'Iteration', 'What is the difference between forEach() and for...of?', 'forEach invokes a callback for each array item and cannot be stopped with break; it also does not await asynchronous callbacks in sequence. for...of supports break, continue, and await in an async function, making it better when control flow matters.', `for (const item of items) {
  if (item.done) break;
  await save(item);
}`),

  q('debounce-definition', 'Debounce', 'What is debouncing, and where would you use it?', 'Debouncing delays a function until calls have stopped for a specified interval. Each new call resets the timer. It is useful for search requests, resize handling, or autosave when only the latest input after a pause should be processed.', `function debounce(callback, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
}

const searchLater = debounce(search, 300);`),
  q('debounce-react-search', 'Debounce', 'How would you debounce a search input in React?', 'Keep the typed query in state, then use an effect with a timer to wait before searching. Clear the timer in cleanup so a newer keystroke cancels the previous scheduled search. For network requests, also cancel or ignore stale responses.', `useEffect(() => {
  if (!query.trim()) return;
  const timerId = setTimeout(() => search(query), 300);
  return () => clearTimeout(timerId);
}, [query, search]);`, 'React / JSX'),
  q('throttle-definition', 'Throttle', 'What is throttling, and where would you use it?', 'Throttling limits how often a callback can run during a stream of events. Unlike debounce, it can run periodically while events continue. It is useful for scroll, pointer-move, or resize work that should update at a bounded rate.', `function throttle(callback, interval) {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun < interval) return;
    lastRun = now;
    callback(...args);
  };
}

window.addEventListener('scroll', throttle(updatePosition, 100));`),
  q('debounce-throttle-difference', 'Debounce', 'What is the difference between debounce and throttle?', 'Debounce waits for a quiet period and then runs once after the latest call. Throttle allows a call at most once per interval while activity continues. Use debounce for final search input and throttle for periodic scroll updates.', `const onSearch = debounce(fetchResults, 300); // after typing pauses
const onScroll = throttle(updateStickyHeader, 100); // at most every 100ms`),
]