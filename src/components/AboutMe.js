import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import data from '../data';

const styles = theme => ({
    meContainer: {
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: '100px',
        marginLeft: '100px',
        marginBottom: '50px',
        position: 'relative',
        verticalAlign: 'top',
        border: '1px solid #689f38',
    },
    meTitle:{
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
    meSubTitle:{
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '1.5em',
        color: '#757575'
    },

    meImage:{
        maxHeight: '200px',
        maxWidth: '200px',
        border: '2px solid black',
        marginTop: '20px',
        display: 'inline-block'
    },
    meDescription:{
        color: '#757575',
        textAlign: 'justify',
        maxWidth: '1100px',
        //float: 'left',
        marginTop: '20px', 
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        display: 'inline-block',
        fontSize: '1.15em'

    },
    meImageContainer:{
        //float: 'left',
    }

});

class AboutMe extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div id="aboutme">
                <h2 className={classes.meTitle}>
                    <span>Me</span>
                </h2>
                <hr className={classes.hrLine} />
                <p className={classes.meSubTitle}>I have been a fixer all my life, fixing all kinds of problems</p>
                <div className={classes.meContainer}>
                <div className={classes.meImageContainer}>
                    <img src={data.AboutMe.image} className={classes.meImage} />
                </div>
                <div className={classes.meDescription}>
                    {
                        data.AboutMe.description.map((desc) => {
                            return (
                                <p>{desc}</p>
                            );
                        })
                    }
                </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);
