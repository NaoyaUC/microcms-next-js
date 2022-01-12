import '../styles/globals.css'
import Layout from '../libs/layout'
import Sidebar from '../libs/sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Sidebar />
    </Layout>
  );
}

export default MyApp
