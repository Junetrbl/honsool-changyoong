import React, { useState } from 'react';
import {load, Webcam} from '@teachablemachine/image';
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import ImageUploader from 'react-images-upload';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import HeaderContent from '../component/HeaderContent.js'

import cass from "../static/wordCloud/cass.jpeg";
import jinro from "../static/wordCloud/jinro.jpeg";
import cham from "../static/wordCloud/cham.jpeg";
import bud from "../static/wordCloud/bud.jpeg";
import guin from "../static/wordCloud/guin.jpeg";
import jeju from "../static/wordCloud/jeju.jpeg";
import tsing from "../static/wordCloud/tsing.jpeg";
import blanc from "../static/wordCloud/blanc.jpeg";
import chung from "../static/wordCloud/chung.jpeg";

import blanc_con from "../static/recommend/blanc.jpeg";
import chung_con from "../static/recommend/chung.jpeg";
import jinro_con from "../static/recommend/jinro.jpeg";


const URL = "https://teachablemachine.withgoogle.com/models/smWPBnKM4/";

let model, labelContainer, maxPredictions;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

  // Load the image model and setup the webcam
async function init() {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      // load the model and metadata
      // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
      // or files from your local hard drive
      // Note: the pose library adds "tmImage" object to your window (window.tmImage)
      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();
      labelContainer = document.getElementById("label-container");
      for (let i = 0; i < maxPredictions; i++) { // and class labels
          labelContainer.appendChild(document.createElement("div"));
      }
      console.log('on');
  }

async function predict() {
      // predict can take in an image, video or canvas html element
      try{ 
        // console.log(webcam.canvas);
        var image = document.getElementsByClassName("uploadPicture")[0];
        const prediction = await model.predict(image, false);
        console.log("success");
        prediction.sort(function(a, b) {
            return b.probability - a.probability;
        });
        const classPrediction = prediction[0].className + ": " + prediction[0].probability.toFixed(2);

        switch (prediction[0].className){
            case "cham" :
                labelContainer.childNodes[0].innerHTML = "<img src="+cham+">";
                break;
            case "bud" :
                labelContainer.childNodes[0].innerHTML = "<img src="+bud+">";
                break;
            case "tsing" :
                labelContainer.childNodes[0].innerHTML = "<img src="+tsing+">";
                break;
            case "blanc" :
                labelContainer.childNodes[0].innerHTML = "<img src="+blanc+">";
                labelContainer.childNodes[1].innerHTML = "<img src="+blanc_con+">";
                break;
            case "jinro" :
                labelContainer.childNodes[0].innerHTML = "<img src="+jinro+">";
                labelContainer.childNodes[1].innerHTML = "<img src="+jinro_con+">";
                break;
            case "cass" :
                labelContainer.childNodes[0].innerHTML = "<img src="+cass+">";
                break;
            case "chung" :
                labelContainer.childNodes[0].innerHTML = "<img src="+chung+">";
                labelContainer.childNodes[1].innerHTML = "<img src="+chung_con+">";
                break;
            case "guin" :
                labelContainer.childNodes[0].innerHTML = "<img src="+guin+">";
                break;
            case "jeju" :
                labelContainer.childNodes[0].innerHTML = "<img src="+jeju+">";
                break;
            default :
                var SorryText = "아직 이 술은 준비가 안되었네요, 죄송해요!"
                labelContainer.childNodes[0].innerHTML = SorryText;
        }

      } catch(err) {
        console.log("fail");
      }
}

let picture, setPicture;

const Content = () => {
    const classes = useStyles();

    const [picture, setPicture] = useState([]);

    const onDrop = picture => {
        setPicture(picture);
    };

    return (
        <div>
        <HeaderContent/>
        <div style = {{flex: 1, flexDirection: 'row', marginLeft : 30, marginRight : 30}}>
            <Grid item xs={12} style = {{flex:1}}>
            <Paper className={classes.paper}>
                < ImageUploader
                withIcon={true}
                buttonText='이미지를 선택하세요'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                maxFileSize={5242880}
                withPreview={true}
                />
                <div style = {{padding :20}}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{init()}}>Start</Button>
                        <Button onClick={()=>{predict()}}>Predict</Button>
                    </ButtonGroup>
                </div>
                <div id = "label-container">
                </div>
            </Paper>
            </Grid>
        </div>
        </div>
    );
};

export default Content;