
// import Products from "./Components/Products/Products";
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";


function App() {
  return (
   <>
   <Router>
       <Switch>
         <Route path='/' component={Home}  exact/>
         {/* <Route path='/signin' component={SigninPage }  exact/> */}
       </Switch>
    </Router>
   </>
  );
}

export default App;
