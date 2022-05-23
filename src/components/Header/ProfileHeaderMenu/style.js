/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const ProfileHeaderMenuStyle = styled.div`
    ${({theme})=> css`
        position: relative;
        width: 40px;
        height: 76px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;

        img{
            width: 100%;
            height: 40px;
        }

        button{
            position: absolute;
            top: 30px;
            right: -10px;
            border:none;
            &:hover{
                background:transparent;
            }

            svg{
                width: 10px;
                height: 10px;
            }
        }

        h6{
            font-weight: 400;
            text-shadow: 1px 1px 0 #000;
        }
    `}
`

export const UserMenuStyle = styled.div`
    ${({theme})=> css`
        position: absolute;
        bottom: -68px;
        left: -70px;
        width: 100px;
        height: 60px;
        background: white;
        border-radius: .5rem;

        nav{
            width:100%;
            ul{
                width:100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                padding: .5rem 0;
                
                li{
                    width:100%;
                    display: flex;
                    align-items: center;
                    justify-content:end;
                    padding-right: .5rem;
                    h5{
                        color: black;
                        font-size: .7rem;
                        font-weight: 500;
                        cursor: pointer;
                        &:hover{
                            color: ${theme.colors.darkGray};
                        }
                    }
                }
            }
        }
    `}
`