import React from 'react';
import { StyleQuemSomos, CardContainerRow, CardContainer, CardImage } from './QuemSomos.styles';
import Header from '../../components/views/LandingPage/Header/Header';

function QuemSomos() {
    return (
        <StyleQuemSomos>
            <Header />
            <h2>Quem Somos</h2>
            <div className='paragrafo'>
                <p>Somos uma organização dedicada à proteção e bem-estar dos animais. Nossa missão é promover o amor e o respeito pelos animais, garantindo que vivam vidas saudáveis e felizes.</p>
                <p>Resgatamos, reabilitamos e encontramos lares responsáveis para animais em necessidade, além de educar a comunidade sobre o cuidado responsável e defender os direitos dos animais. Junte-se a nós para criar um mundo onde todos os animais sejam amados e protegidos.</p>
            </div>

            <CardContainerRow>
                <CardContainer>
                    <CardImage src="/victor.JPG" alt="Card 1" />
                </CardContainer>
                <CardContainer>
                    <CardImage src="/rafael.JPG" alt="Card 2" />
                </CardContainer>
                <CardContainer>
                    <CardImage src="/jose.JPG" alt="Card 3" />
                </CardContainer>
                <CardContainer>
                    <CardImage src="/francheska.JPG" alt="Card 4" />
                </CardContainer>
            </CardContainerRow>
            <div className='fileira'>
                <div>
                    <p>Victor Henrique V. da Silva</p>
                    <a id="icone" href="https://www.linkedin.com/in/victorhvechi/" target="_blank"><img src="/linkedin_logo.svg" alt="icone linkedin"></img></a>
                    <a id="icone" href='https://github.com/VictorVechi' target="_blank"><img src="/github_logo.svg" alt="icone github"></img></a>
                </div>
                <div>
                    <p>Rafael Fantin Camargo</p>
                    <a id="icone" href="https://www.linkedin.com/in/rafaelfantincamargo/" target="_blank"><img src="/linkedin_logo.svg" alt="icone linkedin"></img></a>
                    <a id="icone" href='https://github.com/rffantin' target="_blank"><img src="/github_logo.svg" alt="icone github"></img></a>
                </div>
                <div>
                    <p>José Felipe de Proença</p>
                    <a id="icone" href="https://www.linkedin.com/in/jos%C3%A9-felipe-de-proen%C3%A7a-5895a6238/" target="_blank"><img src="/linkedin_logo.svg" alt="icone linkedin"></img></a>
                    <a id="icone" href='https://github.com/JojoPrc' target="_blank"><img src="/github_logo.svg" alt="icone github"></img></a>
                </div>
                <div>    
                    <p>Francheska Oliveira Pereira</p>
                    <a id="icone" href="https://www.linkedin.com/in/francheska-oliveira-783b40134/" target="_blank"><img src="/linkedin_logo.svg" alt="icone linkedin"></img></a>
                    <a id="icone" href='https://github.com/FrancheskaOliveira' target="_blank"><img src="/github_logo.svg" alt="icone github"></img></a>
                </div>
            </div>
        </StyleQuemSomos>
    )
}

export default QuemSomos;