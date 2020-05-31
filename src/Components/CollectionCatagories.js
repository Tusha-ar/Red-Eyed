import React from 'react';


const CollectionCatagories = (props)=>{
    return(
        <div className='CollectionCatagories'>
            <div className={props.type}>
                <h3>{props.type}</h3>
            </div>
        </div>
    )
}


export default CollectionCatagories