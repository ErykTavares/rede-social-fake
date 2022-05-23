/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const LoginStyle = styled.section`
    ${({theme})=> css`
        align-items: center;
        background: ${({bg})=>`url(${bg}) center center no-repeat`};
        background-size:cover;
        justify-content: end;


        .background_darkblue{
            position: relative;
            width: 480px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;

            &:before{
                content: "";
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                background-color:${theme.colors.darkBlue};
                opacity: .9;
            }
        }


    `}
`