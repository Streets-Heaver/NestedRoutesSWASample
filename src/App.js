import {React} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default function App() {
  var historyRef
  function Home() {
    return <h2>Home</h2>;
  }
  
  function Reminders() {
    return <h2>Reminders</h2>;
  }
  function Patients() {
    historyRef = useHistory();
    return (
    <div>
      <h2>Patients</h2>
      <button onClick={myPatients}>My Patients</button>
      <button onClick={allPatients}>All Patients</button>
    </div>);
  }
  
  const myPatients = ()=>{
    historyRef.push("/patients/mypatients")
    console.log("myPatients")
  }
  
  const allPatients = ()=>{
    historyRef.push("/patients/allpatients")
    console.log("allPatients")
  }


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reminders">Reminders</Link>
            </li>
            <li>
              <Link to="/patients/mypatients">Patients</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/reminders">
            <Reminders />
          </Route>
          <Route path="/patients/mypatients">
            <Patients />
          </Route>
          <Route path="/patients/allpatients">
            <Patients />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  ); 
}