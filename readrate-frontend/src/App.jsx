import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import ReadHistory from './pages/ReadHistory';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="bg-white dark:bg-[#1a120b] text-gray-900 dark:text-yellow-100 transition-colors duration-300 min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/read-history" element={<ReadHistory />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
