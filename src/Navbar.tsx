import React from 'react'
import {Link} from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/articles' >Articles</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
