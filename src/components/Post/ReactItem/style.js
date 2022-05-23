/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const ReactItemStyle = styled.div`
    ${({theme})=> css`
        width: ${({width})=> width};
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 1rem;

        svg{
            width: ${({small})=> small? "10px" : "15px"};
            height: ${({small})=> small? "10px" : "15px"};
        }

        p{
            font-size: ${({small})=> small? ".7rem" : "1rem"};
            @media screen and ${theme.media.mobileL}{
                font-size:${({small})=> small? ".6rem" : ".9rem"}
            }
            @media screen and (max-width:351px){
                font-size:${({small})=> small? ".6rem" : ".8rem"}
            }
        }
    `}
`