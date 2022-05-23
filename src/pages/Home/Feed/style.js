/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const FeedStyle = styled.section`
    ${({theme})=> css`
       height:100%;
       flex-direction: column;
       align-items: center;
       justify-content:space-between;
       overflow: hidden;
    `}
`

export const PostBarStyle = styled.div`
    ${({theme})=> css`
        position: relative;
        width: 100%;
        height: 100px;
        justify-self: start;
        display: flex;
        align-items: center;
        justify-content:space-between;
        background-color: ${theme.colors.darkBlue};
        border-radius: .5rem;
        padding: 0 .5rem;

        .contentleft{
            width: 70%;
            display: flex;
            align-items: center;
            justify-content:center;
            @media screen and (max-width:812px){
               width: 90%;
            }
            @media screen and (max-width:360px){
               label{
                   h4{
                       font-size: .8rem;
                   }
               }
            }

            @media screen and (max-width:336px){
               label{
                   h4{
                       font-size: .7rem;
                   }
               }
            }

            img{
                width: 50px;
                height: 50px;
                margin-right: 1rem;
            }

            .error{
                display: none;
            }
        }

        .dotsbutton{
            position: absolute;
            top: -15px;
            right: 0;
            display: none;
            border: none;
            align-self:start;
            z-index:3;
            &:hover{
                background: transparent;
                svg{
                    path{
                        fill: black;
                    }
                }
            }
            @media screen and (max-width:812px){
                display: flex;
            }

            svg{
                width: 50px;
                height: 50px;
                
                path{
                    fill: white;
                }
            }
        }

        

        .postoptions{
            width: 30%;
            display: flex;
            align-items: center;
            justify-content:space-evenly;
            @media screen and (max-width:812px){
                display: none;
            }
            
            button{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                font-size: .6rem;

                &:hover{
                    svg{
                        path{
                            fill: black;
                        }
                    }
                }

                svg{
                    margin: 0;
                }
            }
        }

        .dotmenu{
            position: absolute;
            width: 50%;
            height: 100%;
            bottom: 0;
            right: 0;
            display: flex;
            background-color: #1f2b31;
            padding-top: 1rem;
            z-index: 2;
            @media screen and (max-width:510px){
                width: 100%;
            }
        }
    `}
`
export const FeedPoststyle = styled.div`
    ${({theme})=> css`
        width: 100%;
        height:auto;
        min-height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-around;
        border-radius: .5rem;
        background-color: ${theme.colors.darkBlue};
        margin-top: 1rem;
        padding: 2rem 0;
    `}
`

