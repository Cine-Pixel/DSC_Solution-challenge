import "./App.css";
import { Header, SideBar } from "./components";
import { Landing, ClassList, About, Contact, ClassDetail } from "./pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <main>
          <SideBar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/class-list" exact component={ClassList} />
              <Route path="/class-detail" exact component={ClassDetail} />
            </Switch>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;