import styled from 'styled-components';

export const LinkMenu = styled.li`
    padding-left: 1.6em;
    margin-top: 1em;
    display: flex;
    color: #ABABAB;
    font-weight: bold;
    align-items: center;
    width: 100%;
    border-left: 0.4em solid #2F2F2F;
    position: relative;
    right: 0.1em;

    svg{
        height: 20px;
        width: 20px;
        margin-right: 1.4em;
    }

    a {
        color: #ABABAB;
        font-size: 0.9em;
        text-decoration: none;
        display: flex;
        align-items: center;
        }

    & :hover{
        color: #04D939;
    }

    .active{
        color: #04D939;
        border-left: 0.4em solid #04D939;
        padding-left: 1.8em;
        position: relative;
        right: 2.2em;
    }
`