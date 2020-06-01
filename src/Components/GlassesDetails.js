import React from 'react';
import { useSelector } from 'react-redux';

const GlassesDetails = ({match}) =>{
    console.log('abc')
    const item = useSelector(state=>state.collectionReducer).filter(product=>product.id === match.params.id)
    return(
        <div className='detailed'>
            <img src={item[0].img_big} alt={`Product with id ${match.params.id}`}/>
            <h1>{item[0].title} - ${item[0].price}</h1>
            <button disabled={item[0].soldOut === true? true : false}>add to cart</button><br/>
            {item[0].soldOut === true? <span>out of stock!!!</span>:''}
        </div>
    )
}


export default GlassesDetails