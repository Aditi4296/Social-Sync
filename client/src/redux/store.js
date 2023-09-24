import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index.js'

import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore({
    reducer: rootReducer,},
    composeWithDevTools(applyMiddleware(thunk))
)


const DataProvider = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider