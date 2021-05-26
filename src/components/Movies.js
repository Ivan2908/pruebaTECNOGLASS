import React, { useEffect,useState,useRef } from 'react'
import axios from "axios"
import styled from "styled-components"
import ImgSlider from "./ImgSlider"
import Movie from "./Movie"

const Movies = (props) => {

    const [ imgSlider, setImgSlider ] = useState([]);
    const [ allMovie, setAllMovie ] = useState([]);
    const inputElement = useRef('');
    const [ search,setSearch ] = useState('');
    const [ filterMovies, setFilterMovies ] = useState([]);

    // Result of the API
    useEffect(() => {
      const consultApi = async () => {
        const apiKey = 'd8204dd7'
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=Joker&page=2`
        const urlAll= `http://www.omdbapi.com/?apikey=${apiKey}&type=movie&page=2&s=marvel`

        const allMoviesResult = await axios.all([
          axios.get(url),
          axios.get(urlAll)
        ])
        
        setImgSlider(allMoviesResult[0].data.Search)
        setAllMovie(allMoviesResult[1].data.Search)
      }
      consultApi();
    },[])

    useEffect(() => {
      setFilterMovies(allMovie.filter( movie => {
        return movie.Title.toLowerCase().includes(search.toLowerCase())
      }))
    },[search, allMovie])

    return (
      <Container>
          <ImgSlider movieSlider={imgSlider}/>
          <Input ref={inputElement} type="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}/>
          <ContainerMovie>
            {
              filterMovies.map( movie => {
                return (
                <Movie 
                  key={movie.imdbID}
                  movie={movie}
                />
                )
              })
            }
          </ContainerMovie>
      </Container>
    );
  };

  const Container = styled.main`
        position: relative;
        min-height: calc(100vh - 250px);
        overflow-x: hidden;
        display: block;
        top: 72px;
        padding: 0 calc(3.5vw + 5px);
            &:after {
            background: url("/images/home-background.png") center center / cover no-repeat fixed;
            content: "";
            position: absolute;
            inset: 0px;
            opacity: 1;
            z-index: -1;
        }
    `;

    const ContainerMovie = styled.div`
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
    `

    const Input = styled.input`
        font-family: inherit;
        font-size: 1.2rem;
        margin-top: 5rem;
        border: 2px solid;
        border-radius: 30px;
        padding: 0.5rem 1.2rem;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    `
  
export default Movies;