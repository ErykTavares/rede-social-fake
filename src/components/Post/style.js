/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';

export const PostStyle = styled.div`
    ${({theme})=> css`
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        border: 1px solid white;
        border-radius: .5rem;
        margin-bottom: 1rem;

        .postheader{
            all: unset;
            width: 99%;
            display: flex;
            align-items: center;
            justify-content:space-between;
            padding: .5rem 1rem;

            .userdata{
                width: 70%;
                display: flex;
                align-items: center;
                justify-content: start;

                img{
                    margin-right: 1rem;
                }

                .texts{
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

        .postcontent{
            width: 100%;
            min-height: 60px;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content:center;
            padding: 0 .5rem;

            img{
                margin: 1rem 0 ;
            }
        }

        .reactnumber{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:start;
            padding: 0 .5rem;
            @media screen and ${theme.media.mobileL}{
                justify-content: center;
                padding: 0 .2;
            }
        }

        .reactbar{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content:start;
            padding: 0 .5rem;
            border-top: 1px solid white;
            @media screen and ${theme.media.mobileL}{
                justify-content: center;
                padding: 0 .2;
            }
        }
    `}
`