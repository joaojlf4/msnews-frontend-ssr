import styled from 'styled-components';

export const Container = styled.div`
  a{
    max-height: 100%;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 11px;
    display: flex;
    align-items: center;
    cursor:pointer;
    position: relative;
    top: 0;
    transition: opacity 0.3s ease;
    transition: top ease 0.3s;
    display: flex;
    flex-direction: row;
    color: inherit;
    text-decoration: none;
    width: 100%;
    max-height: 7em;
    @media (max-width: 290px) {
      height: 150%;
    }
    h1{
      font-size: 85%;
      width: 100%;
    }
    p{
      width: 100%;
      font-size: 80%;
      color: #666;
    }
    img{
      max-height: 5em;
    }
    div{
      display: flex;
      flex-direction: column;
      justify-items: space-between;
      margin-left: 12px;
    }
    &:hover{
      opacity: 0.8;
      top: -0.4em;
    }
  }
  
`;
