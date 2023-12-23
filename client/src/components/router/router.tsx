import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../main_layout/main_layout';
import Home from '../pages/home';
import Confession from '../pages/confession';
import Misdemeanour from '../pages/misdemeanour';
import NotFound from '../not_found/not_found';

function Router() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/confession" element={<Confession />} />
            <Route path="/misdemeanour" element={<Misdemeanour />} />
            <Route path="/error/:statusCode" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}

export default Router