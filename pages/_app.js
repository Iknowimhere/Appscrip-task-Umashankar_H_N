// pages/_app.js
import '../styles/global.css'; // Make sure this path is correct

// Import Font Awesome CSS and configure it if you're using it
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's imported above

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Add these imports
// ... other imports ...
library.add(faChevronDown, faChevronUp); // Add them to the library
function MyApp({ Component, pageProps }) {
  // You can add global layouts, data fetching, or shared components here
  return <Component {...pageProps} />;
}

export default MyApp;