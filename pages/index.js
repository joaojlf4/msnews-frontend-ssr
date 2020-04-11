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
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={"Fique sabendo do que acontece perto de você."} />
        <meta property="og:image" content={props.query.pictureUrl || ''} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={"Fique sabendo do que acontece perto de você."} />
        <meta name="twitter:image" content={props.query.pictureUrl || ''} />
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