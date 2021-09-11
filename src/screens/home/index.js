import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Home = () => {
    const [value, setValue ] = useState('')
    function calculate() {
        let newValue= evaluate(value);
        setValue(newValue)
    } 
    function clean() {
        setValue('')
    }
    return (
         
        <div>
            <h1>Calculadora</h1>
            {value}
            <br/>
            <input type='button' value='1' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='2' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='3' onClick={(e) => setValue(value + e.target.value)} />
            <br/>
            <input type='button' value='4' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='5' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='6' onClick={(e) => setValue(value + e.target.value)} />
            <br/>
            <input type='button' value='7' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='8' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='9' onClick={(e) => setValue(value + e.target.value)} />
            <br/>
            <input type='button' value='+' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='-' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='*' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='/' onClick={(e) => setValue(value + e.target.value)} />
            <br/>
            <input type='button' value='0' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button'  value='calcular' onClick={() => calculate()} />
            <input type='button'  value='limpar' onClick={() => clean()} />
        </div>
    )
}

export default Home;