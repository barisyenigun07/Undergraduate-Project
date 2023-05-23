import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider  } from 'react-query'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //{/*<Provider store={store}>*/}
      <App/>
     //{/*</Provider>*/}
   
);
