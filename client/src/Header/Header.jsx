import React from 'react'
import './Header.css'
// import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Public";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";





function Header() {
    return (
        <div className='header'>
          <Link to='/'>
          
            <img
            className="header_icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMUtTrHwarzvlAUa-I-nZrbr8aJ0P6K_m_w&usqp=CAU" 
            alt="nekrauna" />
</Link>
{/* search icon */}
 {/* <div classname='header_center'>
          <input type="text" placeholder="Pradėkite paiešką?" />
          <SearchIcon />
      </div> */}

      <div className='header_right'>
        <p>Admin</p>
        {/* <LanguageIcon /> */}
        <ExpandMoreIcon />
        <Avatar />
      


      </div>
            
        </div>

        
    )
}

export default Header
