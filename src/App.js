import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Favorites from "./Favorites"
import LetterContainer from "./LetterContainer";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <LetterContainer />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
