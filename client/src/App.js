import { Switch, Route } from "react-router-dom";
import Landing from "./view/Landing";
import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/' component={Landing}/>
    </Switch>
  );
}

export default App;
