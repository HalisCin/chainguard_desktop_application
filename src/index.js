import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './screens/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageOne from "./screens/pageOne";
import Profile from "./screens/profile";
import AdminPage from "./screens/adminPage";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter> {/* Wrap Routes with Router */}
          <Routes>
              <Route index element={<App />} />
              <Route path="pageone" element={<PageOne />} />
              <Route path="profile" element={<Profile/>} />
              <Route path="login" element={<App/>} />
              <Route path="adminPage" element={<AdminPage />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
