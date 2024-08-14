
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RecipeInfo from './pages/RecipeInfo';
import Nav from './components/Nav'
import { useState } from 'react';
import AllRecipes from './pages/AllRecipes';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {

  const [loading, setLoading] = useState(true)
  const [hover, setHover] = useState(-1)

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Header loading={loading} setLoading={setLoading} hover={hover} setHover={setHover} />} />
        <Route path="recipes/:id" element={<RecipeInfo hover={hover} setHover={setHover} />}  />
        <Route path="allrecipes" element={<AllRecipes loading={loading} setLoading={setLoading} hover={hover} setHover={setHover} />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
