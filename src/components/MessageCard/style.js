/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const MessageCardStyle = styled.div`
    ${({theme})=> css`
        width: ${({width}) => width};
        height: 70px;
        display: flex;
        align-items: center;
        justify-content:center;
        border: 1px solid white;
        border-radius: ${({bdradius})=>bdradius};
        background-color: ${({active})=> active? "#ffff" : "transparent"};
        text-shadow: 1px 1px 0  ${({active})=> active? "none" : "#000"};
        margin: ${({margin})=> margin};
        

        img{
            width: 40px;
            height: 40px;
            margin-right: .5rem;
        }

        .contenttexts{
            position: relative;
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content:center;
    
            h3{
                font-size: 1rem;
                font-weight:500;
                color: ${({active})=> active ? "#000" : "#ffff"};
            }

            h5{
                font-size: .7rem;
                font-weight:500;
                color: ${({active})=> active ? "#000" : "gray"};
            }

            .msgcarddate{
               position:absolute;
               top: 0;
               right: 20px;
            }
        }
    `}
`