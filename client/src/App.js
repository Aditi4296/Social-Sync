import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageRender from './PageRender';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/:page' Component={PageRender} />
          <Route exact path='/:page/:id' Component={PageRender} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
