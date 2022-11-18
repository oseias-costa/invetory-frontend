import { Link } from "react-router-dom"

export const Menu = () => {
    return(
        <nav>
            <ul>
                <li><Link to='/Inicio'>Início</Link></li>
                <li><Link to='/Produtos'>Produtos</Link></li>
                <li><Link to='/Estoque'>Estoque</Link></li>
                <li><Link to='/Vendas'>Vendas</Link></li>
            </ul>
        </nav>
    )
}