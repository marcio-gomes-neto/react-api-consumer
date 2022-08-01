import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

import Chart from "../../components/chart/Chart";
import { Container } from './styles'

import { ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function Result(){
    const location = useLocation();
    const url = `${process.env.REACT_APP_API_URL}/ipca/download${location.state.type.charAt(0).toUpperCase() + location.state.type.slice(1)}?finalDate=${formatDate(location.state.finalDate)}&startDate=${formatDate(location.state.startDate)}`
    console.log(url)
    
    const buttonText = `Download ${location.state.type.toUpperCase()}`
    const [chartValues, setChartValues] = useState();
    
    const navigate = useNavigate()

    useEffect(() => {
        if(location.state.values.length === 0){
            setChartValues(false)
        } else {
            setChartValues(true)
        }
    }, [])

    function newSearch(){
        navigate('/')
    }

    function formatDate(data){
        const date = new Date(data)
        date.setDate(date.getDate() + 1)
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    return <Container>
        <h1>Índice Nacional de Preços ao Consumidor-Amplo</h1>
        {chartValues ? <Chart data={location.state}/> : 
        <h2> Sem valores para a data selecionada: {formatDate(location.state.startDate)} - {formatDate(location.state.finalDate)}  </h2>}

        <ul>
            <li>
                <button onClick={newSearch} >Nova Busca</button>
            </li>

            <li>
                <a href={url} className='linkRef'>
                    <button disabled={!chartValues} type="submit" download>{buttonText}</button>
                </a>
            </li> 
        </ul>
        <ToastContainer
            className="toast-position"
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            transition={Zoom}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </Container>
}

export default Result