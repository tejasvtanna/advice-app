import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

const App = () => {
    const [advice, setAdvice] = useState('')

    const fetchAdvice = async () => {
        try {
            const response = await Axios.get(
                'https://api.adviceslip.com/advice'
            )
            // debugger
            setAdvice(response.data.slip.advice)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = () => {
        fetchAdvice()
    }

    useEffect(() => {
        fetchAdvice()
    }, [advice])

    return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button' onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
            <br />
        </div>
    )
}

export default App
