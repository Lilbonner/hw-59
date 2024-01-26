import './App.css'
import FilmList from "./components/FilmList.tsx";
import MemeDisplay from "./components/memeDisplay.tsx";

function App() {

  return (
    <>
      <div className="movie">
          <h1>Films</h1>
          <FilmList/>
      </div>
      <div className="memes">
          <MemeDisplay/>
      </div>
    </>
  )
}

export default App
