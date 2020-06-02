import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddToCart from '../Redux/Actions/AddToCart';

const GlassesDetails = ({match}) =>{
    const item = useSelector(state=>state.collectionReducer).filter(product=>product.id === match.params.id)[0]
    const dispatch = useDispatch()
    return(
        <div className='detailed'>
            <img src={item.img_big} alt={`Product with id ${match.params.id}`}/>
            <h1>{item.title} - Rs.{item.price}</h1>
            <button disabled={item.soldOut === true? true : false} onClick={()=>{dispatch(AddToCart(item))}}>add to cart</button><br/>
            {item.soldOut === true? <span>out of stock!!!</span>:''}
        </div>
    )
}


export default GlassesDetails