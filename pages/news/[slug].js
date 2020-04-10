import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content, MarkdownContainer, Eye, Title } from '../../styles/news';
import Markdown from 'react-markdown';

export default function News() {

  const [title, setTitle] = useState('');
  const [eye, setEye] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [slug, setSlug] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const router = useRouter();

  useEffect(() => {
    setSlug(router.asPath.split('/')[2])
  }, [router])

  useEffect(() => {
    async function loadNew(){
      if(!router.query.title && slug !== '[slug]'){
        try {
          const response = await api.get(`news?title=${slug}`);
          const { data } = response;
          setTitle(data.title);
          setEye(data.eye);
          setPictureUrl(data.pictureUrl);
          setMarkdown(data.markdown);
          setIsLoading(false);
        } catch (err) {
          alert('Ocorreu um erro.');
          router.push('/');
        }
      }else{
        setTitle(router.query.title);
        setEye(router.query.eye);
        setPictureUrl(router.query.pictureUrl);
        setMarkdown(router.query.markdown);
        setIsLoading(false);
      }
    }
    loadNew();
  }, [slug])


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={eye} />
        <meta property="og:image" content={pictureUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={eye} />
        <meta name="twitter:image" content={pictureUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Container>
        {
            isLoading ? <h1>Carregando...</h1> : 
            <Content>
              <Title>{title}</Title>
              <Eye>{eye}</Eye>
              <img src={pictureUrl} alt={slug}/>
              <MarkdownContainer>
                <Markdown>{markdown}</Markdown>
              </MarkdownContainer>
            </Content>
        }
      </Container>
      <Footer />
    </>
  );
}