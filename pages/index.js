import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import api from '../services/api';
import Head from 'next/head';

export default function MainPage({ news }){

  const title = 'MS News - Notícias de Monte Sião e região.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={process.env.APP_URL}/>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={"Fique sabendo do que acontece perto de você."} />
        <meta property="og:image" content="https://scontent.fppy2-1.fna.fbcdn.net/v/t1.0-9/92513165_110004553996149_1839171714169176064_o.jpg?_nc_cat=111&_nc_sid=e3f864&_nc_eui2=AeG9Bq10F2VnFeAodkeHQuLFyeRrN7URg7nJ5Gs3tRGDuQjYDxzrcfJqlloHmV_U0_oi2X8OW3_TsdfOSwVgtghW&_nc_ohc=Aitfars2H10AX8R6X8t&_nc_ht=scontent.fppy2-1.fna&oh=1fde2e5c3c8f12cb1e1a8957174cf093&oe=5EB8E2EC" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={"Fique sabendo do que acontece perto de você."} />
        <meta name="twitter:image" content="https://scontent.fppy2-1.fna.fbcdn.net/v/t1.0-9/92513165_110004553996149_1839171714169176064_o.jpg?_nc_cat=111&_nc_sid=e3f864&_nc_eui2=AeG9Bq10F2VnFeAodkeHQuLFyeRrN7URg7nJ5Gs3tRGDuQjYDxzrcfJqlloHmV_U0_oi2X8OW3_TsdfOSwVgtghW&_nc_ohc=Aitfars2H10AX8R6X8t&_nc_ht=scontent.fppy2-1.fna&oh=1fde2e5c3c8f12cb1e1a8957174cf093&oe=5EB8E2EC" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
      }}>
        <Main data={news}/>
      </div>
      <Footer />
    </>
  );
}

MainPage.getInitialProps = async () => {
  const response = await api.get('news?page=1');
  const news = response.data.docs.reverse();
  return { news }
}