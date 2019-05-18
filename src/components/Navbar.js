import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="col-12 col-md-8">
            <Link to={'/'}>Todos los posts</Link>
            <Link to={'/crear'}>Nuevo Post</Link>
        </nav>
    );
}
 
export default Navbar;