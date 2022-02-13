import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import Favorites from "./Favorites"
import LetterContainer from "./LetterContainer";
import Keyboard from "./Keyboard";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isFavorited, setIsFavorited] = useState(false)
  const [unfilteredWord, setUnfilteredWord] = useState([])
  const [favoriteList, setFavoriteList] = useState([])
  const [keyboard, setKeyboard] = useState([])
  const [word, setWord] = useState("")
  const [pronunciation, setPronunciation] = useState("")
  const [english, setEnglish] = useState("")
  const [def, setDef] = useState("")
  const bgColor = isDarkMode ? "black" : "white"
  const textColor = isDarkMode ? "white" : "black"
  const checked = isDarkMode ? true : false

  // First dictionary API that returns random 5-letter word
  useEffect(() => {
    fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=5",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "740a56d697mshdb542b570403ccdp16a52fjsn58c65cad5f5e"
        }
      }
    )
      .then(res => res.json())
      .then(data => setUnfilteredWord(data.word))
  }, [])

  // Second dictionary API used as validation, makes sure the is contained in Merriam Websters
  useEffect(() => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${unfilteredWord}?key=c7d47a35-1538-4a8c-a6a6-5d47170ded58`)
      .then(res => res.json())
      .then(data => {
        setWord(unfilteredWord)
        setPronunciation(data[0].hwi.prs[0].mw)
        setEnglish(data[0].fl)
        setDef(data[0].shortdef[0])
      })
  }, [unfilteredWord])

  function handleKeyboard(letter) {
    setKeyboard(letter)
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            bgColor={bgColor}
            textColor={textColor}
            checked={checked}
          />
          <LetterContainer
            textColor={textColor}
            bgColor={bgColor}
            word={word}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            setFavoriteList={setFavoriteList}
            keyboard={keyboard}
          />
          <Keyboard handleKeyboard={handleKeyboard} />
        </Route>
        <Route exact path="/favorites">
          <Favorites bgColor={bgColor} textColor={textColor} favoriteList={favoriteList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
