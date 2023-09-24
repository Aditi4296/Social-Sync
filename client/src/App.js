import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageRender from './PageRender';
import Home from './pages/home.js'
import Login from './pages/login';

import Alert from './components/alert/Alert.js'
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';


function App() {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  },[dispatch])

  return (
    <div>
      <Router>
        <Alert />
        <Routes>
          <Route exact path='/' Component={auth.token ? Home : Login} />
          <Route exact path='/:page' Component={PageRender} />
          <Route exact path='/:page/:id' Component={PageRender} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
