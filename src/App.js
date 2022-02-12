import { Route } from "react-router-dom";
import Header from "./Header";
import Favorites from "./Favorites"
import LetterContainer from "./LetterContainer";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Header />
        <LetterContainer />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
