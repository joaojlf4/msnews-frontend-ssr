import React from 'react';

import Link from 'next/link';
import { Container } from './styles';

export default function AsideCard({ title, pictureUrl='', eye='', link='..', state }) {

  return !title ? <></> : (
    <Container>
      <Link 
        href={{ pathname: "/news/[slug]", query: state }} 
        as={"/news/" + link}>
        <a>
          <img src={pictureUrl} alt="Saiba mais."/>
          <div>
            <h1>{title}</h1>
            {eye?(<p>{eye}</p>):(<></>)}
          </div>
        </a>
      </Link>
    </Container>
  );
}
