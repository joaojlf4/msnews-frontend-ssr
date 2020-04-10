import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { 
  Container, 
  EditorContainer, 
  ActionButton,
  TitleInput,
  EyeInput,
  MarkdownInput
 } from '../../styles/write';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function Write(){

  const router = useRouter();

  const [title, setTitle] = useState('');
  const [eye, setEye] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  // const [titleFill, setTitleFill] = useState(false);
  // const [eyeFill, setEyeFill] = useState(false);
  // const [markdownFill, setMarkdownFill] = useState(false);

  async function handleSave(){
    try{
      await api.post('news', {
        title,
        eye,
        pictureUrl,
        markdown
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