import styled from 'styled-components';

export const Container = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 50px;
  aside{
    display: flex;
    flex-direction: column;
    flex: 0.9;
    margin-top: 12px;
    position: relative;
    div + div {
      margin-top: 12px;
    }
  }
  main{
    display: flex;
    flex: 0.7;
    flex-direction: column;
  }
  @media (max-width: 1119px){
    /* width: 100%;
    main{
      width: 37%;
    }
    aside{ 
      width: 45%;
    } */
  }
  @media (max-width: 1080px){
    /* display: inline; */
    width: 100%;
    aside{ 
      width: 30em;
    }
    main{
    }
  }
  @media (max-width: 966px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: fit-content;
    main{
      text-align: start;
    }
  }
  @media (max-width: 600px){
    align-items: center;

    aside{
      width: 110%;
    }
    main{
    }
  }
  @media (max-width: 465px){
    main{
    }
    aside{
      width: 130%;
    }
  }
  @media (max-width: 422px){
    aside{
      font-size: 14px;
    }
  }
  @media (max-width: 380px){
    main{
      transform: scale(0.8)
    }
  }
  @media (max-width: 360px){
    main{
      transform: scale(0.8)
    }
    aside {
      font-size: 12px;
    }
  }
  @media (max-width: 322px) {
    aside {
      font-size: 10px;
    }
  }
  
`;
