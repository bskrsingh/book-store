import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Routes, Route } from "react-router-dom";
import './index.css';
import Login from './Components/Login/Login';
import SchoolDetails from './Components/InnerPages/SchoolDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooKListUpload from './Components/InnerPages/BookListUpload';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/schoolDetails" element={<SchoolDetails />} />
        <Route path="/uploadBook" element={<BooKListUpload />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);