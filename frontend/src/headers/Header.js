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
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

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
                <GoogleOAuthProvider clientId="483244214079-s9l319vcubk9uoaaggpma1f922gnod51.apps.googleusercontent.com">
                <GoogleLogin
                onSuccess={credentialResponse => {
                    const decoded = jwtDecode(credentialResponse.credential);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />

                </GoogleOAuthProvider>
        </div>
    </div>

  );
}

export default Header;