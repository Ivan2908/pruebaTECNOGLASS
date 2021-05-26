import styled from "styled-components";

const Container = styled.div`
    background-color: rgba(255, 255, 255,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 3px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    width: 250px;
    margin: 1rem;
    img {
        max-width: 100%; 
        transition: opacity 500ms ease-in-out 0s;
        overflow: hidden;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const Content = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
`

const Movie = ({movie}) => {
  const { Title, Poster } = movie
  return (
    <Container>
        <img src={Poster} alt={Title} />
        <Content>
            <h3>{Title}</h3>
        </Content>
    </Container>
  );
};

export default Movie;