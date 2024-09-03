import { AiOutlineSafety } from "react-icons/ai";
import { Container, Content, Head, IconNav, Input, InputWrapper, Navigation } from "./styles";
import { TbCrown, TbTruckDelivery } from "react-icons/tb";
import { CiCreditCard1} from "react-icons/ci";
import Logo from "../../assets/logo.svg"
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { BsBox2 } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";

export function Header() {
    return (
        <Container>
            <Head>
                <p> <AiOutlineSafety size={20}/> Compra <span> 100% segura</span></p>
                <p> <TbTruckDelivery size={20}/><span> Frete grátis </span> acima de R$ 200</p>
                <p> <CiCreditCard1 size={20}/> <span>Parcele</span> suas compras</p>
            </Head>

            <Content>
                <img src={Logo} alt="Logo da VTex" />
                <InputWrapper>
                    <Input placeholder="O que você está buscando?" />
                    <FaSearch />
                </InputWrapper>

                <IconNav>
                    <BsBox2 />
                    <FaRegHeart />
                    <HiOutlineUserCircle />
                    <MdOutlineShoppingCart />
                </IconNav>
            </Content>

            <Navigation>
                <ul>
                    <li><a href="#">Todas as categorias</a></li>
                    <li><a href="#">Supermercado</a></li>
                    <li><a href="#">Livros</a></li>
                    <li><a href="#">Moda</a></li>
                    <li><a href="#">Lançamentos</a></li>
                    <li><a href="#">Ofertas do dia</a></li>
                    <li><a href="#"> <TbCrown size={20}/>Assinatura</a></li>
                </ul>
            </Navigation>
        </Container>
    )
}