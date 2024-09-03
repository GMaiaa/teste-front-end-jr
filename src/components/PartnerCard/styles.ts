import styled from "styled-components";
import partnerImage from "../../assets/partnerImage.svg"

export const Container = styled.div<{ width?: string; height?: string }>`
    width: ${({ width }) => width || '574px'};
    height: ${({ height }) => height || '350px'};
    background-image: 
        linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), 
        url(${partnerImage});
        background-size: cover;
    background-position: center;
    background-repeat: no-repeat;    
    padding: 114px 40px;
    gap: 8px;
    border-radius: 20px;

    > h1 {
        font-weight: bold;
        font-size: 40px;
        color: #FFF;
    }

    > p {
        font-weight: 400;
        color: #FFF;
    }

    > button {
        margin-top: 32px;
    }
`