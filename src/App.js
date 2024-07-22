import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Error } from './pages/Error';
import { Navbar } from './pages/Navbar';
import { Profile } from './pages/Profile';
import { useState, createContext, React } from 'react';
import { Context } from './Context/Context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState("Ubaid");

  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Context.Provider value={{ username, setUsername}}>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path=":page" element={<Error/>}/>
          </Routes>
      </Router>
      </Context.Provider>
      </QueryClientProvider>
      </div>
  );
}

export default App;
