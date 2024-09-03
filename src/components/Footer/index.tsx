import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { ButtonAlternative, CardEmail, Container, Content, Foot, InputAlternative, Navigations, PaymentMethods } from "./styles";
import Visa from '../../assets/visa.svg'
import Elo from '../../assets/elo.svg'
import Alelo from '../../assets/alelo.svg'
import Diners from '../../assets/dinners.svg'
import Ifood from '../../assets/ifood.svg'
import MasterCard from '../../assets/mastercard.svg'
import Pix from '../../assets/pix.svg'
import American from '../../assets/amex.svg'
import Ticket from '../../assets/ticket.svg'
import Sodexo from '../../assets/sodexo.svg'
import VtexWhite from '../../assets/VtexWhite.svg'
import EconverseLogo from '../../assets/EconverdeLogo.svg'


export function Footer() {
    return (
        <Container>
            <Content>
                <Navigations>

                    <h1>Sobre nós</h1>
                    <ul>
                        <li><a href="#">Conheça</a></li>
                        <li><a href="#">Como Comprar</a></li>
                        <li><a href="#">Indicação</a></li>
                    </ul>
                    <div>
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaYoutube /></a>
                    </div>
                </Navigations>
                <Navigations>
                    <h1>Informações Úteis</h1>
                    <ul>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Dúvidas</a></li>
                        <li><a href="#">Prazos de entrega</a></li>
                        <li><a href="#">Formas de Pagamento</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Trocas e devoluções</a></li>

                    </ul>
                </Navigations>
                <PaymentMethods>
                    <h1>Formas de Pagamento</h1>
                    <div>
                        <img src={Visa} />
                        <img src={Elo} />
                        <img src={Alelo} />
                    </div>
                    <div>
                        <img src={Diners} />
                        <img src={Ifood} />
                        <img src={MasterCard} />
                    </div> <div>
                        <img src={Pix} />
                        <img src={American} />
                        <img src={Ticket} />
                    </div>
                    <div>
                        <img src={Sodexo} />
                    </div>
                </PaymentMethods>
                <CardEmail>
                    <h3>Cadastre-se e Receba nossas
                        <span>novidades e promoções</span></h3>
                    <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    <div>
                        <InputAlternative type="email" name="emailNot" id="emailNot" placeholder="seu e-mail" />
                        <ButtonAlternative> Ok </ButtonAlternative>
                    </div>
                </CardEmail>

            </Content>

            <Foot>
                <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>

                <div>
                    <img src={EconverseLogo} />
                    <img src={VtexWhite} />
                </div>
            </Foot>
        </Container>
    )
}