/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const HeaderStyle = styled.header`
    ${({theme})=> css`
        position: relative;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content:space-between;
        background-color:${theme.colors.greenblueweak};
        padding: 0 1rem;
        z-index: 10;


        .menumobile{
            display: none;
            border:none;
            @media screen and ${theme.media.tablet}{
                display:flex;
            }
            &:hover{
                background-color:transparent;
            }
            svg *{
                fill:white;
            }
        }

        .rightcontentMenuMobile{
            @media screen and ${theme.media.tablet} {
                position: absolute;
                top: 80px;
                right: 0;
                width: 320px;
                height: 100vh;
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
                justify-content:start;
                background-color:#1f2b31;
                padding: 1rem;

                .navbar{
                    margin-top: 1rem;
                    ul{
                        height: 200px;
                        flex-direction: column;
                    }
                } 

                .profile{
                    .profilemenu{
                        top:65px;
                    }
                }

            }
            
        }
    `}
`

export const HeaderLeftContentStyle = styled.div`
    ${({theme})=> css`
        width: 40%;
        display: flex;
        align-items: center;
        @media screen and ${theme.media.tablet}{
            width: 80%;
            justify-content:space-between;
        }

        h2{
            margin-bottom:1.5rem;
            margin-right: 2rem;
            cursor: pointer;
        }

        .search{
            position: relative;
            width: 80%;
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
        }
    `}
`
     
export const HeaderRightContentStyle = styled.div`
    ${({theme})=> css`
        width: 60%;
        height: 100%;
        align-self:end;
        display: flex;
        align-items: center;
        justify-content:space-between;
        padding-top: .5rem;
        @media screen and ${theme.media.tablet}{
            display:none;
        }

        nav{
            width: 200px;
            ul{
                width:100%;
                display: flex;
                align-items: center;
                justify-content:space-evenly;
                li{
                    a{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content:center;
                        cursor: pointer;

                        h5{
                            font-weight: 500;
                            font-size: 1rem;
                            text-shadow: 1px 1px 0 #000;
                        }
                    }
                }
            }
        }
    `}
`