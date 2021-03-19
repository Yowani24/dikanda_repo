import Upadates from "./components/homeupdates/Upadates";
import Showcase from "./components/home_header/Showcase";
import Testimonial from "./components/home_testimonial/Testimonial";
import About from "./components/home_about/About";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import RecatDOM from 'react-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Showcase}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
  );
}
export default App;
