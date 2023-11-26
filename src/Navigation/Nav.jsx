import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai';

import './Nav.css';

const Nav = () => {
  return (
    <>
      <nav>
        <div className='nav-container'>
          <input className='search_input' type="text" placeholder='Search...'/>
        </div>

        <div className='profile_container'>
          <a href="#"> <FiHeart className='nav_icons'/> </a>
          <a href="#"> <AiOutlineShoppingCart className='nav_icons'/> </a>
          <a href="#"> <AiOutlineUserAdd className='nav_icons'/> </a>
        </div>

      </nav>
    </>
  )
}

export default Nav;

