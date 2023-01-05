import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import DataContext from './context/DataProvider'

function App() {
  return (
    <>
      {/* DataContext is function wrap application */}
      <DataContext>
        <Navbar />
        <Home />
      </DataContext>
    </>
  );
}

export default App;
