import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './navsite/home';
import About from './navsite/about';
import Where from './navsite/where';
//ctrl+space force intelliSense to pop up.
//Why everything is a mess?! Function inserted as {name} and sometimes {<name/>}
function App() {
  return (
    <div className="bg-blue-200 pb-10">
      <h1 className='text-5xl font-sans text-center py-4'>WildWikia</h1>
      <nav className='text-center static pb-10'>
        <Link className='mx-5' to="/home">Home</Link>
        <Link className='mx-5' to="/where">Where</Link>
        <Link className='mx-5' to="/about">About</Link>
      </nav>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/where' element={<Where/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;
