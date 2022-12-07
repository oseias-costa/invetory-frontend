import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { StockMenu } from "../styles/global/components/StockMenu";
import { Subtitle } from "../styles/global/components/Subtitle";
import { TableStyle } from "../styles/global/components/TableStyle";

export const Table = ({ states, data }) => {
    const { state, selectedItem, setSelectedItem } = states

    useEffect(() => {
        setSelectedItem(null)
    },[])
    return(
        <>
        <Subtitle>Estoque Mensal</Subtitle>
            <StockMenu>
                <NavLink to={data[0].add}>Adicionar</NavLink>
                {selectedItem 
                ?  <NavLink to={data[0].edit}>Editar</NavLink>
                :  <p>Editar</p>}
                {selectedItem 
                ?  <NavLink to={data[0].delete}>Movimentar</NavLink>
                :  <p>Movimentar</p>}
            </StockMenu>  
        <TableStyle>
        <thead>
            <tr>
                { data[1].map((head, index) => (
                    <td key={index}>{head}</td>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {state && state.map((item, index) => (
                <tr key={item._id}>
                    <td><input 
                            type='checkbox' 
                            value={item._id} 
                            onChange={e => setSelectedItem({id: e.target.value, amount: item.amount})}
                            checked={item._id === selectedItem?.id}
                        />
                    </td>
                    {data && data[2].map((content, index) => (
                        <td key={index} data-title={data[1][index + 1]}>{item[content]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </TableStyle>
    </>
    )
}