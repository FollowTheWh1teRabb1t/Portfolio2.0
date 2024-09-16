import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: ${({ theme }) => theme.COLORS.RED};
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.5);
  z-index: 1000;


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    ;
  }

  > .tecnologies {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    

    svg {
      color: ${({ theme }) => theme.COLORS.RED};
      transition: transform 0.3s ease;

      @media (max-width: 768px) {
        width: 40px;
        height: 40px;
      }

      &:hover {
        transform: scale(1.1);
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 20px;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;
