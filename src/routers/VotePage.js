import React from 'react';
import Header from "../component/Header.js";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column', 
    textAlign : 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const VotePage = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
        chicken : false
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine, chicken } = state;

    return (
        <div className={classes.root}>
            <Header/>
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <h4 style = {{color : 'grey'}}> 당신의 선택으로 혼술 커뮤니티를 만들어가요 ☺️ </h4>
                    <h2> 비오는 날에 가장 어울리는 혼술 조합은? 😋 ☔️</h2>
                    {/* <FormLabel component="legend"> 비오는 날에 가장 어울리는 혼술 조합은? </FormLabel> */}
                    <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                        label="삼겹살🥓 + 소주"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                        label="파전 + 막걸리🍶"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                        label="치즈🧀 + 와인🍷"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={chicken} onChange={handleChange} name="chicken" />}
                        label="치킨🍗 + 맥주🍺"
                    />
                    </FormGroup>
                    <FormHelperText> 최애를 골라주세요🤤 </FormHelperText>
                </FormControl>
            </div>
             <Button variant="outlined" color="secondary" style = {{marginLeft : 100, marginRight : 100}}>
                    투표하고 결과보기
            </Button>
        </div>
    );
};

export default VotePage;