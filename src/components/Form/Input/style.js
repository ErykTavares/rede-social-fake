import styled from 'styled-components';

export const InputStyle = styled.div`
    width: ${({width}) => width? width : "80%"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    margin: 1rem 0;
    

    label{
        width: 100%;
        align-self: start;
        font-size: .9rem;
        font-weight: 400;
        line-height: 0;

        h4{
            font-weight:400;
            text-shadow: 1px 1px 0 #000;
        }
    }

    input{
        width: 100%;
        height: 40px;
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid white;
        padding-top:1rem;
    }

    p{
        align-self: start;
        font-weight: 300;
        font-size: .8rem;
        color: red;
        text-shadow: 1px 1px 0 #000;
    }

`