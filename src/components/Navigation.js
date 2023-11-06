import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <nav className='nav'>
            <ul className='navList'>
                <li><Link className='active' to={'/'} >Home</Link></li>
                <li><Link className='active' to={'/news'}>News</Link></li>
                <li><Link className='active' to={'/about'}>About</Link></li>
                <li><Link className='active' to={'/contact'}>Contact</Link></li>
                <li><Link className='active' to={'/add'}>Add</Link></li>
            </ul>
        </nav>
    )
}