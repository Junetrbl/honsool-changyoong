import './App.css';
import Content from './routers/Content';
import Community from './routers/Community';
import VotePage from './routers/VotePage';
import { Switch, Route } from 'react-router-dom';
import Home from './routers/Home';


function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/content" component={Content}/>
      <Route path="/community" component = {Community} exact={true}/>
      <Route path="/community/vote" component = {VotePage} exact={true}/>
    </Switch>
  );
}

export default App;
