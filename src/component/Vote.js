import React from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width : '100%',
  },
}));

const Vote = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div style ={{
            display : 'float',
            width : '100%',
            margin: '10px auto'
        }}>
            <Grid item xs={12} style = {{ marginLeft : 50, display : 'float', marginRight : 50}}>
                <Paper className={classes.paper} style = {{float : 'left', width : '100%'}}> 
                    <Button variant="outlined" style = {{float : 'left', width : '73%'}}>우리의 선택으로 만들어나가는 혼술 문화!</Button>
                    <Button variant="outlined" color="primary" style = {{float : 'right'}} onClick={()=>{history.push('/community/vote')}}>
                        비오는 날에 가장 어울리는 혼술 조합은? 투표하러 가기!
                    </Button>
                </Paper>
            </Grid>
        </div>
    );
};

export default Vote;