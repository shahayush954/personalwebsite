import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Background from '../images/mountain1.JPG';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import data from '../data';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const styles = theme => ({
    header:{
        backgroundImage: `url(${Background})`,
        minHeight: '800px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    name:{
        color: '#fff',
        paddingTop: '260px'
    },
    title:{
        color:'#fff',
        paddingTop: '10px'
    },
    icons:{
        marginTop: '30px',
        color: '#fff',
        marginLeft: '10px',
        marginRight: '10px',
        border: '1px solid #ffffff',
        borderRadius: '50%',
        transition: 'all 0.3s ease-in-out',
        '&:hover':{
            backgroundColor: '#ffffff',
            color: '#689f38'
        }
    },
    downloadButton:{
        color: '#ffffff',
        borderColor: '#ffffff',
        marginTop: '60px',
        height: '90px',
        width: '300px',
        fontSize: '1em',
        textTransform: 'uppercase',
        fontWeight: 600,
        borderRadius: '0%',
        border: '2px solid',
        letterSpacing: '2px',
        transition: 'all 0.3s ease-in-out',
        '&:hover':{
            backgroundColor: '#ffffff',
            color: '#689f38'
        }
    }
});

class Header extends Component {

    componentDidMount(){
        axios.get("https://api.ipify.org/?format=json")
             .then((response) => {
                axios.post(`https://us-central1-socialmedia954-8cbb0.cloudfunctions.net/api/record/${response.data.ip}`);
             })
             .catch(err => {
                 console.log(err);
             });
    }

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
        const {
            classes
        } = this.props;
        return (
            <Fragment>
            <div className={classes.header} id="header">
            <Typography
                    className={classes.name}
                    variant="h1"
                    align="center"
            >{data.name}</Typography>
            <Typography
                    className={classes.title}
                    variant="h3"
                    align="center"
            >{data.title}</Typography>
                
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
                <br />
                <a href={data.Resume} download="AyushShah_Resume">
                    <Button 
                        variant="outlined" 
                        className={classes.downloadButton}
                    >Download Resume</Button>
                </a>
            </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Header);
