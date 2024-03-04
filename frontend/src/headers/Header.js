import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import formimage from '../images/forms_ss.png';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import Search from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import avatarimage from '../images/avatar_ss.png';
import Sidebar from '../sidebar/Sidebar';

function Header() {
  return (
    <div className="header">
        <div className='header_info'>
            <Sidebar/>
            <img src={formimage} style={{height:"40px", width:"40px"}} classname="form image"/>
            <div className='info'>
                Forms
            </div>
        </div>
        <div className='header_search'>
        <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder='Search' name="search" type='text'/>
        </div>
        <div className='header_right'>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <Avatar src={avatarimage}/>
            </IconButton>
        </div>
    </div>

  );
}

export default Header;