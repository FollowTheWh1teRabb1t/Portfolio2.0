import React from 'react';
import { Container } from './styles'
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { FaLightbulb, FaLaptopCode, FaCogs, FaHeart, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import P1 from '../../assets/P1.png';
import P2 from '../../assets/P2.png';
import P3 from '../../assets/P3.png';
import P4 from '../../assets/P4.png';
import P5 from '../../assets/P5.png';
import P6 from '../../assets/P6.png';
import P7 from '../../assets/P7.png';
import P8 from '../../assets/P8.png';

export default function Projects() {
    
    const renderStars = (count) => {
        return Array(count).fill(0).map((_, index) => (
            <FaStar key={index} size={24} color="gold" />
        ))
    }
    return(
        <Container>
            <header className='menu'>
                <Link  to="/" className='backButton'><FaArrowLeft size={20} /> Voltar</Link>
                <h1>Meus Projetos</h1>
            </header>
            <div className='background'>
                <div className='description'>
                        <p>
                            <FaHeart size={30} color='red'/> Meus projetos pessoais de programação são uma extensão da minha paixão por tecnologia e inovação. 
                            Cada linha de código é um reflexo da minha dedicação em criar soluções funcionais, elegantes e impactantes. 
                            <FaLaptopCode size={30} color='red'/> Desde aplicativos interativos até sistemas robustos, meus projetos representam uma jornada de aprendizado contínuo, 
                            onde exploro novas tecnologias e aprimoro minhas habilidades. 
                            <FaCogs size={30} color='red'/> Combinando criatividade e rigor técnico, eu construo experiências que encantam e facilitam a vida das pessoas. 
                            <FaRocket size={30} color='red'/> A cada projeto, busco não apenas resolver problemas, mas também deixar um toque pessoal e autêntico, 
                            traduzindo ideias em produtos digitais que fazem a diferença. 
                            <FaLightbulb size={30} color='red'/>
                        </p>
            </div>
            </div>
            <section>
            <div className='boxProject'>
                <img src={P1}/>
                <a href='https://new-yugioh-project.vercel.app' target="_blank"  rel="noopener noreferrer">Link para o projeto! </a>
                <h1>Yu-gi-oh Project!</h1>
                <div className='boxDifficult'>
                <h2>Dificuldade:</h2>
                    {renderStars(5)}
                </div>
            </div>
            <div className='boxProject'>
            <img src={P2}/>
                <a href='sorveteria-omega.vercel.app' target="_blank"  rel="noopener noreferrer">Link para o projeto! </a>
                <h1>Sorveteria</h1>
                <div className='boxDifficult'>
                <h2>Dificuldade:</h2>
                    {renderStars(2)}
                </div>
            </div>
            <div className='boxProject'>
                <img src={P3}/>
                <a href='https://restaurante-menu-kappa.vercel.app' target="_blank"  rel="noopener noreferrer">Link para o projeto! </a>
                <h1>Restaurante</h1>
                <div className='boxDifficult'>
                <h2>Dificuldade:</h2>
                    {renderStars(3)}
                </div>
            </div>
            <div className='boxProject'>
                <img src={P4}/>
                <a href='https://loja-de-oculus.vercel.app' target="_blank"  rel="noopener noreferrer">Link para o projeto! </a>
                <h1>Ótica</h1>
                <div className='boxDifficult'>
                <h2>Dificuldade:</h2>
                    {renderStars(2)}
                </div>
            </div>
            <div className='boxProject'>
                <img src={P5}/>
                <a href='https://portfolio1-0-kvg0mg7qm-felipe-jose-de-limas-projects.vercel.app' target="_blank"  rel="noopener noreferrer">Link para o projeto! </a>
                <h1>Portfolio 1.0</h1>
                <div className='boxDifficult'>
                <h2>Dificuldade:</h2>
                    {renderStars(3)}
                </div>
            </div>
            <div className='boxProject'>
                <img src={P6}/>
                <a href='https://branding-enterprise.vercel.app' target="_blank"  rel="noopener noreferrer">Link para o projeto! </a>
                <h1>Agência de Design</h1>
                <div className='boxDifficult'> 
                <h2>Dificuldade:</h2>
                    {renderStars(2)}
                </div>
            </div>
            <div className='boxProject'>
                <img src={P7}/>
                <a href='https://jogo-advinhacao-puce.vercel.app' target="_blank"  rel="noopener noreferrer">Link para o projeto! </a>
                <h1>Jogo de Advinhação</h1>
                <div className='boxDifficult'>
                <h2>Dificuldade:</h2>
                    {renderStars(1)}
                </div>
            </div>
            </section>
        </Container>
    )
}