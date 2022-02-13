import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Favorites from "./Favorites"
import LetterContainer from "./LetterContainer";
import { useState } from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const bgColor = isDarkMode ? "black" : "white"
  const textColor = isDarkMode ? "white" : "black"
  const checked = isDarkMode ? true : false

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} bgColor={bgColor} textColor={textColor} checked={checked}/>
          <LetterContainer textColor={textColor} bgColor={bgColor}/>
        </Route>
        <Route exact path="/favorites">
          <Favorites bgColor={bgColor} textColor={textColor}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
