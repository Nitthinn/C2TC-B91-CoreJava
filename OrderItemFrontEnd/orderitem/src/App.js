
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link here
// import ListItem from './ListItem';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/orderitems" element={<ListItem />} />
//             </Routes>
//         </Router>
//     );
// };

// const Home = () => (
//     <div>
//         <h1>Home Page</h1>
//         <Link to="/orderitems">View Order Items</Link>
//     </div>
// );

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListItem from './ListItem';
import Navbar from './Navbar';
import './App.css'; // Import CSS for App

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orderitems" element={<ListItem />} />
                </Routes>
            </div>
        </Router>
    );
};

const Home = () => (
    <div className="home">
        <h1>Home Page</h1>
        <p>Welcome to the Order Management System. Use the links above to navigate.</p>
    </div>
);

export default App;


