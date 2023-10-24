import React from 'react';
import { StyleQuemSomos, CardContainer, CardImage } from './QuemSomos.styles';
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

            <CardContainer>
                <CardImage src="/img/imagem1.jpg" alt="Card 1" />
            </CardContainer>
            <CardContainer>
                <CardImage src="/img/imagem2.jpg" alt="Card 2" />
            </CardContainer>
            <CardContainer>
                <CardImage src="/img/imagem3.jpg" alt="Card 3" />
            </CardContainer>
            <CardContainer>
                <CardImage src="/img/imagem4.jpg" alt="Card 4" />
            </CardContainer>


        </StyleQuemSomos>
    )
}

export default QuemSomos;