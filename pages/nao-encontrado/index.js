
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './styles';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

export default function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <img src="https://static.thenounproject.com/png/75231-200.png" alt="?"/>
        <h1>404</h1>
        <p>Página não encontrada</p>
        <Link href="/">
          <div style={{
            display: 'flex',
            marginTop: 20,
            color: '#5FB8A4',
            cursor: 'pointer'
          }}>
            <ArrowLeft size={25} color="#5FB8A4"/>Voltar a página inicial
          </div>
        </Link>
      </Container>
      <Footer></Footer>
    </>
  );
}
