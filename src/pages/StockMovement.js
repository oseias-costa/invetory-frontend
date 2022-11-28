import { Table } from '../components/Table'
import { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Routes, Route } from 'react-router-dom'
import { movementData } from '../utils/movementData'
import { Section } from '../styles/global/components/Section'

export const StockMovement = () => {
    const { movement, setMovement } = useContext(ProductContext) 
    const [ selectedItem, setSelectedItem ] = useState('')

    const states = { 
        state: movement, 
        setState: setMovement, 
        selectedItem, 
        setSelectedItem
    }
    
    return(
        <Section>
            <Routes>
                <Route path='/' element={
                    <Table
                        states={states}
                        data={movementData} 
                    /> } 
                />
            </Routes>
        </Section>
    )
}