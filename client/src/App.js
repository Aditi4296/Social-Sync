import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageRender from './PageRender';
import Home from './pages/home.js'
import Login from './pages/login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' Component={Login} />
          <Route exact path='/:page' Component={PageRender} />
          <Route exact path='/:page/:id' Component={PageRender} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
