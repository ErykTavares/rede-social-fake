import styled, {css} from 'styled-components';

     

export const ButtonStyle = styled.button`
    ${({theme})=> css`
            
        width : ${({width})=>width};
        height: ${({height})=>height};
        display: flex;
        align-items: center;
        justify-content:center;
        background-color: transparent;
        border: 1px solid white;
        border-radius: .4rem;
        font-weight:400;
        font-size:.9rem;
        text-shadow: 1px 1px 0 #000;
        cursor: pointer;
        transition: .7s;
        margin: .5rem 0;

        &:hover{
            background-color:rgba(256, 256, 256, .9);
            color: black;
            text-shadow: 1px 1px 0 ${theme.colors.weakGray} ;
        }

        svg{
            margin-right: .5rem;
        }
    `}
`