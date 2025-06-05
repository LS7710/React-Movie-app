import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const  movieNumber = 1;

  return (
    <>
    {movieNumber === 1 ? (
      <MovieCard movie={{title: "Sharknado 99", release_date: "2025"}} />
    ) : (
      <MovieCard movie={{title: "Sharknado 100", release_date: "2026"}}  />
    )}
    </>
  );
}


export default App
