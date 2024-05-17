import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
            <h1 className='navBarTitle'>DnD Character Tracker</h1>
            <ul className='NavMenu'>
                <li><Link to="/create">Create Character</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;