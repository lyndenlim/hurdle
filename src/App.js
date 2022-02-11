import Header from "./Header";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Header />
      </Route>
    </div>
  );
}

export default App;
