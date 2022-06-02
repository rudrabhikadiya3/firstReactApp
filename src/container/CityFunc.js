import React, {useState} from 'react';

function CityFunc(props) {
    const[cityName, setCityName] = useState('Delhi');
    const changeCity = () => {
        setCityName('Mumbai')
    }
    return (
        <div>
            <p>{cityName}</p>
            <button onClick={() => changeCity() }>change city</button>
        </div>
    );
}

export default CityFunc;