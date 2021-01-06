import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import data from '../data';

const styles = theme => ({
    experienceContainer: {
        padding: '0 75px',
        background: '#f7f7f7',
        marginBottom: '150px'
    },
    experiencePage:{
        padding: '50px 0',
        margin: 'auto',
        backgroundColor: '#ffffff',
        boxShadow: '5px 5px 10px #aaa'
    },
    experienceTitle:{
        fontSize: '3em',
        fontWeight: '400',
        letterSpacing: '5px',
        textAlign: 'center',
        color: '#689f38',
        fontVariant: 'small-caps',
        fontVariantLigatures: 'normal',
        fontVariantCaps: 'small-caps',
        fontVariantNumeric: 'normal',
        fontVariantEastAsian: 'normal',
        padding: '20px 0',
    },
    hrLine:{
        marginTop: '-30px',
        marginBottom: '10px',
        width: '100px',
        border: '0px',
        backgroundColor: '#d84315',
        height: '2px'
    },
    experienceSubTitle:{
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '1.5em',
        color: '#757575'
    },
    pipe:{
        margin: '0 5px 0 5px',
        fontWeight: 'bold',
        color: '#d84315',
        fontSize: '1.25em'
    },
    individualExperienceTitle:{
        fontSize: '2.25em',
        color: '#757575',
        fonFamily: 'Oxygen, sans-serif',
        fontWeight: 400,
        marginTop: '5px',
        marginBottom: '10px'
    },
    individualExperienceProfile:{
        fontsize: '1.15em',
        color: '#757575',
        marginTop: '0px'
    },
    individualExperienceList: {
        color: '#757575',
        marginBottom: '10px',
        textAlign: 'justify',
        textJustify: 'inter-charachter',
        '& li':{
            listStyle: 'none',
            borderLeft: '2px solid #aaa',
            margin: '0 0 10px -40px',
            paddingLeft: '25px'
        }
    },
    individualExperienceImage:{
        height: '150px',
        width: '200px'
    },
    individualExperience:{
        display: 'inline-grid',
        textAlign: 'left',
        position: 'relative',
        marginBottom: '60px',
        paddingLeft: '40px',
        paddingRight: '40px',
        maxWidth: '450px'
    }
});

class Experience extends Component {
    render() {

        const { classes } = this.props;

        let individualExperienceMarkUp = data.Experience.map((exp, index) => {
            return(<div className={classes.individualExperience} key={index}>
                <img src={exp.image} className={classes.individualExperienceImage} alt="" />
                <h3 className={classes.individualExperienceTitle}>{exp.name}</h3>
                <p className={classes.individualExperienceProfile}>
                    {exp.position}
                    <span className={classes.pipe}>|</span>
                    {exp.location}
                    <span className={classes.pipe}>|</span>
                    {exp.duration}
                </p>
                <ul className={classes.individualExperienceList}>
                    {exp.description.map((info, index) => {
                        return(<li key={index}>{info}</li>);
                    })}
                </ul>
            </div>);
        });

        return (
            <div id="experience" className={classes.experienceContainer}>
                <Paper elevetion={3} className={classes.experiencePage}>
                <h2 className={classes.experienceTitle}>
                    <span>Experience</span>
                </h2>

                <hr className={classes.hrLine} />

                <p className={classes.experienceSubTitle}>We learn of great things by little Experiences</p>

                {individualExperienceMarkUp}

                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Experience);
