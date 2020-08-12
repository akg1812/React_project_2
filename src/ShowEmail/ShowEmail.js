import React from 'react';
import "./showEmail.css";

const ShowEmail = ({details}) => {



    return (
        <div id="email-container">
            {
                details === null ?
                    null : 
                    <ul>
                        {details.map(detail => (
                            <li key={detail.email}>{detail.email}</li>
                    
                        ))}
                    
                    </ul> 
            } 
        </div>
    );
}

export default ShowEmail;