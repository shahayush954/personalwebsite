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
import './component.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';


const styles = theme => ({
    header:{
        backgroundImage: `url(${Background})`,
        minHeight: '45rem',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
        }
    },
    name:{
        color: '#fff',
        paddingTop: '10rem',
        [theme.breakpoints.down('xl')]: {
            fontSize: '6rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '6rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem'
        },
    },
    title:{
        color:'#fff',
        paddingTop: '1rem',
        borderRight: '0.15em solid #fff',
        width: 'fit-content',
        paddingLeft: '15px',
        paddingRight: '15px',
        [theme.breakpoints.down('xl')]: {
            fontSize: '6rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem'
        },
    }, 
    icons:{
        marginTop: '2rem',
        color: '#fff',
        marginLeft: '1rem',
        marginRight: '1rem',
        border: '0.2rem solid #ffffff',
        borderRadius: '50%',
        transition: 'all 0.3s ease-in-out',
        '&:hover':{
            backgroundColor: '#ffffff',
            color: '#689f38'
        },
        [theme.breakpoints.down('xl')]: {
            height: '5rem',
            width: '5rem'
        },
        [theme.breakpoints.down('lg')]: {
            height: '5rem',
            width: '5rem'
        },
        [theme.breakpoints.down('md')]: {
            height: '5rem',
            width: '5rem'
        },
        [theme.breakpoints.down('sm')]: {
            height: '4rem',
            width: '4rem',
            fontSize: '2.5rem'
        },
        [theme.breakpoints.down('xs')]: {
            height: '4rem',
            width: '4rem',
            fontSize: '2.5rem'
        },
    },
    downloadButton:{
        color: '#ffffff',
        borderColor: '#ffffff',
        marginTop: '3rem',
        height: '6rem',
        width: '20rem',
        fontSize: '1em',
        textTransform: 'uppercase',
        fontWeight: 600,
        borderRadius: '0%',
        border: '0.2rem solid',
        letterSpacing: '0.2rem',
        transition: 'all 0.3s ease-in-out',
        '&:hover':{
            backgroundColor: '#ffffff',
            color: '#689f38'
        },
        [theme.breakpoints.down('xl')]: {
            height: '6rem',
            width: '20rem'
        },
        [theme.breakpoints.down('lg')]: {
            height: '6rem',
            width: '20rem'
        },
        [theme.breakpoints.down('md')]: {
            height: '6rem',
            width: '20rem'
        },
        [theme.breakpoints.down('sm')]: {
            height: '5rem',
            width: '16rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '5rem',
            width: '16rem',
        }
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            formAddress: "",
            toAddress: data.Contact.mail,
            subject: "",
        }
    }

    showEmailModal = () => {
        this.setState({ showModal: true });
    }

    hideEmailModal = () => {
        this.setState({ showModal: false });
    }

    hideEmailModal = () => {
        this.setState({ showModal: false });
    }

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
        window.open(data.SocialMediaLinks.LinkedIn, '_blank');
    }

    handleGitHubPageChange = () => {
        window.open(data.SocialMediaLinks.GitHub, '_blank');
    }
    
    handleInstagramPageChange = () => {
        window.open(data.SocialMediaLinks.Instagram, '_blank');
    }

    handleTwitterPageChange = () => {
        window.open(data.SocialMediaLinks.Twitter, '_blank');
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
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
            <div className={classes.titleContainer}>
                <Typography
                        className={`${classes.title} typing-animation`}
                        variant="h3"
                        align="center"
                >{data.title}</Typography>
            </div>
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
                            style={{ marginRight: '10px' }}
                        >Download Resume</Button>
                    </a>
                    <Button 
                        variant="outlined" 
                        className={classes.downloadButton}
                        onClick={this.showEmailModal}
                    >Reach out to Me</Button>
            </div>
            <Modal
                show={this.state.showModal}
                onHide={this.hideEmailModal}
                centered
                className="mailModal__container"
                size="lg"
            >
                <ModalHeader
                    closeButton
                    className="mailModal__header"
                >
                    <div className="mailModal__headerText">New Message</div>
                </ModalHeader>
                <ModalBody className='mailModal__body'>
                    <div className='mailModal__inputContainer'>
                        <div className='mailModal__inputHeader'>From</div>
                        <input
                            className='mailModal__input'
                            value={this.state.formAddress}
                            name="formAddress"
                            placeholder='Your Email Address'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='mailModal__inputContainer'>
                        <div className='mailModal__inputHeader'>To</div>
                        <input
                            className='mailModal__input'
                            value={this.state.toAddress}
                            name="toAddress"
                            disabled
                            style={{ cursor: 'not-allowed' }}
                        />
                    </div>
                    <div className='mailModal__inputContainer'>
                        <div className='mailModal__inputHeader'>Subject</div>
                        <input
                            className='mailModal__input'
                            value={this.state.subject}
                            name="subject"
                            placeholder='Type a subject for your Email'
                            onChange={this.handleChange}
                        />
                    </div>
                </ModalBody>
                <ModalFooter className='mailModal__footer'>
                    <button
                        className='mailModal__btn mailModal__cancelBtn'
                        onClick={this.hideEmailModal}
                    >Cancel</button>
                    <button className='mailModal__btn mailModal__sendBtn'>Send</button>
                </ModalFooter>
            </Modal>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Header);
