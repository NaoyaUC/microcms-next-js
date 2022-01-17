import '../styles/globals.css'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Sidebar />
    </Layout>
  );
}

export default MyApp
