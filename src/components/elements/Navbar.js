import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
            <div className='container'>
            <Link to='/' className='navbar-brand'>
                Contact Book
            </Link>

            </div>
            <div>
                <Link to='/contacts/add' className='btn btn-light mi-auto'> Create Contact</Link>
            </div>
        </nav>
            
        </div>
    )
}

export default Navbar
