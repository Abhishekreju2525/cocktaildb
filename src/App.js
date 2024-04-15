import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import DrinkPage from './pages/DrinkPage';
import SearchPage from './pages/SearchPage';
import Browsepage from './pages/Browsepage';
import IngPage from './pages/IngPage';

function App() {
  return (
    <>
    <Header></Header> 
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}/>
      <Route path='/drink/:id' element={<DrinkPage></DrinkPage>}/>
      <Route path='/ingredient/:title' element={<IngPage></IngPage>}/>
      {/* <Route path='/search/:keyword' element={<SearchPage></SearchPage>}/> */}
      <Route path='/browse/:query' element={<Browsepage></Browsepage>}/>
    </Routes>

    </>
  );
}

export default App;
