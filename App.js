import React from "react";
import AppRoutes from './routes/AppRoutes';
import Header from './component/Header';
import Footer from './components/Footer';

const App = () =>{


  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <register />
      <Footer />
    <form />
    </div>
  );
};
export default App;