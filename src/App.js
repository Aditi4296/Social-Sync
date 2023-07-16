import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageRender from './PageRender';

function App() {
  return (
    <Router>
      <input type='checkbox' id='theme' />
      <div className="App">
        <div className="main">
          <Routes>
            <Route exact path='/:page' Component={PageRender} />
            <Route exact path='/:page/:id' Component={PageRender} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
