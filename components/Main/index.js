import MainCard from '../../components/MainCard';
import AsideCard from '../../components/AsideCard';
import { Container } from './styles';

import isMultipleOfSix from '../../utils/isMultipleOfSix';

export default function Main({ data: news }) {
  // const actualPage = 1;

  // const [news, setNews] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <main>
        { 
          !news || !news.length ? <h1>Carregando...</h1> : 
          news.map(n => isMultipleOfSix(news.indexOf(n)) ? 
            <MainCard 
              key={n._id}
              title={n.title}
              pictureUrl={n.pictureUrl}
              eye={n.eye}
              link={n.slug}
              index={news.indexOf(n)}
              state={n}/> : false)
        }
      </main>
      <aside>
        {!news || !news.length ? <></> : 
          news.map(n => !isMultipleOfSix(news.indexOf(n)) ? 
            <AsideCard 
              key={n._id}
              title={n.title}
              pictureUrl={n.pictureUrl}
              eye={n.eye}
              link={n.slug}
              index={news.indexOf(n)}
              state={n}/> : false)}
      </aside>
    </Container>
  );
}