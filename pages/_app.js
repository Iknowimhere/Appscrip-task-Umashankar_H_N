
import '../styles/global.css'; 

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config,library } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; 

library.add(faChevronDown, faChevronUp);
function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />;
}

export default MyApp;