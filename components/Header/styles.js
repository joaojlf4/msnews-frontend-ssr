import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 4;
  display: flex;
  width: 100%;
  align-items: center;
  height: 13vh;
  -webkit-box-shadow: 0px 1.5px 10px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 1.5px 10px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 1.5px 10px 0px rgba(0,0,0,0.25);
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); */
  border: 1px solid #FFF;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 2em 5%;
`;
export const NdContainer = styled.header`
  position: fixed;
  z-index: 4;
  display: flex;
  width: 100%;
  align-items: center;
  height: 14vh;
  border: 1px solid #FFF;
  background: rgba(240, 240, 240, 0.6);
  filter: blur(8px);
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 2em 5%;
`;
export const RdContainer = styled.header`
  z-index: 3;
  display: flex;
  width: 100%;
  align-items: center;
  height: 13vh;
  border: 1px solid #FFF;
  background: #f0f0f0;
  filter: blur(4px);
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 2em 5%;
`;

export const Navigation = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  nav{
    display: flex;
    align-items: center;
  }
  ul{
    list-style: none;
    display: flex;
    flex: 0.5;
    justify-content: space-between;
    a{
      text-decoration: none;
      color: #666;
      transition: color 0.2s ease;
      &:hover{
        color: #888;
      }
    }
  }
  @media (max-width: 800px){
    ul {
      display: none;
    }
  }
  .hamburger{
    display: none;
    position: fixed;
    right: 25px;
    height: 25px;
    width: 30px;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    div{
      background: #333;
      height: 4px;
    }
    @media (max-width: 800px){
      display: flex;
    }
  }
  
`;

export const Logo = styled.div`
  width: fit-content;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span{
    background: #333;
    color: #f0f0f0;
    font-size: 0.8em;
    font-weight: bold;
    padding: 7px 6px;
    border-radius: 4px;
    margin-right: 4px;
  }
`;
