import { Container, Navigation, Logo } from './styles';
import Link from 'next/link';
// import Head from 'next/head';

export default function Header({ page='' }) {
  return (
  <>
    <Container >
      <Navigation>
        <Link href="/">
          <Logo>
            <span>MS</span>
            News {page === 'draft' ? '| Draft' : ''}    
          </Logo>
        </Link> 
      </Navigation>
    </Container>
  </>
);
}