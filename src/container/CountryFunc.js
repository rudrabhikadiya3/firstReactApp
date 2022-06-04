import React, { useState } from 'react';
import Places from './Places';

function CountryFunc(props) {
    const [cName, setCName] = useState('India');
    const changeC = () => {
        setCName('USA')
    }
    const indianPlace = "Tajmahal"
    const usPalce = "Statue of Liberty"
    return (
        <div>
            <h3>{cName}</h3>
            <button onClick={() => changeC()}>change country</button>
            <h4>Places</h4>
            <Places india={indianPlace} us={usPalce} country={cName}/>
        </div>
    );
}

export default CountryFunc;