import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 1.5em;
  height: 60vh;
  a{
    font-size: 0.8em;
    color: #666;
    display: flex;
    align-items: center;
    margin-top: 0.8em;
    text-decoration: none;
  }
  @media (max-width: 600px){
    font-size: 1.8em;
  }
  @media (max-width: 250px){
    font-size: 1.2em;
  }
  img{
    height: 36%;
    margin-bottom: 25px;
  }
`;
