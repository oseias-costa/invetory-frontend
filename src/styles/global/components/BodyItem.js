import styled from "styled-components";

export const BodyItem = styled.div`
    svg {
        color: #A69D98;
        background-color: #40403F;
        border-radius: 2em;
        padding: 0.4em;
        width: 2em;
        height: 2em;
        margin-bottom: 1em;
        margin-right: 1em;
        transition: 0.3s ease;

        &:hover{
            background-color: #383836;
        }
    }
`
export const BoxInputs = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const InputItens = styled.input`
    background-color: #1b1b1b;
    color: #A69D98;
    border: 0.1em solid #595958;
    
    border-radius: 4px;
    padding: 0.4em;
    margin-bottom: 0.7em;
    margin-right: 0.7em;
    outline: none;
    `

export const ItemEdit = styled.div`
    display: flex;
    flex-direction: column;
`
export const TopEdit = styled.div`
    display: flex;
    align-items: center;
`

export const SelectItem = styled.select`
    background-color: #1b1b1b;
    color: #A69D98;
    border: 0.1em solid #595958;
    border-radius: 4px;
    padding: 0.3em 0.3em;
    margin-bottom: 0.7em;
    margin-right: 0.7em;
`

export const SpanItem = styled.span`
    color: #73706C;
    padding-bottom: 0.3em;
    font-size: 0.95em;
    padding-left: 0.5em;
`

