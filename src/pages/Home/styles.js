import styled from 'styled-components';
import Profile from '../../../src/assets/white.png';


export const Container = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     height: 100vh;
     background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      
      > .boxDescription {
         width: 100vh;
         padding: 50px;
         display: flex;
         flex-direction: column;
         gap: 15px;
        
         > h1, p {
            margin-bottom: 20px;
            color: ${({ theme }) => theme.COLORS.WHITE};
         }

         .name {
            color: ${({ theme }) => theme.COLORS.RED};
         }
         
         > .Link {
            background: none;
            text-decoration: none;
            border: 2px solid ${({ theme }) => theme.COLORS.WHITE}; /* Defina a borda como branca */
            border-radius: 20px;
            color: ${({ theme }) => theme.COLORS.RED};
            background-color:  ${({ theme }) => theme.COLORS.BLACK};
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 10px 15px; /* Ajustar o padding */
            transition: color 0.3s ease, border-color 0.3s ease; /* Adicionar transições suaves */
            box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5); /* Ajustar a cor da sombra se necessário */
            font-weight: bolder; 

         }

         > .Link:hover {
            zoom: normal;
            background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
         }
       
      }

     > .boxImg {
         width: 100vh;
         height: 100vh;
         background-image:  url(${Profile});
         background-size: cover;
         background-position: center;
     }

     .boxSocial {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    position: absolute;
    top: 80%;
    left: 5%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3)

  }

     svg {
      color: ${({ theme }) => theme.COLORS.RED}
     }

     svg:hover {
        color: ${({ theme }) => theme.COLORS.WHITE}
     }

     @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

    > .boxDescription {
        width: 100vh;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        @media (max-width: 768px) {
            width: 100%;
            padding: 20px;
            text-align: center;
        }

        > h1, p {
            margin-bottom: 20px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.5rem;

            @media (max-width: 768px) {
                font-size: 1.2rem;
            }
        }

        .name {
            color: ${({ theme }) => theme.COLORS.RED};
        }

        > .Link {
            background: none;
            text-decoration: none;
            border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
            border-radius: 20px;
            color: ${({ theme }) => theme.COLORS.RED};
            background-color: ${({ theme }) => theme.COLORS.BLACK};
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 10px 15px;
            transition: color 0.3s ease, border-color 0.3s ease;
            box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
            font-weight: bolder;

            @media (max-width: 768px) {
                font-size: 1rem;
                padding: 8px 12px;
            }
        }

        > .Link:hover {
            background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
    }

    > .boxImg {
        width: 100vh;
        height: 100vh;
        background-image: url(${Profile});
        background-size: cover;
        background-position: center;

        @media (max-width: 768px) {
         width: 100%;
         height: 50vh;
         background-size: contain;
         background-repeat: no-repeat;
         margin-bottom: 20px;
        }
    }

    .boxSocial {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 500px;
        position: absolute;
        top: 80%;
        left: 5%;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);

        @media (max-width: 768px) {
            width: 80%;
            top: 90%;
            left: 10%;
        }
    }

    svg {
        color: ${({ theme }) => theme.COLORS.RED};

        @media (max-width: 768px) {
            width: 40px;
            height: 40px;
        }
    }

    svg:hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

     
`