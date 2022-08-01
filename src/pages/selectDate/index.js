import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Container } from './styles'

import LoadingSpinner from "../../components/loader/loaderIndex";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ToastContainer, toast, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


function SelectDate() {
    const [startDate, setStartDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const [format, setFormat] = useState();

    const navigate = useNavigate()

    function handleSubmit(e) {
        const url = `${process.env.REACT_APP_API_URL}/ipca/getIpcaValues?finalDate=${formatDate(finalDate)}&startDate=${formatDate(startDate)}&format=${format}`
        setIsLoading(true)
        e.preventDefault();
        if(startDate > finalDate){
            notify('Data Final deve ser maior do que a Data Inicial', 'error')
            setIsLoading(false)
            return
        }
        if (!format){
            notify('Selecione o Formato', 'error')
            setIsLoading(false)
            return
        }
        const datesDiff = finalDate.getTime() - startDate.getTime();
        if(datesDiff/(1000 * 3600 * 24) > 366){
            notify('O limite de busca é de no máximo 365 dias', 'error')    
            setIsLoading(false)
            return
        }
        
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            setIsLoading(false); 
            navigate('/result', {state: data})
        })

    }
    
    function formatDate(date){
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return  dd + '/' + mm + '/' + yyyy;
    }

    function notify (msg, type){
        if(type === 'error'){
            toast.error(msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
    
    return <Container>
        {isLoading ? <LoadingSpinner/> : undefined}
        <h1>Índice Nacional de Preços ao Consumidor-Amplo</h1>
        <ul>
            <li>
                Data Inicial
                <DatePicker wrapperClassName="date-picker" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
            </li>
            <li>
                Data Final
                <DatePicker wrapperClassName="date-picker" dateFormat="dd/MM/yyyy" selected={finalDate} onChange={(date) => setFinalDate(date)} />
            </li>
        </ul>
        <div className="format-selector">
            <label for="format">Formato</label>
            <select name="format" onChange={(e) => setFormat(e.target.value)} selected="">
                <option value="" selected disabled hidden>Selecionar</option>
                <option value="json">JSON</option>
                <option value="excel">Excel</option>
            </select>
        </div>

        <form>
            <button onClick={handleSubmit}>Buscar IPCA</button>
        </form>
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

export default SelectDate;