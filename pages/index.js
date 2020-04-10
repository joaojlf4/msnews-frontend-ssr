import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import api from '../services/api';
import Head from 'next/head';

export default function MainPage({ news }){
  return (
    <>
      <Head>
        <title>MS News - O jornal do montessionense.</title>
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