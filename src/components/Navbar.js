import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    <a href="#header">
                        <Button 
                            style={{color:'white'}}
                        >Home</Button>
                    </a>
                    <a href="#skills">
                        <Button 
                            style={{color:'white'}}
                        >Skills</Button>
                    </a>
                    <a href="#experience">
                        <Button 
                            style={{color:'white'}}
                        >Experience</Button>
                    </a>
                    <a href="#education">
                        <Button 
                            style={{color:'white'}}
                        >Education</Button>
                    </a>
                    <a href="#aboutme">
                        <Button 
                            style={{color:'white'}}
                        >Me</Button>
                    </a>
                    <a href="#footer">
                        <Button 
                            style={{color:'white'}}
                        >Contact</Button>
                    </a>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
