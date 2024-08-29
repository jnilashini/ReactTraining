import React, { useState } from 'react';

export default function AddArrayValues()
{

    const [numbers, setNumbers] = useState([1, 2, 3]);

    const [newNumber, setNewNumber] = useState('');

    let sum = 0;


    for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }

    // ------------  FOR EACH -----------
    // numbers.forEach(newValue =>
    // {
    //     sum += newValue;
    // });


    // ------------  REDUCE -----------
    //  const sum = numbers.reduce((previous, next) => previous + next);

    function addValues()
    {
        setNumbers([...numbers, Number(newNumber)]);
        setNewNumber('');
    }

    return (
        <div>
            <h1>Add Array Values</h1>
            <p>Numbers: {numbers.join(', ')}</p> 

            <input id="iArrNum"
                type="number"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
                placeholder="Enter a number"
            />
            <button onClick={addValues}>Add Number</button>

            <p> Sum of Array Values :  {sum}</p>
        </div>
    )
}

