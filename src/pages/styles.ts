import styled from "styled-components";
import BannerImage from "../assets/banner.svg";
import LeftArrow from "../assets/leftArrow.svg";
import RightArrow from "../assets/rightArrow.svg";

export const Container = styled.div`
    background-color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center; 
    font-family: "Poppins", sans-serif;
`;

export const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 395px;
    background-image: 
        linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), 
        url(${BannerImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding: 50px 90px;
    color: #FFF;
    font-weight: 600;
    margin-top: 11px;

    > div {
        display: flex;
        flex-direction: column; 
        gap: 10px; 

        > h1 {
            font-size: 48px;
            width: 600px;
            margin: 0; 
        }

        > h3 {
            font-size: 36px;
            font-weight: 600;
            margin: 0; 
        }

        > button {
            background-color: #F71963;
            padding: 17px;
            width: 227px;
            border: none;
            border-radius: 5px;
            color: #FFF;
            font-weight: 600;
            font-family: "Poppins", sans-serif;
        }
    }
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   align-items: center;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    padding: 30px 100px;
`;

export const ProductsSection = styled.div`
    text-align: center;
    margin-top: 40px;

    h1 {
        color: #FF007F;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

export const CategoryNav = styled.nav`
    width: 100%;
    margin-top: 20px;

    > ul {
        display: flex;
        justify-content: space-between;
        padding: 0 100px;
    }

    > ul li {
        list-style: none;
        border: 1px solid #BDBDBD;
        padding: 8px 70px;
    }

    > ul li a {
        display: flex;
        text-transform: uppercase;
        font-weight: 600;
        text-decoration: none;
        color: #9F9F9F;
        align-items: center;
        gap: 12px;
        padding: 10px 0;
        transition: color 0.3s;

        &:hover, &.active {
            color: #FF007F;
        }
    }
`;

export const ProductsList = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden; 

  .products-container {
    display: flex;
    gap: 62px;
    margin-top: 20px;
    overflow-x: hidden; 
    scroll-behavior: smooth;
  }
`;

export const Arrow = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  &:hover{
    border: none;
  }

  ${({ direction }) => direction === 'left' && `
    left: 10px; 
    background-image: url(${LeftArrow});
  `}

  ${({ direction }) => direction === 'right' && `
    right: 10px; 
    background-image: url(${RightArrow});
  `}
`;


export const Partners = styled.div`
    display: flex;
    gap: 100px;
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    
    >h1{
        font-weight: bold;
        font-size: 30px;
        color: #F71963;
    }

    > div {
        margin-top: 88px;
        display: flex;
        gap: 90px;
    }

`
