import styled from 'styled-components';

export const Container = styled.div`
  min-height: 67vh;
  display: flex;
  justify-content: center;
  padding-top: 2em;
  width: 100%;
`;
export const Content = styled.div`
  color: #111;
  width: 60%;
  font-size: 22px;
  img {
    max-width: 100%;
  }
  @media (max-width: 850px){
    width: 70%;
  }
  @media (max-width: 730px) {
    font-size: 20px;
  }
  @media (max-width: 595px) {
    width: 80%;
  }
  @media (max-width: 595px) {
    font-size: 16px;
  }
  @media (max-width: 337px) {
    font-size: 14px;
  }
  @media (max-width: 280px) {
    width: 90%;
  }
  @media (max-width: 230px) {
    font-size: 12px;
  }
`;

export const MarkdownContainer = styled.div`
  h1, h2, h3, h4, h5, h6{
    margin-top: 25px;
    margin-bottom: 15px;
  }
  p{
    margin-top: 25px;
  }
  ul, ol{
    margin-top: 15px;
    margin-left: 50px;
  }
  border-bottom: 2px solid #CCC;
  padding-bottom: 25px;
`;

export const Title = styled.h1`
  font-size: 2.4em;
  line-height: 1.1em;
  font-weight: 700;
  margin-bottom: 25px;
  @media (max-width: 595px) {
    font-size: 2.1em;
  }
`;

export const Eye = styled.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
`;