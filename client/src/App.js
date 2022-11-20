import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import FormProducts from './components/FormProducts';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/home' exact>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/products'>
          <Products/>
        </Route>
        <Route path='/addProducts'>
          <FormProducts/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
