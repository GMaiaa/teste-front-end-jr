import { Button } from "../Button";
import { Container } from "./styles";

interface CardInfo {
    title: string;
    text: string;
    containerWidth?: string;
    containerHeight?: string;
}

export function CardInfo({
    title,
    text,
    containerWidth = '574px', 
    containerHeight = '350px' 
}: CardInfo) {
    return (
        <Container width={containerWidth} height={containerHeight}>
            <h1>{title}</h1>
            <p>{text}</p>
            <Button title="Confira" />
        </Container>
    );
}