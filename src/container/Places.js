import React from 'react';

function Places({india, us, country}) {
    return (
        
            <div>
                {country === 'India' ? <p>{india}</p> : <p>{us}</p>}
            </div>
   
    );
}

export default Places;