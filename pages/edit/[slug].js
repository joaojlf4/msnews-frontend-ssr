import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { 
  Container, 
  EditorContainer, 
  ActionButton,
  TitleInput,
  EyeInput,
  MarkdownInput
 } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function Write(){

  const router = useRouter();
  
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [eye, setEye] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const slug = router.query.slug || '';

  async function handleSave(){
    try{
      await api.put('news/' + id, {
        id,
        title,
        eye,
        pictureUrl,
        markdown,
        slug
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('accessToken')
        }
      });
      router.push('/');
    }catch(err){
      alert('Ocorreu um erro.');
      router.push('/');
    }
  }

  useEffect(() =>{ 
    async function loadNew(){
      try{
        const { data } = await api.get(`news?title=${slug}`)
          
        setId(data._id || '');
        setTitle(data.title || '');
        setEye(data.eye || '');
        setPictureUrl(data.pictureUrl || '');
        setMarkdown(data.markdown || '');
      }catch(err){
        router.push('/nao-encontrado')
      }
    }
    loadNew();
  }, [router]);

  return (
    <>
      {true ? (
        <Container>
          <Header page="write"></Header>
          <EditorContainer>
            <TitleInput 
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Título"/>
            <div> 
              <EyeInput 
                value={eye}
                onChange={e => setEye(e.target.value)}
                placeholder="Olho"/>
                <input 
                  className="pictureUrl"
                  placeholder="URL da imagem"
                  value={pictureUrl}
                  onChange={e => setPictureUrl(e.target.value)}/>
            </div>
            <MarkdownInput 
              value={markdown}
              onChange={e => setMarkdown(e.target.value)}
              placeholder={"Markdown"}></MarkdownInput>
            <section>
              <Link href="/">
                <ActionButton 
                  action='decline'
                  >Descartar</ActionButton>
              </Link>
                <ActionButton 
                  action='publish'
                  onClick={handleSave}>
                    Publicar
                </ActionButton>
            </section>
          </EditorContainer>
        </Container>
      ) : (
        <Redirect to="/" from="/write"/>
      )}
      <Footer />
    </>
  );
}