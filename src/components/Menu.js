import { Link } from "react-router-dom"
import { MenuStyle } from "../styles/menu/MenuStyle"

export const Menu = () => {
    return(
        <MenuStyle>
            <nav>
                <ul>
                    <li><Link to='/Inicio'>Início</Link></li>
                    <li><Link to='/Produtos'>Produtos</Link></li>
                    <li><Link to='/Estoque'>Estoque</Link></li>
                    <li><Link to='/Vendas'>Vendas</Link></li>
                </ul>
            </nav>
       </MenuStyle>
    )
}