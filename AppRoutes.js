import React from "react";
import {Route, Rotes} from
'react-router-dom';
import Home from '../page/Home';
import About from '../pages/About';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
        </Routes>
    );
};

export default AppRoutes;