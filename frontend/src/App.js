import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import EXTRA from './navsite/extras';
import About from './navsite/about';
import MINIONS from './navsite/minions';
//ctrl+space force intelliSense to pop up.
//Yksi sivu voisi olla encounter jonne voi lisätä unitteja ja hahmoja propsin avulla. SIellä voi vähentää hitlocationia ja willpower
//Myös encounter tracker olisi kova
//Meidän pitää luoda tapa et tämä toimii puhelimella. Kortit mene päin vittua nopeasti
function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-pink-500 pb-10 min-h-screen h-full">
      <h1 className='text-5xl font-sans text-center py-4 '>WildWikia</h1>
      <nav className='text-center static mb-5 bg-slate-800'>
        <Link className='mx-5 text-xl text-white' to="/extra">EXTRA</Link>
        <Link className='mx-5 text-xl text-white' to="/minions">MINIONS</Link>
        <Link className='mx-5 text-xl text-white' to="/about">About</Link>
      </nav>
        <Routes>
            <Route path='/extra' element={<EXTRA/>} />
            <Route path='/minions' element={<MINIONS/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    <p className='fixed bottom-0 left-1/2 text-yellow-200'>WIP</p>
    </div>
  );
}
//add home where button are bigger and something art maybe idk...
export default App;
