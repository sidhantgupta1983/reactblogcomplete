import './App.css';
import Header from './Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Bollywood from './Bollywood/Bollywood'
import Technology from './Technology/Technology'
import Hollywood from './Hollywood/Hollywood'
import Fitness from './Fitness/Fitness'
import Food from './Food/Food'
import PageNotFound from './Component/PageNotFound'
import ShowBlog from './Component/ShowBlog';



function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/bollywood' element={<Bollywood/>}/> 
            <Route path='/technology' element={<Technology/>} />
            <Route path='/hollywood' element={<Hollywood/>} />
            <Route path='/fitness/' element={<Fitness/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/showblog/:id' element={<ShowBlog />}/>
            <Route path='/*' element={<PageNotFound/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;


