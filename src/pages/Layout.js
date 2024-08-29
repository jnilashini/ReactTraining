import React from 'react'

import { Link } from 'react-router-dom';

export default function Layout()
{
    return (
        <nav>

            <ul>
                <li>
                    <Link to="/addnumbers" >Add Numbers</Link>
                </li>
              
                <li>
                    <Link to="/addarrayvalues">Add Array Values</Link>
                </li>
            </ul>
        </nav>
    )
}

