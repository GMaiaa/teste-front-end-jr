import { IconType } from 'react-icons';
import { Container } from './styles';

interface IconWithTitleProps {
    icon: IconType; 
    title: string;
    isActive?: boolean; 
}

export function CategoryCard({ icon: Icon, title, isActive }: IconWithTitleProps) {
    return (
        <Container isActive={isActive}>
            <div><Icon size={60} /></div> 
            <h2>{title}</h2> 
        </Container>
    );
}