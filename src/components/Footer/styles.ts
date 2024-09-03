import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`
export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #2A2A2A;
    padding-top: 60px;
    margin-top: 170px;
    padding-bottom: 30px;
`
export const Navigations = styled.nav`
    
    > h1 {
        font-size: 13px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
    }

    > ul li{
        margin-top: 24px;
        gap: 5px;
        list-style: none;
    }

    > ul li a{
        font-size: 12px;
        font-weight: 300;
        color: #FFF;
        text-transform: uppercase;
    }

    >div{
        display: flex;
        gap: 30px;
        font-size: 22px;
        margin-top: 75px;
    }
`

export const PaymentMethods = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    > h1 {
        font-size: 13px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
    }

    > div{
        display: flex;
        gap: 30px;
    }
`

export const CardEmail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 380px;
    max-height: 260px;
    background-color: #FFF;
    border-radius: 10px;
    text-align: center;
    margin-left: 240px;
    

    > h3 {
       font-size : 18px ;
       font-weight: 300;
       color: #3F3F40;
       text-transform: uppercase;

       > span {
        margin-left: 5px;
        font-size: 21;
        font-weight: bold;
        text-transform: uppercase;
       }
    }

    > p {
        margin-top: 15px;
        font-size: 12px;
        font-weight: 300;
        color: #3F3F40 ;
    }

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-top: 20px
        

        
    }

    
`

export const InputAlternative = styled.input`
    padding: 13px 0 13px 25px;
    border: 1px solid #2A2A2A;
    border-radius: 4px;
    color: #2A2A2A;

    &::placeholder{
        text-transform: uppercase;
        color: #C0C0C0;
    }
`

export const ButtonAlternative = styled.div`
    background-color: #F71963;
    padding: 13px 20px;
    border-radius: 4px;
    cursor: pointer;

    text-transform: uppercase;
    font-weight: bold;
    color: #FFF;

    &:hover{
        filter: brightness(0.9);
        transition : 708ms;
        transform : translateY(-0px);
    }
`

export const Foot = styled.footer`
    display: flex;
    border-top: 1px solid #FFF;
    background-color: #2A2A2A;
    padding: 22px 106px 22px 95px;
    justify-content: space-between;


   > p {
        width: 60%;
    }

    > div {
        display: flex;
        gap: 30px;

        > img{
            width: 106px;
        }
    }
`