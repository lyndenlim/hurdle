import { Route } from "react-router-dom";
import Header from "./Header";
import Favorites from "./Favorites"

function App() {
  return (
    <div>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
