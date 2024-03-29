import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import EXTRA from './navsite/extras';
import About from './navsite/about';
import MINIONS from './navsite/minions';
import Home from './navsite/home';
import Notfound from './navsite/notfound';
import Miracles from './navsite/miracles';
import Character from './navsite/character';
//ctrl+space force intelliSense to pop up.
//Yksi sivu voisi olla encounter jonne voi lisätä unitteja ja hahmoja propsin avulla. SIellä voi vähentää hitlocationia ja willpower
//Myös encounter tracker olisi kova
//Meidän pitää luoda tapa et tämä toimii puhelimella. Kortit mene päin vittua nopeasti. MOBILE FOCUS! ITS 2022 and you are typing for desktop?! LUL
//Ulkonäköä paremmaksi
function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-violet-500 pb-10 min-h-screen h-full">
      <div className='text-5xl font-extrabold  text-center py-4'><span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
      WildWikia
      </span></div>
      <nav className='text-center mb-5 py-2 bg-slate-800 sticky top-0 border-b-2 border-slate-400'>
        <Link className='mx-5 text-xl text-white' to="/">HOME</Link>
        <Link className='mx-5 text-xl text-white' to="/extra">EXTRA</Link>
        <Link className='mx-5 text-xl text-white' to="/minions">MINIONS</Link>
        <Link className='mx-5 text-xl text-white' to="/miracles">MIRACLES</Link>
        <Link className='mx-5 text-xl text-white' to="/character">CHARACTER</Link>
        <Link className='mx-5 text-xl text-white' to="/about">About</Link>
      </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/extra' element={<EXTRA/>} />
            <Route path='/minions' element={<MINIONS/>} />
            <Route path='/miracles' element={<Miracles/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/character' element={<Character/>} />
            <Route path='*' element={<Notfound/>} />
        </Routes>
    <p className='fixed bottom-0 left-1/2 text-yellow-200'>WIP</p>
    </div>
  );
}
//add home where button are bigger and something art maybe idk...
export default App;
