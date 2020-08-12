import React from 'react';
import "./showID.css";

const showID = props => {

    const {details}=props;

    return (
        <div id="id-container">
            {
                details === null ?
                    <div>
                        <div>
                        <h2>Loading Ids...</h2></div>
                    
                    </div> : 
                    <ul>
                        <li>ID</li>
                        {details.map(detail => (
                            <li key={detail.id}>{detail.id}</li>
                    
                        ))}
                    
                    </ul> 
            } 
        </div>
    );
}

export default showID