import '../styles/globals.css';

import { Layout } from '../components/index';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mateus Codes® - Landing Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Landing page desenvolvida de modo a promover meu trabalho de freelancer. Mostrar que tenho conhecimentos de SEO, criatividade e capacidade. Bem-vindo."
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
