import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Favorites from "./Favorites"
import LetterContainer from "./LetterContainer";
import { useEffect, useState } from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [unfilteredWord, setUnfilteredWord] = useState([])
  const [word, setWord] = useState("")
  const [syllable, setSyllable] = useState("")
  const [pronunciation, setPronunciation] = useState("")
  const [english, setEnglish] = useState("")
  const [shortDef, setShortDef] = useState("")
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
    console.log(unfilteredWord)
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${unfilteredWord}?key=c7d47a35-1538-4a8c-a6a6-5d47170ded58`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWord(unfilteredWord)
      setSyllable(data[0].hwi.hw)
      setPronunciation(data[0].hwi.prs[0].mw)
      setEnglish(data[0].fl)
      setShortDef(data[0].shortdef[0])
    })
  }, [unfilteredWord])

  console.log(word, syllable, pronunciation, english, shortDef)

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} bgColor={bgColor} textColor={textColor} checked={checked} />
          <LetterContainer textColor={textColor} bgColor={bgColor} />
        </Route>
        <Route exact path="/favorites">
          <Favorites bgColor={bgColor} textColor={textColor} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
