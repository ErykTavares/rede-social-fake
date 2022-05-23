/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const SingINStyle = styled.div`
    ${({theme})=> css`
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-around;

            
        form{
            
            .password{
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content:center;
                
                a{
                    position: absolute;
                    top: 8px;
                    right: 48px;
                    font-size: .8rem;
                    font-weight: 400;
                    text-decoration:underline;
                    cursor: pointer;
                }
            }

        }

    `}
`

export const ButtonsDivStyle = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    

    .social{
        width: 100%;
        display: flex;
        align-items:center;
        justify-content:space-between;
        @media screen and (max-width:480px) {
            flex-direction: column;
        }
    }
`