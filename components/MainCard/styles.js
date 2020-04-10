import styled from 'styled-components';

export const Container = styled.div`
  padding: 11px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  display: flex;
  text-align: start;
  max-width: 90%;
  a{
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
  &:hover{
    opacity: 0.95;
  }
  img{
    width: 25em;
    border-radius: 6px;

  }
  h1{
    font-size: 1.5em;
    color: #333;
    width: 100%;
  }
  p{
    color: #999;
  }
  @media (max-width: 450px){
    img{
      width: 20em;
    }
    h1{
      font-size: 2em;
    }
    p{
      font-size: 1.3em;
    }
  }
`;
