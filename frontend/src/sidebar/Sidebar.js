import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import { makeStyles } from '@material-ui/core/styles';
import './Sidebar.css';
import docimage from '../images/docs_ss.png';
import slidesimage from '../images/slides_ss.png';
import sheetimage from '../images/sheets_ss.png';
import formimage from '../images/forms_ss.png';
import driveimage from '../images/drive_ss.png';
import Divider from '@material-ui/core/Divider';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';



function SideBar() {
    // Controls the open and close of the sidebar
    const [state, setState] = React.useState({
        left: false
    })
        
    const toggleDrawer = (anchor, open) => (event) => {
        setState({...state, [anchor]: open});
    };

    const list =(anchor)=>(

        <div style={{width:"250px"}} role="presentation">
            <Divider/>
                <List>
                    <ListItem>
                        <ListItemText style={{fontSize:"48px", marginLeft:"5px"}}>
                        <span style={{color:"#4285F4", fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans', Arial, sans-serif"}}>G</span>
                        <span style={{color:"#DB4437", fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans', Arial, sans-serif"}}>o</span>
                        <span style={{color:"#F4B400", fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans', Arial, sans-serif"}}>o</span>
                        <span style={{color:"#4285F4", fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans', Arial, sans-serif"}}>g</span>
                        <span style={{color:"#0F9D58", fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans', Arial, sans-serif"}}>l</span>
                        <span style={{color:"#DB4437", fontWeight:"700",fontSize:"22px",marginRight:"10px",fontFamily:"'Product Sans', Arial, sans-serif"}}>e</span>
                        <span style={{color:"black", fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans', Arial, sans-serif"}}>Docs</span>
                        </ListItemText>
                    </ListItem>
                </List>
            <Divider/>
            <Divider/>
            <List>
                <ListItem classname="list_item">
                    <img src={docimage} style={{height:"20px", width:"20px"}} classname="doc image"/>
                    <div style={{marginLeft:"20px", fontSize:"14px", fontWeight:"500", color:"grey"}}>Docs</div>
                </ListItem>
                <ListItem classname="list_item">
                    <img src={slidesimage} style={{height:"20px", width:"20px"}} classname="slides image"/>
                    <div style={{marginLeft:"20px", fontSize:"14px", fontWeight:"500", color:"grey"}}>Slides</div>
                </ListItem>
                <ListItem classname="list_item">
                    <img src={sheetimage} style={{height:"20px", width:"20px"}} classname="sheet image"/>
                    <div style={{marginLeft:"20px", fontSize:"14px", fontWeight:"500", color:"grey"}}>Sheets</div>
                </ListItem>
                <ListItem classname="list_item">
                    <img src={formimage} style={{height:"20px", width:"20px"}} classname="form image"/>
                    <div style={{marginLeft:"20px", fontSize:"14px", fontWeight:"500", color:"grey"}}>Forms</div>
                </ListItem>
            </List>
            <Divider/>
                <List style={{marginLeft:"8px", marginRight:"8px",marginTop:"15px",marginBottom:"15px"}}>
                    <ListItem classname="list_item">
                        <FiSettings/>
                        <div style={{marginLeft:"20px",fontSize:"14px"}}> Settings </div>
                    </ListItem>
                    <ListItem classname="list_item">
                        <FiHelpCircle/>
                        <div style={{marginLeft:"20px",fontSize:"14px"}}> Help & Feedback </div>
                    </ListItem>
                </List>
            <Divider/>
                <List>
                <ListItem classname="list_item">
                    <img src={driveimage} style={{height:"20px", width:"20px"}} classname="drive image"/>
                    <div style={{marginLeft:"20px", fontSize:"14px", fontWeight:"500", color:"grey"}}>Drive</div>
                </ListItem>
                </List>
            <Divider/>
            
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <IconButton onClick={toggleDrawer("left",true)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor={'left'}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
export default SideBar;