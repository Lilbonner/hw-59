import './App.css'
import FilmList from "./components/FilmList.tsx";

function App() {

  return (
    <>
      <div className="movie">
          <h1>Recommended film list:</h1>
          <FilmList/>
      </div>
      <div></div>
    </>
  )
}

export default App
