import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import data from '../data';

const styles = theme => ({
    skillsTitle:{
        fontSize: '3em',
        fontWeight: '400',
        letterSpacing: '0.3rem',
        textAlign: 'center',
        color: '#689f38',
        fontVariant: 'small-caps',
        fontVariantLigatures: 'normal',
        fontVariantCaps: 'small-caps',
        fontVariantNumeric: 'normal',
        fontVariantEastAsian: 'normal',
        padding: '20px 0',
        [theme.breakpoints.down('xl')]: {
           fontSize: '3em'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '3em'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '3em'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
            fontWeight: 500,
            letterSpacing: '0.4rem'
        },
        [theme.breakpoints.down('xs')]: {
           fontSize: '2em',
           fontWeight: 500,
           letterSpacing: '0.4rem'
        }
    },
    hrLine:{
        marginTop: '-30px',
        marginBottom: '10px',
        width: '100px',
        border: '0px',
        backgroundColor: '#d84315',
        height: '2px'
    },
    skillsSubTitle:{
        textAlign: 'center',
        padding: '20px 200px',
        fontSize: '1.5em',
        color: '#757575',
        [theme.breakpoints.down('xl')]: {
            padding: '20px 200px',
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('lg')]: {
            padding: '20px 200px',
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('md')]: {
            padding: '20px 150px',
            fontSize: '1.4rem'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '20px 100px',
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '20px 20px',
            fontSize: '1.2rem'
        }
    },
    imageContainer:{
        // width: '150px',
        // heigth: '300px',
        display: 'inline-block',
        color: '#757575',
        padding: '60px',
        [theme.breakpoints.down('xl')]: {
           padding: '60px'
        },
        [theme.breakpoints.down('lg')]: {
            padding: '60px'
        },
        [theme.breakpoints.down('md')]: {
            padding: '60px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '30px'
        },
        [theme.breakpoints.down('xs')]: {
           padding: '30px'
        }
    },
    image:{
        height: '150px',
        width: '150px',
        [theme.breakpoints.down('xl')]: {
           height: '150px',
           width: '150px'
        },
        [theme.breakpoints.down('lg')]: {
            height: '150px',
            width: '150px'
        },
        [theme.breakpoints.down('md')]: {
            height: '150px',
            width: '150px'
        },
        [theme.breakpoints.down('sm')]: {
            height: '120px',
            width: '120px'
        },
        [theme.breakpoints.down('xs')]: {
            height: '120px',
            width: '120px'
        }
    }
});

class Skills extends Component {
    render() {
        const { classes } = this.props;

        let skillsMarkUp = data.Skills.map((skill, index) => {
            return (
            <div className={classes.imageContainer} key={index}>
                <div>
                    <img src={skill.image} alt={skill.alt} className={classes.image}/>
                </div>
                <h3>{skill.name}</h3>
            </div>
            );
        });

        return (
            <div id="skills">
                <h2 className={classes.skillsTitle}>
                    <span>Skills</span>
                </h2>

                <hr className={classes.hrLine} />

                <p className={classes.skillsSubTitle}>I'm pretty good at a lot of things. Here are just a few of them. These are a combination of my expertise as well as skills with which I am familiar  </p>

                {skillsMarkUp}
                
            </div>
        )
    }
}

export default withStyles(styles)(Skills);
