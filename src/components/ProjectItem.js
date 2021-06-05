import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = theme => ({
  item__container: {
    display: 'flex',
    margin: '0px auto',
    boxShadow: '5px 5px 10px #aaa',
    width: '70rem',
    height: '20rem',
    [theme.breakpoints.down('xl')]: {
      width: '70rem',
      height: '20rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '70rem',
      height: '20rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '70rem',
      height: '20rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '35rem',
      height: '35rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '35rem',
    height: '35rem',
    }
  },
  item__titleContainer:{
    backgroundColor: '#689f38',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    flex: '1 0',
    padding: '0 1rem',
    '& h3': {
      width: '200px'
    }
  },
  item__descriptionContainer:{
    flex: '4 0',
    textAlign: 'left',
    padding: '1rem',
    '& ul': {
      paddingLeft: '2rem',
      [theme.breakpoints.down('sm')]: {
         paddingLeft: '1rem'
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '1rem'
      }
    },
    '& li':{
      listStyle: 'none',
      borderLeft: '2px solid #d84315',
      margin: '0 0 10px 0px',
      paddingLeft: '10px',
    }
  },
  item__skillsTitle:{
    fontSize: '1.4rem',
    fontVariant: 'small-caps',
    fontVariantLigatures: 'normal',
    fontVariantCaps: 'small-caps',
    fontVariantNumeric: 'normal',
    fontVariantEastAsian: 'normal',
    marginLeft: '2rem',
    color: '#d84315',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1rem'
   },
   [theme.breakpoints.down('xs')]: {
     marginLeft: '1rem'
   }
  },
  item__skills:{
    padding: '0 10px',
    border: '1px solid rgb(192, 190, 190)',
    display: 'inline-block',
    borderRadius: '4px',
    backgroundColor: 'rgb(245, 245, 245)',
    margin: '3px 5px'
  },
  item__button:{
    margin: '20px 2rem',
    padding: '5px 15px',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 1rem'
   },
   [theme.breakpoints.down('xs')]: {
     margin: '20px 1rem'
   },
    '& .MuiSvgIcon-root': {
      marginLeft: '10px'
    }
  }
})
class ProjectItem extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.item__container}>
        <div className={classes.item__titleContainer}>
          <h3>{this.props.projectDetails.projectName}</h3>
        </div>
        <div className={classes.item__descriptionContainer}>
          <ul>
            {
              this.props.projectDetails.projectDescription.map(description => {
                return <li>{description}</li>;
              })
            }
          </ul>
          <div>
            <span className={classes.item__skillsTitle}>Skills: </span>
            {
              this.props.projectDetails.projectSkills.map(eachSkill => {
                return <span className={classes.item__skills}>{eachSkill}</span>;
              })
            }
          </div>
          <Button
            variant="outlined"
            className={classes.item__button}
            onClick={() => window.open(this.props.projectDetails.githubLink, '_blank')}
          >
            View on GitHub
            <GitHubIcon />
          </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(ProjectItem);