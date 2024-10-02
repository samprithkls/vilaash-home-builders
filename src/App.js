import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/admin' element={ <Login />} />
                    <Route path='/' element={ <Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;