import React from 'react';
import ColumnOne from './Components/ColumnOne';
import ColumnThree from './Components/ColumnThree';
import ColumnTwo from './Components/ColumnTwo';

// import {store} from './redux/store'
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './redux/CounterRedux/counterReducer';
import { buyReducer } from './redux/BuyRedux/buy.reducer';

import './css/main.css';




function App() {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
      items: buyReducer
    }
  })
  return (
    
    <Provider store={store}>
      <div className='app_body'>
        <ColumnOne/>
        <ColumnTwo/>
        <ColumnThree/>
      </div>
    </Provider>
   
  )
}

export default App;
