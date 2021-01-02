import React, {useState, useRef} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Modal from "@material-ui/core/Modal";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Header from "./Header.js";
import Vote from "./Vote.js";

import blanc from "../static/images/blanc.jpg";
import cass from "../static/images/cass.png";
import hoegarden from "../static/images/hoegarden.jpg";
import jinro from "../static/images/jinro.jpeg";
import terra from "../static/images/terra.jpg";
import chungha from "../static/images/chungha.jpg";
//추가
import { Link } from "react-router-dom";

let store, setStore;



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const ImageList = () => {
  const images = [
  {
    id: 1,
    url: blanc,
    title: "블랑",
    width: "50%",
    link: "/content/",
    comment: [
      {
        writer: 'user1',
        comment: '블랑 소맥이 특이합니다'
      },
      {
        writer: 'user2',
        comment: '명란 구이랑 같이 먹는 걸 추천해요'
      },
    ],
  },
  {
    id: 2,
    url: cass,
    title: "카스",
    width: "50%",
    link: "/community/",
    comment: [],
  },
  {
    id: 3,
    url: hoegarden,
    title: "호가든",
    width: "50%",
    link: "/community/",
    comment: [],
  },
  {
    id: 4,
    url: jinro,
    title: "진로",
    width: "50%",
    link: "/community/",
    comment: [],
  },
  {
    id: 5,
    url: terra,
    title: "테라",
    width: "50%",
    link: "/community/",
    comment: [],
  },
  {
    id: 6,
    url: chungha,
    title: "청하",
    width: "50%",
    link: "/community/",
    comment: [],
  },
];
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  //추가
  const [body, setBody] = React.useState(null);
  const [store, setStore] = React.useState(images);

  //추가
  const createBody = (tile) => {
    return (
      <div style={modalStyle} className={classes.paper}>
        <h3 id="simple-modal-title">{tile.title}</h3>
        <img src={tile.url} alt={tile.title} 
        style={{
                width: '100%',
              }}/>
        {tile.comment.map((comment)=>
        <div
        style = {{
          display : 'flex'
          }}>
        <h4> {comment.writer} </h4>
        <h5 style = {{paddingLeft : 10}}> {comment.comment} </h5>
        </div>
        )}
        <div
        style = {{
          display : 'flex'
        }}>
          <TextField
            id="standard-full-width"
            label="댓글"
            style={{ margin: 8 }}
            placeholder="이 술은요..."
            inputRef = {userComment}
            helperText="당신의 경험을 남겨주세요"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" color="primary" onClick={() => addHandler(tile)}>
            게시
          </Button>
        </div>
        {/* <SimpleModal /> */}
      </div>
    );
  };

  const handleOpen = (tile) => {
    setOpen(true);
    //추가
    setBody(createBody(tile));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userComment = useRef();

  const addHandler = (tile) => {        
        addItem(tile,
        {
            writer: 'user3',
            comment: userComment.current.value
        })
  };


  function addItem(tile, newItem) {
    const target = store.findIndex((image) => image.id == tile.id);
    const deleted = store.splice(target, 1)[0];
    const newImage = {
        ...deleted,
        comment: [
          ...deleted.comment,
          newItem//이건 새로받은 comment임
        ]
      };

    setStore([
      newImage,
      ...store,
    ]);
    setBody(createBody(newImage));
  }

  return (
    <div className={classes.root}>
      <Header />
      <Vote/>
      <GridList cellHeight={180} className={classes.gridList}>
        {store.map((tile) => (
          <GridListTile
            key={tile.img}
            onClick={
              //추가
              () => {
                handleOpen(tile);
              }
            }
          >
            <img src={tile.url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ImageList;
