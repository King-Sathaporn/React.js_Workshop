import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Pages/Home/Home';
import Member from './components/Pages/Member/Member';
import Product from './components/Pages/Product/Product';
import './App.css';

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/user" component={Member}/>
                    <Route path="/shop" component={Product}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
