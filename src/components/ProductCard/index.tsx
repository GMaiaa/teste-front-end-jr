import { Button } from "../Button";
import { Container } from "./styles";
interface ProductCardProps {
    photo: string;
    productName: string;
    price: number; // Ajustado para number
    onClick: () => void;
}

export function ProductCard({ photo, productName, price, onClick }: ProductCardProps) {

    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const priceInstallments = (price / 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <Container onClick={onClick}>
            <img src={photo} alt={productName} />
            <p>{productName}</p>
            <h2>{formattedPrice}</h2>
            <p>{`Ou 2x de ${priceInstallments} sem juros`}</p>
            <span>Frete grátis</span>

            <Button title="Comprar"/>
        </Container>
    )
}