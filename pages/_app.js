import '../styles/globals.css';
import '../styles/main.scss';
import '../styles/navbar.scss';
import '../styles/footer.scss';
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
