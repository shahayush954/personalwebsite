import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import data from '../data';
import Tooltip from '@material-ui/core/Tooltip';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

const styles = theme => ({

    contactContainer:{
        background: '#689f38',
        textAlign: 'center'
    },
    contactTitle:{
        fontSize: '3em',
        fontWeight: '400',
        letterSpacing: '5px',
        textAlign: 'center',
        color: '#ffffff',
        fontVariant: 'small-caps',
        fontVariantLigatures: 'normal',
        fontVariantCaps: 'small-caps',
        fontVariantNumeric: 'normal',
        fontVariantEastAsian: 'normal',
        paddingTop: '50px',
        marginTop: '30px',
        marginBottom: '0px',
        paddingBottom: '0px'
    },
    icons:{
        marginTop: '30px',
        marginBottom: '70px',
        color: '#fff',
        border: '1px solid #ffffff',
        borderRadius: '50%',
        marginLeft: '10px',
        marginRight: '10px',
        transition: 'all 0.3s ease-in-out',
        '&:hover':{
            backgroundColor: '#ffffff',
            color: '#d84315'
        }
    },
    phoneIcon:{
        color: '#ffffff',
        marginRight: '15px'
    },
    phoneText:{
        color: '#ffffff',

    },
    mailIcon: {
        color: '#ffffff',
        marginRight: '15px'
      
    },
    mailText:{
        color: '#ffffff',
       
    }
});

class Contact extends Component {

    handleLinkedInPageChange = () => {
        window.location.href=data.SocialMediaLinks.LinkedIn;
    }

    handleGitHubPageChange = () => {
        window.location.href=data.SocialMediaLinks.GitHub;
    }
    
    handleInstagramPageChange = () => {
        window.location.href=data.SocialMediaLinks.Instagram;
    }

    handleTwitterPageChange = () => {
        window.location.href=data.SocialMediaLinks.Twitter;
    }

    render() {

        const { classes } = this.props;

        return (
            <div id="footer" className={classes.contactContainer}>

                <h2 className={classes.contactTitle}>
                    <span>Contact</span>
                </h2>
                <h3>
                    <PhoneIcon fontSize="large" className={classes.phoneIcon} />
                    <span className={classes.phoneText}>{data.Contact.phone}</span>
                </h3>
                <h3>
                    <MailOutlineIcon fontSize="large" className={classes.mailIcon}/>
                    <span className={classes.mailText}>{data.Contact.mail}</span>
                </h3>

                
                <IconButton
                    className={classes.icons}
                    onClick={this.handleLinkedInPageChange}
                >
                    <Tooltip 
                        title="See LinkedIn Profile"
                        placement="top"
                        arrow
                    >
                        <LinkedInIcon fontSize="large"/>
                    </Tooltip>
                </IconButton>
                
                <IconButton
                    className={classes.icons}
                    onClick={this.handleGitHubPageChange}
                >
                    <Tooltip 
                        title="See GitHub Profile"
                        placement="top"
                        arrow
                    >
                        <GitHubIcon fontSize="large"/>
                    </Tooltip>
                </IconButton>
                <IconButton
                    className={classes.icons}
                    onClick={this.handleInstagramPageChange}
                >
                    <Tooltip 
                        title="Follow on Instagram"
                        placement="top"
                        arrow
                    >
                        <InstagramIcon fontSize="large"/>
                    </Tooltip>
                </IconButton>
                <IconButton
                    className={classes.icons}
                    onClick={this.handleTwitterPageChange}
                >
                    <Tooltip 
                        title="Follow on Twitter"
                        placement="top"
                        arrow
                    >
                        <TwitterIcon fontSize="large"/>
                    </Tooltip>
                </IconButton>

                
                
            </div>
        )
    }
}

export default withStyles(styles)(Contact);
