/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const MessageStyle = styled.section`
    ${({theme})=> css`
        width: 100%;
        height:auto;
        min-height:100vh;
        display:flex;
        align-items: center;
        justify-content:center;
        border-radius: .5rem;
        background-color: ${theme.colors.darkBlue};
        margin-top: 1rem;
    `}
`

export const MessageLeftContentStyle = styled.aside`
    ${({theme})=> css`
        width: 30%;
        height: 100vh;
        border-right: 1px solid white;
        padding: .5rem 0;

        .leftheader{
            all: unset;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .msg{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content:space-between;
                padding: 0 .5rem;
            }
        }

        .msgcontent{
            width: 100%;
            height: auto;
            min-height: 160px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:space-around;
        }
    `}
`

export const MessageRightContentStyle = styled.div`
    ${({theme})=> css`
        width: 70%;
        height: 100vh;
        align-items: center;
        justify-content:center;

        .chat{
            width: 100%;
            height: 85%;
            display: flex;
            align-items: start;
            justify-content:space-between;
            padding: .5rem;
            border-bottom: 1px solid white;
        }

        .write{
            position: relative;
            width: 100%;
            height: 15%;
            display: flex;
            align-items: start;
            justify-content:start;
            padding: .5rem;

            .icones{
                position: absolute;
                bottom: 0;
                right: 0;
                width: 300px;
                height: 35px;
                align-self:end;
                background-color:red;
        }
    `}
`