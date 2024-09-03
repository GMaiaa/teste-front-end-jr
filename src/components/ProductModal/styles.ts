import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 770px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: right;

  > button {

    &:hover{
        border: none;
    }

  }
`;

export const ModalBody = styled.div`
  display: flex;
  padding: 16px;
  

  img {
    height: auto;
    margin-bottom: 16px;
  }

  > div{
    margin-left: 70px;

    > h2 {
    font-size: 20px;
    font-weight: 400;
    color: #041E50;
  }

  > h3 {
    font-weight: 600;
    font-size: 20px;
    color: #041E50;
  }

  >  p {
    color: #222222;
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  
  }
 

 
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid #041E50;
  width: 120px;

  button {
    background: none;
    border: none;
    color: #041E50;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;

    &:hover{
        border: none;
    }

  }

  span {
    margin: 0 16px;
    font-size: 16px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff0000;
  }
`;