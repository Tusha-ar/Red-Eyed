import React from 'react';
import { Link } from 'react-router-dom';

const Nav =()=>{
    return(
        <div className='nav'>
            <span>Jade Black</span>
            <div className='Nav'>
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/collectionsDetails/Mens' className='link'>Mens</Link></li>
                    <li><Link to='/collectionsDetails/Womens' className='link'>Womens</Link></li>
                    <li><Link to='/collectionsDetails/prism' className='link'>Prism</Link></li>
                    <li>Design</li>
                </ul>
            </div>
            <div className='nav_sec'>
                <ul>
                    <li>
                        <select>
                            <option>inr</option>
                            <option>usd</option>
                            <option>cad</option>
                            <option>aud</option>
                        </select>
                    </li>
                    <li className='acc'></li>
                    <li className='search'></li>
                    <li className='cart'></li>
                </ul>
            </div>
        </div>
    )
}



export default Nav