import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    text-align: left;
    height: 500px;
    gap: 10px;

    > p{
        font-size: 15px;
        font-weight: 300;
        color: #3F3F40;
    }

    > h2{
        font-size: 20px;
        font-weight: 700;
        color: #3F3F40
    }

    > span{
        font-size: 12px;
        font-weight: 400;
        color: #F71963;
    }
`