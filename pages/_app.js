import '../styles/globals.css';
import '../styles/login.scss';
import '../styles/layout.scss';
import '../styles/admin.scss';
import { StateContext } from '../Context/StateContext';

function MyApp({ Component, pageProps }) {
  return( 
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp
