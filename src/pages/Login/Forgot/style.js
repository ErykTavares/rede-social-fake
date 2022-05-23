/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const ForgotStyle = styled.div`
    ${({theme})=> css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;

        header{
            width: 100%;
            height: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:space-between;
            margin: 1rem 0;

            p{
                width: 80%;
                font-weight: 400;
                font-size: .8rem;
            }
        }
    `}
`