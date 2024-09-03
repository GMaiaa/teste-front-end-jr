import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6px;

    font-family: "Poppins", sans-serif;
    width: 100%;
    align-items: center;
`

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;

    > p{
        display: flex;
        font-size: 12px;
        color: #9F9F9F;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        gap: 5px;

        > span {
        color: #F71963;
        font-weight: 600;
    }
    }

   
`

export const Content = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

`

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
    
    > svg {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #9F9F9F;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 14px 10px 14px 24px;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    color: #000;
    outline: none;

    &::placeholder {
        color: #9F9F9F;
        font-size: 14px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
    }

    &:focus{
        border: 1px solid #ccc;
    }
`;


export const IconNav = styled.div`
    display: flex;
    font-size: 25px;
    color: #9F9F9F; 
    gap: 30px;
    
`

export const Navigation = styled.nav`
    width: 80%;
    margin-top: 20px;

    > ul{
        display: flex;
        justify-content: space-between;
    }

    > ul li{
        list-style: none;
    }

    > ul li a {
        display: flex;
        text-transform: uppercase;
        font-weight: 600;
        text-decoration: none;
        color: #9F9F9F; 
        align-items: center;
        gap: 12px;
    }
`