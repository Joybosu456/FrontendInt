const q = (id, category, question, answer, example) => ({
  id: `redux-${id}`,
  category,
  question,
  answer,
  example,
  language: 'JavaScript / Redux Toolkit',
})

export const reduxQuestions = [
  q('what-is-redux-toolkit', 'Fundamentals', 'What is Redux Toolkit?', 'Redux Toolkit (RTK) is the recommended official way to write Redux logic. It reduces repetitive action/reducer boilerplate, provides configureStore and createSlice, includes useful defaults such as development checks and DevTools integration, and uses Immer so reducer update syntax can look mutable while producing immutable state.', `import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: { increment: state => { state.value += 1; } },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });`),
  q('why-state-management', 'Fundamentals', 'Why does an application need state management?', 'As an application grows, distant components may need to read and update the same data. A shared state approach gives that data a clear owner and predictable update path. Local component state is still the right choice for short-lived, private UI state; global state is useful for shared data such as a cart or signed-in user.', `// Shared cart data can be read by the header and checkout page.
const items = useSelector(state => state.cart.items);`),
  q('context-vs-redux-toolkit', 'Fundamentals', 'When would you choose Context versus Redux Toolkit?', 'Context is built into React and works well for relatively simple values shared through a component subtree, such as theme or locale. Redux Toolkit is useful when many parts of an application share frequently updated or complex state, when transitions benefit from a central model, or when Redux middleware and DevTools are valuable. Choose the simplest tool that fits the coordination needs.', `// Context: theme for a subtree
const theme = useContext(ThemeContext);

// Redux: shared cart state
const cart = useSelector(state => state.cart);`),
  q('redux-data-flow', 'Fundamentals', 'Explain the Redux data flow.', 'A UI event dispatches an action. The store sends the current state and action to the matching reducer logic. The reducer calculates the next state, the store saves it, and subscribed UI reads the updated data and renders. This one-way flow makes state changes easier to trace.', `onClick={() => dispatch(cartSlice.actions.addItem(product))}
// dispatch -> reducer -> next store state -> subscribed UI render`),
  q('redux-store', 'Fundamentals', 'What is the Redux store?', 'The store is the single configured container for Redux application state. In a Redux Toolkit application, configureStore combines slice reducers and adds recommended middleware and DevTools setup. Components should normally access state through React Redux hooks rather than importing the store to read it.', `const store = configureStore({
  reducer: { cart: cartReducer, user: userReducer },
});`),
  q('redux-action', 'Fundamentals', 'What is a Redux action?', 'An action describes an event or requested state change. It is a plain object with a type and may carry data in payload. With createSlice, action creators and their type strings are generated from reducer names.', `dispatch(cartSlice.actions.addItem({
  id: 'book-1', name: 'Book', price: 29,
}));`),
  q('redux-dispatch', 'Fundamentals', 'What does dispatch() do?', 'dispatch sends an action to the Redux store. The store runs the reducer logic, saves the returned next state, and notifies subscribers when appropriate. Dispatch a generated action creator result, including the required payload when that reducer needs data.', `dispatch(cartSlice.actions.removeItem('book-1'));
dispatch(cartSlice.actions.clearCart());`),
  q('redux-reducer', 'Fundamentals', 'What is a reducer in Redux?', 'A reducer computes the next state from the previous state and an action. It should be deterministic and free of side effects. In Redux Toolkit case reducers, apparent mutations are translated by Immer into immutable updates; outside that Immer-managed context, do not mutate state.', `function reducer(state = { count: 0 }, action) {
  if (action.type === 'counter/increment') {
    return { ...state, count: state.count + 1 };
  }
  return state;
}`),
  q('redux-slice', 'Redux Toolkit', 'What is a Redux Toolkit slice?', 'A slice groups one feature’s name, initial state, reducer functions, and generated actions. createSlice generates action creators and action types from reducer names, and exposes the combined slice reducer for store configuration. Organize slices by feature, such as cart or user.', `const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    clearCart: state => { state.items = []; state.total = 0; },
  },
});`),
  q('redux-create-slice', 'Redux Toolkit', 'How does createSlice() work?', 'createSlice takes a unique name, initialState, and a reducers map. Each reducer key defines a case reducer and produces a matching action creator under slice.actions. The slice.reducer handles the generated action types and is registered with configureStore.', `const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
    addBy: (state, action) => { state.value += action.payload; },
  },
});
export const { increment, addBy } = counterSlice.actions;`),
  q('redux-configure-store', 'Redux Toolkit', 'What does configureStore() do?', 'configureStore creates the Redux store from a reducer or reducer map. It automatically sets up useful default middleware, including development checks, and supports Redux DevTools. Each key in the reducer map becomes a corresponding top-level state key.', `const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});
// State shape: { cart: ..., user: ... }`),
  q('redux-payload', 'Redux Toolkit', 'What is an action payload?', 'A payload is the data an action carries for a reducer to process. In generated RTK action creators, the first argument becomes action.payload. Pass the expected data shape and validate external input at the application boundary.', `addItem({ id: 'p1', name: 'Notebook', price: 8 });
// reducer receives action.payload`),
  q('redux-use-selector-dispatch', 'React Integration', 'What is the difference between useSelector and useDispatch?', 'useSelector reads and subscribes a component to a selected piece of Redux state; that component can render again when its selected result changes. useDispatch returns the store dispatch function so event handlers can send actions. Use selectors for reads rather than calling store.getState inside components.', `const items = useSelector(state => state.cart.items);
const dispatch = useDispatch();
dispatch(cartSlice.actions.clearCart());`, 'React / Redux Toolkit'),
  q('redux-selector', 'React Integration', 'What is a selector in Redux?', 'A selector is a function that reads or derives data from the Redux state tree. Keep selectors focused on the data a component needs. For expensive derived values, use a memoized selector such as createSelector from Redux Toolkit’s reselect utilities.', `const selectCartItems = state => state.cart.items;
const items = useSelector(selectCartItems);`, 'React / Redux Toolkit'),
  q('redux-provider', 'React Integration', 'How do you make the Redux store available to React components?', 'Wrap the React application in React Redux Provider and pass the configured store. Components below it can then use hooks such as useSelector and useDispatch. Keep one configured store instance for the running application.', `import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}><App /></Provider>
);`, 'React / Redux Toolkit'),
  q('redux-immer-mutation', 'Redux Toolkit', 'Why can Redux Toolkit reducers appear to mutate state?', 'createSlice uses Immer to track writes to a draft state and produce a new immutable state behind the scenes. This syntax is safe only inside the Immer-managed case reducer. Mutating state elsewhere, such as in a component or ordinary reducer, remains a bug.', `reducers: {
  addItem(state, action) {
    state.items.push(action.payload); // Immer draft
  },
}`),
  q('redux-async-thunk', 'Async Logic', 'How do you handle asynchronous work with Redux Toolkit?', 'Use createAsyncThunk for a common request lifecycle. It dispatches pending, fulfilled, and rejected actions; a slice handles those in extraReducers to update loading, data, and error state. For server-state caching and request deduplication, RTK Query is often a better fit.', `export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('Could not load products');
    return response.json();
  }
);`),
  q('redux-devtools', 'Debugging', 'How do Redux DevTools help?', 'Redux DevTools let developers inspect state and dispatched actions over time, review action payloads, and trace state changes. With serializable actions and state, time-travel-style debugging can help reproduce and diagnose behavior. configureStore enables DevTools integration by default in development.', `// Inspect the sequence: cart/addItem -> cart/clearCart
dispatch(cartSlice.actions.addItem(product));`),
  q('redux-cart-example', 'Practical Examples', 'How would you build a cart slice with add, remove, and clear actions?', 'Keep cart items and any derived total in a cart slice. Generate actions with createSlice and update the draft through Immer. Avoid storing duplicate derived values if they can be computed reliably; if total is stored, update it consistently in every relevant reducer.', `const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;`),
  q('redux-mistake-mutate', 'Common Mistakes', 'Why is directly mutating Redux state a mistake?', 'State updates must produce a new state in an immutable, predictable way so subscribers can detect changes and prior snapshots remain valid. Redux Toolkit reducers are the special case: their state argument is an Immer draft, so draft mutations are converted into immutable updates.', `// Wrong outside an RTK case reducer:
store.getState().cart.items.push(product);

// Correct in a createSlice case reducer:
addItem(state, action) { state.items.push(action.payload); }`),
  q('redux-mistake-register-reducer', 'Common Mistakes', 'What happens if a slice reducer is not registered with configureStore?', 'Actions from the slice may still be created and dispatched, but the store has no reducer mounted at that state key to handle them. Register slice.reducer in the reducer map and verify the expected state shape in DevTools.', `const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});`),
  q('redux-mistake-get-state-component', 'Common Mistakes', 'Why should a component use useSelector instead of store.getState()?', 'Calling getState during render reads a snapshot but does not subscribe the component to changes, so the UI may become stale. useSelector subscribes to the selected data and schedules rendering when that selection changes.', `// Avoid in a component: const items = store.getState().cart.items;
const items = useSelector(state => state.cart.items);`, 'React / Redux Toolkit'),
  q('redux-mistake-action-payload', 'Common Mistakes', 'Why can dispatching an action without its payload cause a bug?', 'A reducer may depend on payload fields such as an item ID or product data. If the action is dispatched without that required value, the reducer receives undefined and may add invalid data or fail. Match the action creator’s expected arguments.', `dispatch(addItem(product)); // payload provided
dispatch(removeItem(product.id)); // identifier provided`),
  q('redux-mistake-too-many-slices', 'Common Mistakes', 'Should every small state value have its own Redux slice?', 'No. Slices should normally represent meaningful features or domains and group related state transitions. Use local component state for local ephemeral UI, and avoid splitting every field into its own slice without a real ownership or reuse need.', `// A cart slice can own related data together:
{ items: [], coupon: null, status: 'idle' }
// A one-off popover can stay in useState.`),
]