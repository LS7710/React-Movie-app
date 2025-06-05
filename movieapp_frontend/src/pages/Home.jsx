import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1990"},
        {id: 3, title: "Transformers", release_date: "2008"},
        {id: 4, title: "Avengers", release_date: "2014"},
    ]

    return (
        <div className = "home">
            <div className="movies-grid">
                {movies.map(movies => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
         </div>
    )
}