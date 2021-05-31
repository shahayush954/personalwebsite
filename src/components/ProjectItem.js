import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = theme => ({
  item__container: {
    display: 'flex',
    width: '70rem',
    height: '20rem'
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
    marginLeft: '30px',
    color: '#d84315'
  },
  item__skills:{
    padding: '0 10px',
    border: '1px solid rgb(192, 190, 190)',
    borderRadius: '4px',
    backgroundColor: 'rgb(245, 245, 245)'
  },
  item__button:{
    margin: '20px 30px',
    padding: '5px 15px',
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
          <h3>Social Media: A twitter based Replica</h3>
        </div>
        <div className={classes.item__descriptionContainer}>
          <ul>
            <li>Have been creating a twiiter based repplica for learning React.js, Node.js and Express.js.</li>
            <li>The users are able to create an account, upload profile images, upload their thoughts(similar to a tweet), view others users posts, like a post, comment on a post, etc.</li>
            <li>The system uses Google Firebase for its backend database requirements.</li>
            <li>Created Api’s in Node.js and Express.js to fetch data from Firebase as per needs.</li>
            <li> Developed a Frontend using React.js and integrated Redux for effective state management.</li>
          </ul>
          <div>
            <span className={classes.item__skillsTitle}>Skills: </span>
            <span className={classes.item__skills}>ReactJs, Redux, NodeJs, Firebase</span>
          </div>
          <Button variant="outlined" className={classes.item__button}>
            View on GitHub
            <GitHubIcon />
          </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(ProjectItem);