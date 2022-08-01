import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 60%;
    height: max(50%, 400px);

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

    ul {
        height: 15%;
        padding: 20px;
        text-align: center;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }
    
    li{
        display: flex;
        font-size: 30px;
        flex-direction: column;
        align-items: center;
    }
    
    .react-datepicker__input-container input {
        font-size: 25px;
        width: 80%;
    }

    .format-selector {
        text-align: center;
        height: 30%;
        label {
            font-size: 30px;
            display: block;
        }

        select{
            padding: 5px;
            font-size: 25px;
            width: 35%;
        }
    }
    
    form {
        height: 20%;
        button {
            margin:0 auto;
            padding: 15px 15px ;
    
            width: 30%;
            display: block;
            cursor: pointer;
    
            font-size: 30px;
            background-color: white; /* Green */
            color: black;
            border-radius: 0.8rem;
    
            transition-duration: 0.4s;
        }
    
        button:hover{
            background-color: #555555; /* Green */
            color: white;
        }
    }

    .toast-position{
        margin-top: -10%;
    }
   
`