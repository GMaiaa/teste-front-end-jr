import { MdDevicesOther } from "react-icons/md";
import { Header } from "../components/Header";
import { Arrow, BannerWrapper, CategoryNav, CategoryWrapper, Container, Content, Partners, ProductsList, ProductsSection, Section } from "./styles";
import { CategoryCard } from "../components/CategoryCard";
import { FaStore } from "react-icons/fa";
import { RiDrinks2Line } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { TbHealthRecognition, TbTreadmill } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { ProductCard } from "../components/ProductCard";
import productsData from '../produtos.json';
import { useRef, useState } from "react";
import { CardInfo } from "../components/PartnerCard";
import Logo from "../assets/logo.svg"
import { Footer } from "../components/Footer";
import { ProductModal } from "../components/ProductModal";


export interface Product {
    photo: string;
    productName: string;
    descriptionShort: string;
    price: number;
  }

export function Home() {
    const products = productsData.products as Product[];

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const listRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (listRef.current) {
            const scrollAmount = 300;
            listRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <Container>
            <Header />
            <BannerWrapper>
                <div>
                    <h1>Venha conhecer nossas promoções</h1>
                    <h3>50% Off nos produtos </h3>
                    <button> Ver Produto </button>
                </div>
            </BannerWrapper>
            <Content>
                <CategoryWrapper>
                    <CategoryCard isActive icon={MdDevicesOther} title="Tecnologia" />
                    <CategoryCard icon={FaStore} title="Supermercado" />
                    <CategoryCard icon={RiDrinks2Line} title="Bebidas" />
                    <CategoryCard icon={VscTools} title="Ferramentas" />
                    <CategoryCard icon={TbHealthRecognition} title="Saúde" />
                    <CategoryCard icon={TbTreadmill} title="Esportes e Fitness" />
                    <CategoryCard icon={GiClothes} title="Moda" />
                </CategoryWrapper>
                <ProductsSection>
                    <h1> Produtos Relacionados </h1>
                    <CategoryNav>
                        <ul>
                            <li><a href="#" className="active">Celular</a></li>
                            <li><a href="#">Acessórios</a></li>
                            <li><a href="#">Tablets</a></li>
                            <li><a href="#">Notebooks</a></li>
                            <li><a href="#">Tvs</a></li>
                            <li><a href="#">Ver Todos</a></li>
                        </ul>
                    </CategoryNav>
                </ProductsSection>
                <ProductsList>
                    <Arrow direction="left" onClick={() => scroll('left')} />
                    <div className="products-container" ref={listRef}>
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                photo={product.photo}
                                productName={product.productName}
                                price={product.price}
                                onClick={() => handleProductClick(product)} // Abra o modal ao clicar
                            />
                        ))}
                    </div>
                    <Arrow direction="right" onClick={() => scroll('right')} />
                </ProductsList>

                <Partners>
                    <CardInfo title="Parceiros"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        containerWidth="600px"
                        containerHeight="400px" />
                    <CardInfo title="Parceiros"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        containerWidth="600px"
                        containerHeight="400px" />
                </Partners>

                <Section>
                    <h1> Produtos Relacionados </h1>
                    <div>
                        <CardInfo title="Produtos"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            containerWidth="600px"
                            containerHeight="300px" />
                        <CardInfo title="Produtos"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            containerWidth="600px"
                            containerHeight="300px" />
                    </div>
                </Section>

                <Section>
                    <h1> Navegue por marcas </h1>
                    <div>
                        <img src={Logo} />
                        <img src={Logo} />
                        <img src={Logo} />
                        <img src={Logo} />
                        <img src={Logo} />
                    </div>
                </Section>
            </Content>

            {selectedProduct && (
                    <ProductModal product={selectedProduct} onClose={handleCloseModal} />
                )}
            <Footer/>
        </Container>
    )
}
