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
    skillsSubTitle:{
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '1.5em',
        color: '#757575'
    },
    imageContainer:{
        // width: '150px',
        // heigth: '300px',
        display: 'inline-block',
        color: '#757575',
        padding: '60px'
    },
    image:{
        height: '150px',
        width: '150px'
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

                <p className={classes.skillsSubTitle}>I'm pretty good at a lot of things. Here are just a few of them</p>

                {skillsMarkUp}
                
            </div>
        )
    }
}

export default withStyles(styles)(Skills);
