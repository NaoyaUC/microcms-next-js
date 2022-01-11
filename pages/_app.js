import '../styles/globals.css'
import Layout from '../libs/layout'
import Sidebar from '../libs/sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Sidebar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
