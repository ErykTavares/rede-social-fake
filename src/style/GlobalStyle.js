/* eslint-disable no-unused-vars */
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     ${({theme})=> css`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style-type: none;
            text-decoration: none;
            color: white;
            font-family: "Poppins", sans-serif;
        }

        a,a:hover, ul, li, button{
            all: unset;
        }

        main{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;
        }
        
        section{
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        img{
            max-width: 100%;
            height: auto;
        }

    `}


    /* animations */

    .scale-in{
        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .scale-out{
        animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    .slit-in-vertical {
        animation: slit-in-vertical 0.45s ease-out both;
    }

    .slit-out-vertical{
        animation: slit-out-vertical 0.5s ease-in both;
    }

    .fade-in-left{
        animation: fade-in-left .8s ease-in forwards;
    }

    .fade-in-right{
        animation: fade-in-right .8s ease-in forwards;
    }

    .fade-out-left{
        display: flex;
        animation: fade-out-left .8s ease-in forwards;
    }

    .fade-out-right{
        animation: fade-out-right .8s ease-in forwards;
    }

    @keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes scale-out-center {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }   
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }
    }

    @keyframes slit-in-vertical {
        0% {
            -webkit-transform: translateZ(-800px) rotateY(90deg);
            transform: translateZ(-800px) rotateY(90deg);
            opacity: 0;
        }
        54% {
            -webkit-transform: translateZ(-160px) rotateY(87deg);
            transform: translateZ(-160px) rotateY(87deg);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateZ(0) rotateY(0);
            transform: translateZ(0) rotateY(0);
        }
    }

    @keyframes slit-out-vertical {
        0% {
            -webkit-transform: translateZ(0) rotateY(0);
            transform: translateZ(0) rotateY(0);
            opacity: 1;
        }
        54% {
            -webkit-transform: translateZ(-160px) rotateY(87deg);
            transform: translateZ(-160px) rotateY(87deg);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateZ(-800px) rotateY(90deg);
            transform: translateZ(-800px) rotateY(90deg);
            opacity: 0;
        }
    }

    @keyframes fade-in-left {
        from{
            opacity: 0;
            transform: translateX(-100%);
        }

        to{
            opacity: 1;
            transform: translateX(0%);
        }
    }

    @keyframes fade-out-left {
        from{
            opacity: 1;
            transform: translateX(0%);
        }

        to{
            opacity: 0;
            transform: translateX(-100%);
        }

    }

    @keyframes fade-in-right {
        from{
            opacity: 0;
            transform: translateX(100%);
        }

        to{
            opacity: 1;
            transform: translateX(0%);
        }
    }

    @keyframes fade-out-right {
        from{
            opacity: 1;
            transform: translateX(0%);
        }

        to{
            opacity: 0;
            transform: translateX(100%);
        }

    }


    /* scrollbar */
    
    *::-webkit-scrollbar {
            width: 16px;
        }

        *::-webkit-scrollbar-track {
            background: #ffffff;
        }

        *::-webkit-scrollbar-thumb {
            background-color: #04131a;
            border-radius: 10px;
            border: 3px solid #ffffff;
        }
`