
import './App.css';
import MyNav from './Components/MyNavbar/MyNav';
import Data from './Components/MovieData/Data';
import MoviesData from './Components/MovieData/Data';
import MoviesList from './Components/MoviesList/MoviesList';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <MoviesList MoviesData={MoviesData}/>
    </div>
  );
}

export default App;
