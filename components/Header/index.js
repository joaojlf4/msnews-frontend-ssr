import { Container, Navigation, Logo, NdContainer, RdContainer } from './styles';
import Link from 'next/link';
// import Head from 'next/head';

export default function Header({ page='' }) {
  return (
  <>
    {/* <NdContainer /> */}
    <RdContainer />
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