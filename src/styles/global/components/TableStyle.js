import styled from "styled-components";


export const TableStyle = styled.table`
    border-collapse: collapse; 
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    font-size: 0.85em;

    thead {
        background-color: #40403F;
        color: #1b1b1b;
        font-weight: 300;
        
    }

    tbody, tr {
        &:nth-of-type(even){
            background-color: #383836;
        }
    }

    tbody{
        color: #8C8987;
    }

    td{
        
        font-size: 0.9em;
        font-weight: 200;    
        padding: 0.5em 1em;   
        border: 1px solid #40403F;

    }
    @media (max-width: 768px) {
        tr td{
            width: 70vw;
            display: flex;
            flex-wrap: wrap;
            justify-content: end;
            position: relative;

            &::before{
                content: attr(data-title);
                position: absolute;
                left: 15px;
                display: block;
                font-weight: bold;
            }
        }
        thead {
            display: none;
        }

    }
`