import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton} from '@material-ui/core';
import './Template.css';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import blank from '../images/blank_form.png';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

function Template() {
    const navigate = useNavigate();
    const createForm = () => {
        const id = uuid();
        navigate(`/form/${id}`);
    }
  return (
    <div className="template_section">
        <div className="template_top">
            <div className="template_top_left">
                <span style={{fontSize:"16px", color:"#202124"}}> Start New Form</span>
            </div>
            <div className="template_top_right">
                <div className="template_gallery_button">
                    Template Gallery
                    <UnfoldMoreIcon fontSize='small'/>
                </div>
                <IconButton>
                    <MoreVertIcon fontSize='small'/>
                </IconButton>
            </div>
        </div>
        <div className="template_body">
            <div className="template_card" onClick={createForm}>
                <img src={blank} alt="no image" className="card_image"/>
                <p className="card_title">Blank</p>
            </div>
        </div>
    </div>
  );
}

export default Template;