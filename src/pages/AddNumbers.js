import React from 'react'
import { useState } from 'react';


const AddNumbers = () =>
{
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const [total, setTotal] = useState(number1 + number2);

    function addTwoNumbers()
    {
        setTotal(Number(number1) + Number(number2));
    }


    return (
        <div >
            <h1 >
                Add two Numbers
            </h1>
            <div >
                <label id="lblFirst" htmlFor="txtFirstNumber">Enter First Number</label>
                <input type="number" id="txtFirstNumber" value={number1} onChange={e => setNumber1(e.target.value)}></input>
            </div>
            <div >
                <label id="lblSecond" htmlFor="txtSecondtNumber">Enter Second Number</label>
                <input type="number" id="txtSecondtNumber" value={number2} onChange={e => setNumber2(e.target.value)}></input>
            </div>
            <div >
                <button id="btnAdd" onClick={addTwoNumbers}>  Add</button>


            </div>
            <div >
                <h2 className='text-[30px]'>Total = {total}</h2>

            </div>
        </div>
    )
}



export default AddNumbers;



