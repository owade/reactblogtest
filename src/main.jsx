import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import {store} from "./app/store";
import {Provider} from 'react-redux';


// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/*" element={ <App/> } />
//       </Routes>
//     </Router>,
//   </React.StrictMode>,
//   document.getElementById('root')
// )
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
