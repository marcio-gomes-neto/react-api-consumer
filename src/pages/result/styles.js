import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 60%;
    height: max(50%, 500);

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
    border: 2px solid white;
    border-radius: 1rem;
    transition-duration: 0.4s;
    
    h1 {
        text-align: center;
        width: 100%;
        height: 5%;
        font-size: 35px;
    }
    
    h2{
        text-align: center;
        font-weight: normal;
    }
    
    ul {
        padding: 0px 0px 20px 0px;
        text-align: center;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        
        .linkRef {
            width: 100%;
            text-decoration: none;
        }

        button{
            margin:0 auto;
            padding: 15px 15px ;
    
            width: 50%;
            display: block;
            cursor: pointer;
    
            font-size: 25px;
            background-color: white; 
            color: black;
            border-radius: 0.8rem;
    
            transition-duration: 0.4s;
        }
    
        button:hover:enabled{
            background-color: #555555; 
            color: white;
        }

        li{
            display: flex;
            font-size: 30px;
            flex-direction: column;
            align-items: center;
        }
    }

    .toast-position{
        margin-top: -10%;
    }
   
`