import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ProjectItem from './ProjectItem';
import Carousel from 'react-material-ui-carousel'
import data from '../data';


const styles = theme => ({
  projects__container: {
    marginBottom: '150px',
    padding: '0 4rem',
    [theme.breakpoints.down('xl')]: {
        padding: '0 4rem'
    },
    [theme.breakpoints.down('lg')]: {
        padding: '0 4rem'
    },
    [theme.breakpoints.down('md')]: {
        padding: '0 4rem'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0 1rem'
    },
    [theme.breakpoints.down('xs')]: {
        padding: '0 1rem'
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
  projects__title:{
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
  projects__subtitle:{
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '1.5em',
    color: '#757575',
    [theme.breakpoints.down('xl')]: {
       fontSize: '1.5rem'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.5rem'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1.4rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem'
    },
    [theme.breakpoints.down('xs')]: {
       fontSize: '1.2rem'
    }
  },
});


class PersonalProjects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="personal-projects" className={classes.projects__container}>
        <h2 className={classes.projects__title}>
          <span>Personal Projects</span>
        </h2>

        <hr className={classes.hrLine} />

        <p className={classes.projects__subtitle}>I have always liked to try my skills on a few handfull of Projects</p>

        <Carousel
          animation="fade"
          navButtonsAlwaysVisible
          timeout={1000}
          interval={5000}
        >
          {
            data.Projects.map(eachProject => {
              return <ProjectItem projectDetails={eachProject} />;
            })
          }
        </Carousel>
      </div>
    );
  }
}

export default withStyles(styles)(PersonalProjects);