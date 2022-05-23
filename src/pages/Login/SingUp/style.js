/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const SingUpStyle = styled.div`
    ${({theme})=> css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-around;
        padding: .5rem 0;
        @media screen and (max-width:480px){
            overflow-y: scroll;
        }

        header{
            width: 100%;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:space-around;
            @media screen and (max-width:480px) {
              height: 250px;
                    
            }
            .socialbuttons{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content:space-evenly;
                padding: 0 1rem;
                @media screen and (max-width:480px) {
                    flex-direction: column;
                    
                }
            }
            h5{
                font-weight: 400;
            }
        }

        .doubleInput{
            width: 80%;
            display: flex;
            align-items: center;
            justify-content:center;

            label{
                width: 96%;
                input{
                    width: 100%;
                    margin-right: .5rem;

                }
            }
        }

        .username{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:center;
            position: relative;
            p{
                position: absolute;
                top: 8px;
                right: 80px;
                font-size:.8rem;
                color: ${theme.colors.weakGray};
                @media screen and (max-width:480px) {
                   right: 50px;
                    
                }
                @media screen and (max-width:450px) {
                  display: none;
                    
                }
            }

            .error{
                position: unset;
                color: red;
            }
        }

        .password{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:center;
            position: relative;
            p{
                position: absolute;
                top: 8px;
                right: 256px;
                font-size:.8rem;
                color: ${theme.colors.weakGray};
                @media screen and (max-width:480px) {
                   right: 226px;
                    
                }
                @media screen and (max-width:450px) {
                  display: none;
                    
                }
            }

            .error{
                position: unset;
                color: red;
            }
        }

        h6{
            font-weight: 400;
            span{
                text-decoration:underline;
            }
        }
    `}  
`