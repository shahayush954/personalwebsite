import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import data from '../data';

const styles = theme => ({
    educationContainer:{
        marginBottom: '150px',
        padding: '0 75px'
    },
    educationTitle:{
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
        padding: '20px 0'
    },
    hrLine:{
        marginTop: '-30px',
        marginBottom: '10px',
        width: '100px',
        border: '0px',
        backgroundColor: '#d84315',
        height: '2px'
    },
    educationSubTitle:{
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '1.5em',
        color: '#757575'
    },
    individuaEducation:{
        display:'inline-grid',
        maxWidth: '300px',
        textAlign: 'left',
        padding: '20px',
        marginLeft: '15px',
        marginBottom: '30px',
        marginTop: '15px',
        marginRight: '15px',
        boxShadow: '5px 5px 10px #aaa'
    },
    individuaEducationCollege:{
        fontSize: '2em',
        color: '#689f38',
        fonFamily: 'Oxygen, sans-serif',
        fontWeight: 300,
        marginTop: '5px',
        marginBottom: '10px'
    },
    individualEducationHrLine:{
        width: '250px',
        border: '0px',
        backgroundColor: '#d84315',
        height: '2px',
        borderRadius: '60%'
    },
    individuaEducationDegree:{
        fontSize: '1.25em',
        color: '#757575',
        fontFamily: 'Oxygen, sans-serif',
        fontWeight: 300
    },
    individuaEducationDuration:{
        fontSize: '1.25em',
        color: '#757575',
        fontFamily: 'Oxygen, sans-serif',
        fontWeight: 300,
        marginTop: '0px'
    },
    individuaEducationLocation:{
        fontSize: '1.25em',
        color: '#757575',
        fontFamily: 'Oxygen, sans-serif',
        fontWeight: 300,
        marginTop: '0px'
    },
    individuaEducationResult:{
        fontSize: '1.5em',
        color: '#757575',
        fonFamily: 'Oxygen, sans-serif',
        fontWeight: 600,
        marginTop: '5px',
        marginBottom: '10px'
    }

});

class Education extends Component {
    render() {

        const { classes } = this.props;

        let educationMarkUp = data.Education.map((edu, index) => {
            return (
                <Paper className={classes.individuaEducation} key={index}>
                    <h3 className={classes.individuaEducationCollege}>{edu.college}</h3>
                    <hr className={classes.individualEducationHrLine} />
                    <p className={classes.individuaEducationDegree}>{edu.degree}</p>
                    <p className={classes.individuaEducationDuration}>{edu.duration}</p>
                    <p className={classes.individuaEducationLocation}>{edu.location}</p>
                    <h4 className={classes.individuaEducationResult}>{edu.result}</h4>
                </Paper>
            );
        })

        return (
            <div id="education" className={classes.educationContainer}>
                <h2 className={classes.educationTitle}>
                    <span>Education</span>
                </h2>

                <hr className={classes.hrLine} />

                <p className={classes.educationSubTitle}>I have never let anything interfere with my Education</p>
                
                {educationMarkUp}

            </div>
        )
    }
}

export default withStyles(styles)(Education);
