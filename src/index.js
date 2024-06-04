import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { createStore} from 'redux';
import App from './App';
import './index.scss';
import reducer from './redux/reducer';


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <Provider store={store}>
          <App/>
            </Provider>

          </React.StrictMode>
        );
        

      
      
      
     



