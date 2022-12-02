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
        margin-right: 1em;
        margin-bottom: 1.5em;
        position: relative;
        bottom: -0.8em;
        left: -0.5em;
    }

    a {
        color: #ABABAB;
        font-size: 0.9em;
        text-decoration: none;
        display: flex;
        align-items: center;
        }
    p{
        display: none;
        background-color: #2F2F2F;
        border: 0.1em solid #373737;
        padding: 0.5em;
        border-radius: 0.4em;
    }

    & :hover{
        color: #04D939;
        p{
            display: block;
        }
    }

    .active{
        color: #04D939;
        border-left: 0.4em solid #04D939;
        padding-left: 1.8em;
        position: relative;
        right: 2.2em;
    }
`