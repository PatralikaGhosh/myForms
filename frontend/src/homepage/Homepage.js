import React from "react";
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { IconButton } from "@material-ui/core";
import './Homepage.css';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import doc_image from '../images/homepage_docs_image.png';

function Homepage() {
    return (
  
        <div className="homepage">
            <div className="homepage_top">
                <div className="homepage_top_left" style={{fontSize:"16px", fontWeight:500}}>
                    Recent Forms
                </div>
                <div className="homepage_top_right">
                <div className="homepage_top_center" style={{fontsize:"14px", marginRight:"125px"}}> Owned by anyone <ArrowDropDownIcon/></div>
                <IconButton>
                    <StorageIcon style={{fontSize:"16px", color:"black"}}/>
                </IconButton>
                <IconButton>
                    <FolderOpenIcon style={{fontSize:"16px", color:"black"}}/>
                </IconButton>
                </div>
            </div>
            <div className="homepage_docs">
                <div className="doc_card">
                    <img src={doc_image} className="doc_image"/>
                    <div className="doc_card_content">
                        <h5></h5>
                        <div className="doc_content" style={{fontSize:"12px",color:"grey"}}>
                            <div className="content_left">
                                <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"5px",borderRadius:"2px"}}/> <p style={{marginRight:"5px"}}>Opened 2 days ago</p> <MoreVertIcon style={{fontSize:"16px",color:"grey"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Homepage;