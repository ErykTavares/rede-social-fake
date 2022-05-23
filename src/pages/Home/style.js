/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const HomeStyle = styled.section`
    ${({theme})=> css`
        position: relative;
        flex-direction: column;
        background-color:rgba(18, 31, 38, 0.9);

        header{
            position:fixed;
            top: 0;
            left: 0;
            margin-bottom: .5rem;
        }
    `}
`

export const ContentStyle = styled.div`
    ${({theme})=> css`
        position: relative;
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content:space-between;
        margin-top: 100px;
        margin-bottom: .5rem;
        padding: 0 1rem;

        .leftmenubutton{
            position: absolute;
            display: none;
            top: -32px;
            left: -4px;
            border: none;
            z-index: 2;
            @media screen and (max-width:1240px){
                display: flex;
            }
            
            &:hover{
                background-color:transparent;
            }

            svg{
                width: 30px;
                height: 30px;
                transform: rotate(150deg);
            }
        }

        .leftmenu{
            display: flex;
            flex-direction: column;
            
        }
    `}
`

export const LeftContentStyle = styled.div`
    ${({theme})=> css`
        width:320px;
        height:600px;
        align-self: start;
        background-color: ${theme.colors.greenblue};
        @media screen and (max-width:1240px){
            display: none;
            position: absolute;
            top: -20px;
            left: 0;
            height: 100%;
            z-index:1;
        }

        header{
            all: unset;
            position: relative;
            width: 100%;
            height: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:start;
            border-bottom: 1px solid white;
            .banner{
                width: 100%;
                height: 60px;
            }

            .userimg{
                position: absolute;
                top: 20px;
                width: 80px;
                height: 80px;
            }

            .texts{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                margin-top:2.7rem;

                h2{
                    font-weight:400;
                    font-size:.8rem;
                    text-shadow: 1px 1px 0 #000;
                }
                h4{
                    font-weight: 400;
                    font-size: .6rem;
                    text-shadow: 1px 1px 0 #000;

                }
            }

        }

        .projects{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;
            padding: 1rem 0;
            border-bottom: 1px solid white;

            .row{
                width: 80%;
                display: flex;
                align-items: center;
                justify-content:space-between;
                padding: 0 .2rem;

                h5{
                    font-weight: 400;
                    text-shadow: 1px 1px 0 #000;
                }
            }
        }

        .friends{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;

            .peoplecards{
                width: 100%;
                height: 250px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:space-around;
                
                .people{
                    width: 80%;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content:space-between;
                    border: 1px solid white;
                    border-radius: .5rem;
                    padding: 0 .5rem;

                    .peopledata{
                        width: 60%;
                        display: flex;
                        align-items: center;
                        justify-content:center;
                        
                        img{
                            width: 30px;
                            height: 30px;
                            margin-right: .2rem;
                        }

                        h4{
                            font-weight: 400;
                            font-size: .8rem;
                        }

                        h5{
                            font-weight: 400;
                            font-size: .6rem;
                            color: gray;
                        }
                    }
                }
            }
        }

        
    `}
`
export const RightContentStyle = styled.div`
    width: 73%;
    height:100%;

    @media screen and (max-width:1240px){
       width: 100%;
    }

`