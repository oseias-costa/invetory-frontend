import styled from "styled-components";

export const AppStyle = styled.div`
    display: flex;
    background: rgb(2,77,49);
    background: radial-gradient(circle, rgba(2,77,49,1) 27%, rgba(31,31,31,1) 86%);
    border-radius: 0;
    position: relative;
    padding-left: 4em;

    nav {
        position: fixed;
        left: 0;
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        padding-left: 0em;

        nav {
            bottom: 0;
            width: 100vw;
        }
        
    }
`