import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className='navbar'>      
            <h1 className='navbar-title'> DnD Character Tracker </h1>
            <ul className='navbar-links'>
                <li className='navbar-link'><Link to="/create">Create Character</Link></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;