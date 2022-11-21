import styled from "styled-components";

export const ProductItem = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 1em;

    button{
            transition: all 0.1s ease-in;
            padding: 0.4em;
            border-radius: 0.2em;
            font-size: 0.7em;
            background-color: transparent;
            color: #73706C;
            cursor: pointer;

            &:hover{
                color: #03A63C;
            }
        }
    .ButtonActive {
        display: block;

        }
    
    .ItemActive{
        background-color: #04D939;
        color: #012340;
    }

`