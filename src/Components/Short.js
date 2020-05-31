import React from 'react';
import { Link } from 'react-router-dom';

const Short = (props) =>{
    return(
        <div className='menshort'>
            <div className='head'>
                <h3>{props.type === 'men'? `Men's` : props.type === 'women'? `Women's`: props.type === 'Classics'? `Classics`: props.type === 'Metal'? 'Metal': props.type === 'Prism'? 'Prism':''}</h3>
                <span>view all</span>
            </div>
            <div className='body'>
                {
                    props.collection.map(col=>
                    <div key={col.id} className='collection'>
                        <Link to={`details/${col.id}`} className='link'>
                        <img src={col.img} alt='img' className={col.soldOut === true? 'soldOut': 'inStock'}/>
                        {col.soldOut === true? <span className='soldOutText'>SOLD OUT</span>:''}
                        <span className='title'>{col.title}</span>
                        </Link>
                        <span>${col.price}</span>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Short