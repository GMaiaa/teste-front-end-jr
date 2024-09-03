import styled from "styled-components";

export const Container = styled.div<{ isActive?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box; 
    max-width: 100%; 
    overflow-x: hidden; 
    
    > div {
        padding: 30px;
        color: ${({ isActive }) => (isActive ? '#FF007F' : 'black')}; 
        box-sizing: border-box; 
    }

    > h2 {
        font-weight: 600;
        font-size: 16px;
        color: ${({ isActive }) => (isActive ? '#FF007F' : 'black')}; 
    }
`;