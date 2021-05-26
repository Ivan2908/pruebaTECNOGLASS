import React from 'react'
import styled from "styled-components";

const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    height: 100%;
    background-position:top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const Container = styled.section`
    overflow: hidden; 
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display:flex;
    justifiy-content: center;
    align-items: center;
    padding 80px 40px;
    height: 100%;
`
const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-center center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%
`

const CTAInfo = styled.div`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 20px;
    display:block;
    width: 100%;
`

const Button = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color #0063e5;
    width: 100%;
    letter-spacing: 1.4px;
    font-size: 20px;
    padding: 16.5px;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`


const Home = () => {
    return ( 
        <Container>
            <Content>
                <CTA>
                    <CTAInfo>
                        <h1>Enjoy all the movie content of all categories</h1>
                        <Button href="/movies">
                            SEE ALL MOVIES
                        </Button>
                    </CTAInfo>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
}
 
export default Home;