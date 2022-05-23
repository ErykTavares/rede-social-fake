/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const SearchBarStyle = styled.div`
    ${({theme})=> css`
        position: relative;
        width:${({width})=> width};
        display: flex;
        align-items: center;
        justify-content:center;
        margin-top: .8rem;
            
            label{
                position: relative;
                h4{
                    position: absolute;
                    top: 10px;
                    left: 20px;
                }
            }
            svg{
                position: absolute;
                top: 19px;
                left: 0;
            }

            p{
                display:none;
            }
    `}
`