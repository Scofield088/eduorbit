import React from 'react';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JS (needed for carousel)
import MyComponent from './components/MyComponent';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <AppRoutes />
      <MyComponent />
    </div>
  );
};

export default App;
