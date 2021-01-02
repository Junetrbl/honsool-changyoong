import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link, useHistory} from 'react-router-dom';
import logo from './logo.png';
import community from '../static/images/community.png'
import content from '../static/images/alcohol3.png'

const images = [
  {
    url: content,
    title: 'Content',
    width: '50%',
    link: '/content/'
  },
  {
    url: community,
    title: 'Community',
    width: '50%',
    link: '/community/'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const Home = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <div>
              <img 
              style={{
                width: 350,
                height: 350,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'block',
                margin: '0 auto',
                padding: 70,
              }}
              src={logo} alt={'logo'} />
            </div>
            <div className={classes.root}>
            {images.map((image) => (
                <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: image.width,
                }}
                onClick={()=>{history.push(image.link)}}
                >
                <span
                    className={classes.imageSrc}
                    style={{
                    backgroundImage: `url(${image.url})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                    >
                    {image.title}
                    <span className={classes.imageMarked} />
                    </Typography>
                </span>
              
                </ButtonBase>
            ))}
            </div>
        </div>
    );
};

export default Home;