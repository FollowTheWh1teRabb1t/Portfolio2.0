import styled from 'styled-components';
import Profile from '../../../src/assets/white.png';
import { Container } from './styles';
import { Header } from '../../components/Header/Header';
import { FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';    

export default function Home() {
    return (
        <Container>
            <div className='boxDescription'>
                <Header />
                <h1>Olá, Eu sou um programador FullStack, desenvolvedor de interfaces!</h1>
                <p>Meu nome é <strong className='name'>Felipe José de Lima.</strong> Eu construo interfaces usando tecnologias modernas!</p>
                <Link  className='Link' to='/projects' >Clique aqui para ir para a área de projetos!</Link>
            </div>
            <div className='boxSocial'>
                <a href="https://wa.me/42999033921" target='_blank' rel="noopener noreferrer">
                    <FaWhatsapp size={60} />
                </a>
                <a href="https://www.linkedin.com/in/felipe-lima-3189732b6/" target='_blank' rel="noopener noreferrer">
                    <FaLinkedin size={60} />
                </a>
                <a href="mailto:lplplimald@gmail.com" target='_blank' rel="noopener noreferrer">
                    <FaEnvelope size={60} />
                </a>
            </div>
            <div className='boxImg'></div>
        </Container>
    );
}
