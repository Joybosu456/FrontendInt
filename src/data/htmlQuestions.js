const makePrompts = (category, questions) => questions.map((question, index) => ({
  id: `html-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index + 1}`,
  category,
  question,
  answer: '',
  example: '',
  language: 'HTML',
}))

const fundamentals = makePrompts('HTML Fundamentals', [
  'What is HTML?',
  'What is HTML5?',
  'What are the major features introduced in HTML5?',
  'What is the difference between HTML and HTML5?',
  'What is the purpose of <!DOCTYPE html>?',
  "What happens if we don't specify DOCTYPE?",
  'What are HTML elements and HTML attributes?',
  'What is the difference between an element and a tag?',
  'What is the difference between block-level and inline elements?',
  'What are void elements in HTML?',
  'What is the difference between <div> and <span>?',
  'What is the difference between id and class?',
  'Can multiple elements have the same id?',
  'What is the purpose of the name attribute?',
  'What are global HTML attributes?',
])

const semantic = makePrompts('Semantic HTML', [
  'What is semantic HTML?',
  'Why is semantic HTML important?',
  'What are semantic HTML5 elements?',
  'What is the difference between <section> and <article>?',
  'What is the difference between <section> and <div>?',
  'What is the difference between <header> and <head>?',
  'What is the purpose of <main>?',
  'What is the purpose of <aside>?',
  'What is the purpose of <nav>?',
  'When would you use <figure> and <figcaption>?',
  'Why should we avoid using <div> for everything?',
])

const forms = makePrompts('Forms', [
  'What are the different types of HTML forms?',
  'What are the different HTML5 input types?',
  'What is the purpose of the <label> element?',
  "Why should the for attribute of <label> match the input's id?",
  'What is the difference between disabled and readonly?',
  'What is the difference between checked and selected?',
  'What is the difference between button, submit, and reset?',
  'What is the difference between GET and POST forms?',
  'What is HTML form validation?',
  'What are required, pattern, min, max, minlength, and maxlength?',
  'What is the purpose of the autocomplete attribute?',
  'What is the difference between placeholder and value?',
  'What is the purpose of the fieldset and legend elements?',
  'How do you make an HTML form accessible?',
])

const accessibility = makePrompts('Accessibility', [
  'What is web accessibility?',
  'What is ARIA?',
  'What are ARIA roles?',
  'When should you use ARIA?',
  'Why should semantic HTML be preferred over ARIA?',
  'What is aria-label?',
  'What is aria-labelledby?',
  'What is aria-describedby?',
  'What is the purpose of the alt attribute?',
  'What should the alt attribute contain for decorative images?',
  'What is tabindex?',
  'What is the difference between tabindex="0" and tabindex="-1"?',
  'How do you make a website keyboard accessible?',
  'How do screen readers interpret HTML?',
  'Why is heading hierarchy important for accessibility?',
])

const seo = makePrompts('SEO', [
  'How does HTML affect SEO?',
  'What is the purpose of the <title> tag?',
  'What is a meta description?',
  'What are canonical URLs?',
  'What is the purpose of heading tags from <h1> to <h6>?',
  'How does semantic HTML improve SEO?',
  'How does alt text affect SEO?',
  'What is structured data?',
  'What is the difference between <strong> and <b>?',
  'What is the difference between <em> and <i>?',
])

const domBrowser = makePrompts('DOM & Browser', [
  'What is the DOM?',
  'How does the browser create the DOM?',
  'What happens when you enter a URL into the browser?',
  'What is the difference between DOM and Virtual DOM?',
  'What is the render tree?',
  'What is CSSOM?',
  'What is the difference between parsing HTML and rendering HTML?',
  'What is reflow?',
  'What is repaint?',
  'What is compositing?',
  'How does JavaScript interact with the DOM?',
  'What is DOM manipulation?',
  'Why can excessive DOM manipulation affect performance?',
])

const scriptsPerformance = makePrompts('Scripts & Performance', [
  'What is the difference between async and defer?',
  'Where should JavaScript files be placed in HTML?',
  'What happens when a normal <script> is encountered while parsing HTML?',
  'What happens when an async script is encountered?',
  'What happens when a defer script is encountered?',
  'What is render-blocking JavaScript?',
  'How can you optimize HTML page performance?',
  'What is lazy loading?',
  'What is the loading="lazy" attribute?',
  'How can you optimize images in HTML?',
  'What is srcset?',
  'What is the <picture> element?',
  'What is resource preloading?',
  'What is the difference between preload, prefetch, and preconnect?',
])

const imagesMultimedia = makePrompts('Images & Multimedia', [
  'What is the difference between <img> and <picture>?',
  'What is the purpose of srcset?',
  'What is the purpose of the sizes attribute?',
  'What are responsive images?',
  'What is the difference between SVG and Canvas?',
  'When would you use SVG instead of Canvas?',
  'When would you use Canvas instead of SVG?',
  'How do you embed audio in HTML5?',
  'How do you embed video in HTML5?',
  'What are the important attributes of <video>?',
  'What is the purpose of the poster attribute in <video>?',
])

const storageSecurity = makePrompts('Storage & Security', [
  'What is the difference between localStorage, sessionStorage, and cookies?',
  'What is an HttpOnly cookie?',
  'What is a Secure cookie?',
  'What is the SameSite cookie attribute?',
  'Can JavaScript access an HttpOnly cookie?',
  'Where would you store an authentication token and why?',
  'What is XSS?',
  'How can HTML contribute to XSS vulnerabilities?',
  'What is Content Security Policy?',
  'What is the risk of using innerHTML with user input?',
  'What is sandbox in an iframe?',
])

const advanced = [
  ['What are data-* attributes?', 'Data attributes are custom, non-visible metadata attached to an HTML element using names such as data-product-id. They are exposed through the element dataset API as strings. Use them for small pieces of element-specific data, not as a replacement for application state or private data.', '<button data-product-id="p-42">Add to cart</button>'],
  ['How do you access data-* attributes using JavaScript?', 'The DOM exposes data-* attributes through the element.dataset object. Attribute names become camelCase properties, and values are strings, so convert numeric or boolean values explicitly when needed.', 'const button = document.querySelector("[data-product-id]");\nconst productId = button.dataset.productId;'],
  ['What is contenteditable?', 'The contenteditable global attribute makes an element editable by the user. Its value is enumerated, not simply boolean: use true, false, or plaintext-only where supported. For rich editing, define keyboard behavior, sanitization, selection handling, and an accessible name.', '<div contenteditable="true" role="textbox" aria-label="Edit note">Draft text</div>'],
  ['What is the <template> element?', 'A template holds inert HTML that is not rendered when the page loads. Its content is stored in a DocumentFragment and can be cloned and inserted later. In React applications, component rendering is usually preferable to imperative templates.', '<template id="row-template">\n  <li class="row"></li>\n</template>\nconst row = document.querySelector("#row-template").content.cloneNode(true);'],
  ['What is <dialog>?', 'The dialog element represents a dialog box. showModal() opens it modally in the top layer and makes the rest of the document inert; show() opens it non-modally. Provide a clear title, a way to close it, and sensible focus behavior.', '<dialog id="confirm" aria-labelledby="confirm-title">\n  <h2 id="confirm-title">Remove item?</h2>\n  <button onclick="this.closest(\'dialog\').close()">Cancel</button>\n</dialog>\n<script>document.querySelector("#confirm").showModal();</script>'],
  ['What is an iframe?', 'An iframe embeds another HTML browsing context inside the current document. It has its own document and origin rules, so communicate across origins with postMessage and validate the sender origin.', '<iframe title="Product demo" src="https://demo.example.test"></iframe>'],
  ['What are the security concerns with iframes?', 'Embedded content can navigate, run scripts, request permissions, or communicate with its parent depending on its origin and attributes. Use sandbox restrictions, a restrictive permissions policy, a trustworthy source, and strict origin checks for postMessage. Do not grant capabilities the frame does not need.', '<iframe src="https://widget.example.test"\n  title="Booking widget"\n  sandbox="allow-forms"\n  referrerpolicy="strict-origin-when-cross-origin"></iframe>'],
  ['What is the sandbox attribute?', 'The iframe sandbox attribute applies restrictions such as blocking scripts, forms, popups, and same-origin access unless specific tokens are granted. Start with the fewest permissions and add only those required. Combining allow-scripts with allow-same-origin for same-origin content can undermine isolation.', '<iframe src="/untrusted-preview" title="Preview" sandbox></iframe>'],
  ['What is the difference between hidden and display: none?', 'The hidden attribute expresses that content is not currently relevant and normally removes it from rendering and the accessibility tree, similar to display:none. CSS can override its visual effect, so use the attribute for semantic hidden state and verify styles do not accidentally reveal it.', '<section hidden>Details are not currently available.</section>\n<!-- CSS: [hidden] { display: none !important; } -->'],
  ['What is the purpose of the lang attribute?', 'The lang attribute declares the language of the document or a specific element. Browsers, translation tools, search engines, and assistive technologies can use it to interpret content correctly.', '<html lang="en">\n  <body><p lang="fr">Bonjour.</p></body>\n</html>'],
  ['Why should we specify lang="en" or the appropriate document language?', 'Declaring the correct language helps screen readers select pronunciation rules, allows browsers and translation tools to process text, and gives search engines language context. Set it on the html element and override it on passages in another language.', '<html lang="en">\n  <p>The word <span lang="es">mañana</span> is Spanish.</p>\n</html>'],
  ['What is the purpose of the dir attribute?', 'The dir attribute sets text direction: ltr, rtl, or auto. It supports bidirectional languages and should be preferred over CSS direction for semantic directionality. Use dir="auto" for user-generated text whose direction is unknown.', '<p dir="rtl">مرحبا بالعالم</p>\n<bdi dir="auto">{userProvidedName}</bdi>'],
  ['What are custom HTML elements?', 'Custom elements are author-defined HTML elements registered with the Custom Elements API. Autonomous elements use a hyphenated name and a class extending HTMLElement; customized built-ins extend native elements where supported.', 'class UserBadge extends HTMLElement {\n  connectedCallback() { this.textContent = "Member"; }\n}\ncustomElements.define("user-badge", UserBadge);'],
  ['What is Shadow DOM?', 'Shadow DOM is an encapsulated DOM subtree attached to a host element. It scopes much of its markup and styling and provides a component boundary. Open and closed describe script access through host.shadowRoot, not a security boundary.', 'const host = document.querySelector("user-badge");\nconst shadow = host.attachShadow({ mode: "open" });\nshadow.innerHTML = "<style>:host { color: teal }</style><slot></slot>";'],
  ['What are Web Components?', 'Web Components are browser standards for reusable components, commonly combining custom elements, Shadow DOM, and HTML templates/slots. They can be used with frameworks, but lifecycle, events, styling, and accessibility still need deliberate design.', 'class InfoCard extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: "open" }).innerHTML = "<article><slot></slot></article>";\n  }\n}\ncustomElements.define("info-card", InfoCard);'],
  ['What is the difference between Shadow DOM and Virtual DOM?', 'Shadow DOM is a browser feature that encapsulates a real DOM subtree and its styles. A Virtual DOM is a programming technique: a library keeps an in-memory description of UI and compares it between renders. They solve different problems and can be used together.', '<!-- Shadow DOM: browser-managed encapsulated subtree -->\n<info-card><p>Visible through a slot</p></info-card>\n// Virtual DOM libraries compare element descriptions before DOM updates.'],
]

const advancedQuestions = advanced.map(([question, answer, example], index) => ({
  id: `html-advanced-${index + 1}`,
  category: 'Advanced HTML',
  question,
  answer,
  example,
  language: question.includes('JavaScript') || question.includes('data-*') || question.includes('contenteditable') || question.includes('custom HTML') || question.includes('Shadow DOM') || question.includes('Web Components') ? 'HTML + JavaScript' : 'HTML',
}))

const scenarios = [
  ['How would you make a large form accessible?', 'Group related controls with fieldset and legend, associate every input with a visible label, preserve logical source and tab order, and describe instructions and errors in text with aria-describedby. Use appropriate input types and native constraints, announce submission feedback, focus the first invalid field, and test keyboard and screen-reader flows.', '<form>\n  <fieldset>\n    <legend>Contact details</legend>\n    <label for="email">Email address</label>\n    <input id="email" name="email" type="email" required aria-describedby="email-help email-error">\n    <small id="email-help">We will send your receipt here.</small>\n    <p id="email-error" role="status"></p>\n  </fieldset>\n</form>'],
  ['How would you optimize a page containing many images?', 'Resize images to the largest rendered dimensions rather than shipping originals, choose modern compressed formats where supported, and provide responsive candidates with srcset and sizes. Set width and height to reserve layout space, lazy-load below-the-fold images, and prioritize only the true above-the-fold hero image.', '<img src="/images/item-640.webp"\n  srcset="/images/item-320.webp 320w, /images/item-640.webp 640w, /images/item-960.webp 960w"\n  sizes="(max-width: 600px) 100vw, 50vw"\n  width="640" height="480" loading="lazy" alt="Blue ceramic travel mug">'],
  ['How would you improve the HTML structure of a poorly designed webpage containing many <div> elements?', 'Map the page into meaningful regions first, then replace generic wrappers where they express a real purpose: header, nav, main, section, article, aside, and footer. Use headings that describe sections, lists for grouped items, and buttons or links for interactions. Avoid changing tags just for appearance; preserve valid nesting and verify the accessibility tree.', '<header><nav aria-label="Primary">...</nav></header>\n<main><article><h1>Product guide</h1><section aria-labelledby="details"><h2 id="details">Details</h2>...</section></article></main>\n<footer>...</footer>'],
  ['How would you improve the accessibility of a custom dropdown?', 'Prefer a native select for ordinary choice lists. If custom behavior is essential, implement the appropriate combobox/listbox pattern completely: accessible name, expanded and controls state, keyboard navigation, selected state, Escape and focus management, and screen-reader announcements. Test with keyboard and assistive technology; ARIA attributes alone do not supply behavior.', '<button role="combobox" aria-expanded="true" aria-controls="city-options" aria-activedescendant="city-2">Choose a city</button>\n<ul id="city-options" role="listbox"><li id="city-2" role="option" aria-selected="true">Oslo</li></ul>'],
  ['How would you make a custom modal accessible?', 'Use a native dialog with showModal when possible. Give it an accessible title, move focus into it when opened, keep keyboard focus inside while modal, support Escape and a visible close button, and restore focus to the opener on close. Ensure background content is inert and avoid nested modal traps.', '<dialog aria-labelledby="dialog-title">\n  <h2 id="dialog-title">Confirm changes</h2>\n  <p>Your draft will be saved.</p>\n  <button type="button" onclick="this.closest(\'dialog\').close()">Close</button>\n</dialog>'],
  ['How would you make a clickable <div> accessible?', 'Use a button for an action or an anchor for navigation; native elements already provide keyboard activation, focus, and semantics. If a non-native element is unavoidable, it needs an appropriate role, tabindex, accessible name, keyboard handling for Enter/Space, visible focus, and disabled behavior. Replacing it with a native control is usually safer.', '<button type="button" onclick="saveDraft()">Save draft</button>\n<a href="/profile">View profile</a>'],
  ['How would you optimize the loading of JavaScript on a production website?', 'Remove unused code, split bundles by route or feature, and load non-critical scripts with defer or dynamic import. Use async only for independent scripts where execution order does not matter. Add only necessary third-party scripts, cache versioned assets, and measure transfer and execution cost in production-like conditions.', '<script defer src="/assets/app.abc123.js"></script>\n<script async src="https://analytics.example.test/tag.js"></script>'],
  ['How would you improve the SEO of a React application?', 'Ensure important pages expose crawlable, meaningful HTML: use server rendering or static generation when appropriate, unique titles and descriptions, canonical URLs, semantic headings and links, and structured data that matches visible content. Provide a sitemap and handle status codes and redirects correctly; validate rendered output with search tools.', '<title>Trail shoes | Northstar</title>\n<meta name="description" content="Compare lightweight trail shoes for day hikes.">\n<link rel="canonical" href="https://shop.example.test/trail-shoes">'],
  ['How would you handle user-generated HTML safely?', 'Avoid injecting user content as HTML. Render it as text by default. If rich HTML is a product requirement, sanitize it with a maintained allowlist-based sanitizer, validate URLs and attributes, use a restrictive Content Security Policy as defense in depth, and never rely on client-side checks alone.', '<p id="comment"></p>\n<script>comment.textContent = userComment;</script>\n<!-- For rich HTML, sanitize before inserting; never trust raw input. -->'],
  ['How would you investigate poor page performance from the HTML/browser side?', 'Record a performance trace and inspect network waterfalls, response timing, parser-blocking scripts, layout shifts, image dimensions and formats, long tasks, and repeated layout work. Use Lighthouse and Core Web Vitals to locate the user-facing issue, then change one bottleneck and measure again.', '<link rel="preload" as="image" href="/hero.avif" fetchpriority="high">\n<img src="/hero.avif" width="1440" height="900" alt="Mountain trail at sunrise">'],
  ['How would you structure HTML for a large e-commerce product page?', 'Give the page one main landmark and a clear product heading. Use an ordered breadcrumb navigation, a product section with gallery and descriptive alt text, price and availability as text, a real purchase form with a labeled variant select and submit button, and separate sections for details, reviews, and related products. Make each section heading and action understandable out of context.', '<main>\n  <nav aria-label="Breadcrumb">...</nav>\n  <article><h1>Alpine shell jacket</h1>\n    <section aria-label="Product images">...</section>\n    <p>$189</p><form><label for="size">Size</label><select id="size">...</select><button>Add to cart</button></form>\n  </article>\n</main>'],
  ['How would you make a navigation menu accessible?', 'Use a nav landmark with a meaningful label and ordinary links for page navigation. Keep DOM and tab order logical, show visible focus, indicate the current page with aria-current, and ensure any expandable mobile menu button exposes aria-expanded and controls the menu. Do not apply application-menu roles to a normal website navigation.', '<nav aria-label="Primary">\n  <a href="/products" aria-current="page">Products</a>\n  <a href="/about">About</a>\n</nav>'],
  ['How would you handle responsive images for mobile and desktop?', 'Use picture with source media/type when art direction or format selection is needed, and img srcset/sizes when the same image has multiple resolutions. Include a fallback src, intrinsic width and height, and meaningful alt text. Confirm the browser picks suitable candidates at different viewports and pixel densities.', '<picture>\n  <source media="(max-width: 600px)" srcset="/banner-mobile.webp">\n  <source type="image/avif" srcset="/banner-wide.avif">\n  <img src="/banner-wide.jpg" width="1200" height="500" alt="Team preparing a product launch">\n</picture>'],
  ['How would you prevent unnecessary resources from blocking initial page rendering?', 'Keep critical CSS small and available early, defer or async non-critical scripts according to dependency requirements, and lazy-load below-the-fold media and modules. Preload only resources needed immediately and avoid excessive third-party tags, which compete for bandwidth and main-thread time.', '<link rel="preload" href="/fonts/site.woff2" as="font" type="font/woff2" crossorigin>\n<script defer src="/assets/app.js"></script>\n<img src="/below-fold.webp" loading="lazy" width="800" height="600" alt="...">'],
  ['How would you improve Core Web Vitals from the HTML/resource-loading side?', 'For LCP, prioritize the actual hero resource with responsive sizing and appropriate fetch priority; do not lazy-load it. For CLS, include image/video dimensions and reserve space for embeds and late content. For INP, reduce blocking scripts and third-party work, split non-critical code, and keep event handlers small; measure field and lab data.', '<img src="/hero-960.webp"\n  srcset="/hero-640.webp 640w, /hero-960.webp 960w"\n  sizes="100vw" width="960" height="540" fetchpriority="high"\n  alt="Hiker crossing a ridge">\n<iframe width="560" height="315" title="Product demo" loading="lazy" src="..."></iframe>'],
]

const scenarioQuestions = scenarios.map(([question, answer, example], index) => ({
  id: `html-scenario-${index + 1}`,
  category: 'Scenario-Based',
  question,
  answer,
  example,
  language: 'HTML',
}))

export const htmlQuestions = [
  ...fundamentals,
  ...semantic,
  ...forms,
  ...accessibility,
  ...seo,
  ...domBrowser,
  ...scriptsPerformance,
  ...imagesMultimedia,
  ...storageSecurity,
  ...advancedQuestions,
  ...scenarioQuestions,
]