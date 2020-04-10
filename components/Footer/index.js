import React from 'react';
import Link from 'next/link';

import { Container, Logo } from './styles';

export default function Footer() {
  return (
    <Container>
      <Link href="/">
        <Logo style={{ textDecoration: 'none', color: '#e5e5e5' }}>
          <span>MS</span>
          News
        </Logo>
      </Link>
      {/* <div>
        <p>Contate nos por nossas redes sociais:</p>
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div> */} 
      <p>Copyright © 2020</p>
    </Container>
  );
}
