import { useState } from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, QuantityControl, CloseButton } from './styles'; // Importe os estilos que criar
import { Product } from '../../pages/Home';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../Button';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose}><IoMdClose /></CloseButton>
        </ModalHeader>
        <ModalBody>
          <img src={product.photo} alt={product.productName} />
          <div>
          <h2>{product.productName}</h2>
          <h3>R$ {product.price.toFixed(2)}</h3>
          <p>{product.descriptionShort}</p>
          <QuantityControl>
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </QuantityControl>

          <Button title='Comprar'/>
          </div>
          
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
}