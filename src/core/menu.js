import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#2ecc72' }
  } else {
    return { color: '#fff' }
  }
}

const Menu = ({ history }) => {
  return (
    <div>
      <ul className='nav nav-tabs bg-dark fixed-top '>
        <li className='nav-item'>
          <Link style={currentTab(history, '/')} className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(history, '/cart')}
            className='nav-link'
            to='/cart'
          >
            Cart
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(history, '/user/dashboard')}
            className='nav-link'
            to='/user/dashboard'
          >
            Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(history, '/admin/dashboard')}
            className='nav-link'
            to='/admin/dashboard'
          >
            A. Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(history, '/signup')}
            className='nav-link'
            to='/signup'
          >
            Signup
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(history, '/signin')}
            className='nav-link'
            to='/signin'
          >
            Signin
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(history, '/signout')}
            className='nav-link'
            to='/signout'
          >
            Signout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Menu)
