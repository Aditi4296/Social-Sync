import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';
import Home from './pages/home.js'
import Login from './pages/login';
import Register from './pages/register';

import Alert from './components/alert/Alert.js'
import Header from './components/header/Header'
import StatusModal from './components/StatusModal';

import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';
import { getSuggestions } from './redux/actions/suggestionsAction';


function App() {
  const { auth, status, modal } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
    }
  }, [dispatch, auth.token])

  return (
    <div className={`App ${(status || modal) && 'mode'}`}>
      <Router>
        <Alert />
        {/* <input type="checkbox" id="theme" /> */}
        {auth.token && <Header />}
        {status && <StatusModal />}
        <Routes>
          <Route exact path='/' element={auth.token ? <Home /> : <Login />} />
          <Route exact path='/register' element={<Register />} />
          {/* <Route exact path='/:page' component={PageRender} />
          <Route exact path='/:page/:id' component={PageRender} /> */}
        </Routes>
        <div className='wrap_page'>
          <PrivateRouter exact path='/:page' component={PageRender} />
          <PrivateRouter exact path='/:page/:id' component={PageRender} />
        </div>
      </Router>
    </div>
  );
}

export default App;
