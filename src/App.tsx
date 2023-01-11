import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import DataProvider from './context/DataProvider'

function App() {
  return (
    <>
      {/* DataContext is function wrap application */}
      <DataProvider>
        <Navbar />
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
