import { TableStockMovement } from '../components/TableStockMovement'
import { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Routes, Route } from 'react-router-dom'
import { movementData } from '../utils/movementData'

export const StockMovement = () => {
    const { movement, setMovement } = useContext(ProductContext) 
    const [ selectedItem, setSelectedItem ] = useState('')
    
    return(
        <Routes>
            <Route path='./'>
                <TableStockMovement 
                    movement={movement}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}  
                    data={movementData}
                />  
            </Route>
        </Routes>
    )
}