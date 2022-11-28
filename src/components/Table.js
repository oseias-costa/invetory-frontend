import { useEffect } from "react";
import { NavLink } from "react-router-dom";
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

            <NavLink to={data[0].add}>Adicionar</NavLink>
            {selectedItem 
            ?  <NavLink to={data[0].edit}>Editar</NavLink>
            :  <p>Editar</p>}
            {selectedItem 
            ?  <NavLink to={data[0].delete}>Movimentar</NavLink>
            :  <p>Movimentar</p>}
              
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
            {state && state.map(item => (
                <tr key={item._id}>
                    <td><input 
                            type='checkbox' 
                            value={item._id} 
                            onChange={e => setSelectedItem({id: e.target.value, amount: item.amount})}
                            checked={item._id === selectedItem?.id}
                        />
                    </td>
                    {data && data[2].map((content, index) => (
                        <td key={index}>{item[content]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </TableStyle>
    </>
    )
}