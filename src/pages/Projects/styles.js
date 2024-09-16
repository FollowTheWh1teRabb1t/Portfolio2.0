import styled from 'styled-components';
import BackgroundImage from '../../assets/background.png';

export const Container = styled.div`
    min-height: 200vh; /* Garantir que o conteúdo se ajuste ao viewport */
    font-family: 'Playfair Display', serif; /* Fonte consistente */
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};


    > .background {
      background-image: url(${BackgroundImage}); 
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat; 
     }

    > header.menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.WHITE};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 30px; 
        box-shadow: 0 4px 8px rgba(0,0,0,0.5);
        z-index: 1000; 
    }

    .menu h1 {
        font-size: 1.8rem; 
        margin: 0;
    }


    .backButton {
        background: none;
        text-decoration: none;
        border-radius: 20px;
        color: ${({ theme }) => theme.COLORS.RED};
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        border: 2px solid;
        border-color:  ${({ theme }) => theme.COLORS.WHITE};
        cursor: pointer;
        padding: 10px 15px; /* Ajustar o padding */
        transition: color 0.3s ease, border-color 0.3s ease; 
        box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5); 
        font-weight: bolder; 
    }

    .backButton:hover {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 20px; 
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    .boxProject {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    background: linear-gradient(145deg, #333, #444);
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    margin: 20px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.boxProject:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
}

.boxProject img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 15px;
}

.boxProject::before {
    content: '🎨';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    z-index: 2;
}

.boxProject a {
            background: none;
            text-decoration: none;
            border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
            border-radius: 20px;
            color: ${({ theme }) => theme.COLORS.RED};
            background-color:  ${({ theme }) => theme.COLORS.BLACK};
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-top: 10px;
            padding: 10px 15px; /* Ajustar o padding */
            transition: color 0.3s ease, border-color 0.3s ease;
            box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5); 
            font-weight: bolder; 
            z-index: 10; /* Adicionado z-index */
}

.boxProject a:hover {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
}

.boxProject h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.RED};
    margin: 10px 0;
}

.boxProject h2 {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY};
    margin: 10px 0;
}


    .description {
        width: 100%;
        max-width: 800px;
        margin: 60px auto; /* Aumentar a margem superior e inferior */
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
        font-size: 1.2rem;
        padding: 40px; /* Aumentar o padding */
        border-radius: 15px; /* Ajustar o border-radius */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5); /* Sombra mais pronunciada */
        border: 2px solid ${({ theme }) => theme.COLORS.GRAY};
        position: relative;
        top: 0;
        left: 0;
        transform: translateY(-30px); /* Ajuste do deslocamento vertical */
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    }

    .description:hover {
        transform: translateY(-20px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6); /* Sombra mais intensa */
        background-color: ${({ theme }) => theme.COLORS.BLACK}; /* Escurece o fundo ao passar o mouse */
    }

    .description p {
        margin: 0;
        font-family: 'Playfair Display', serif;
        line-height: 1.8;
    }

    .description svg {
        margin-top: 15px;
        color: ${({ theme }) => theme.COLORS.YELLOW};
        animation: blink 1.5s infinite; /* Animação de piscar */
    }

    > .boxProject, .boxDifficult {
        border: 2px solid;
        border-radius: 20px;
        border-color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5); 
        padding: 10px;
    }

`;
