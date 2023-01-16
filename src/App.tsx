import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import DataProvider from './context/DataProvider'
import DetailsView from './components/details/DetailsView';


function App() {
  return (
    <>
      {/* DataContext is function wrap application */}
      <DataProvider>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<DetailsView />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
