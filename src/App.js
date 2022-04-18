import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import MovieList from './component/MovieList';
import Services from './pages/Services';
import About from './pages/About';
import {Data} from './Data'
import MovieDetails from './component/MovieDetails';


function App() {
  return (
    <div >
     <Navigation/>
      <Routes>
        <Route   path="/" element={<MovieList Data={Data}/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/details/:id' element={<MovieDetails Data={Data} />}/>
      </Routes>
    </div>
  );
}

export default App;
