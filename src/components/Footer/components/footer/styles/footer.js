import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 20px;
  background: radial-gradient(circle, rgba(86,10,6) 0%, rgba(0,0,0) 10%);

  @media (max-width: 1000px) {
    padding: 50px 10px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1050px;
    margin: 0 auto;
    /* background: black; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 5px;
  font-size: 14px;
  text-decoration:none;
  font-size: 15px;
  font-family: 'Quicksand', sans-serif;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
`;