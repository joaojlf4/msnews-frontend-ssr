import Head from 'next/head';
import { useRouter } from 'next/router';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content, MarkdownContainer, Eye, Title } from '../../styles/news';
import Markdown from 'react-markdown';
import { useEffect } from 'react';

export default function News(props) {

  const router = useRouter();

  useEffect(() => {
    if(!props.query) {
      router.push('/nao-encontrado');
    }
  }, [props])

  return (
    <>
      {
        props.query ? 
        <>
          <Head>
            <title>{props.query.title || ''}</title>
            <meta property="og:url" content={process.env.APP_URL + props.asPath}/>
            <meta property="og:type" content="article" />
            <meta property="og:title" content={props.query.title || ''} />
            <meta property="og:description" content={props.query.eye || ''} />
            <meta property="og:image" content={props.query.pictureUrl || ''} />
            <meta name="twitter:title" content={props.query.title || ''} />
            <meta name="twitter:description" content={props.query.eye || ''} />
            <meta name="twitter:image" content={props.query.pictureUrl || ''} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <Header />
          <Container>
            {
                <Content>
                  <Title>{props.query.title || ''}</Title>
                  <Eye>{props.query.eye || ''}</Eye>
                  <img src={props.query.pictureUrl || ''} alt={props.query.slug || ''}/>
                  <MarkdownContainer>
                    <Markdown>{props.query.markdown || ''}</Markdown>
                  </MarkdownContainer>
                </Content>
            }
          </Container>
          <Footer />
        </> : <></>
      }
    </>
  );
}

News.getInitialProps = async ctx => {
  if(ctx.query.title){
    return ctx;
  }else {
    const slug = ctx.asPath.split('/')[2]
    try {
      const response = await api.get(`news?title=${slug}`);
      return {
        query: response.data,
        asPath: `/news/${slug}`
      };
    } catch (err) {
      return {}
    }
  }
}