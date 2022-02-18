import React from 'react';
import Login from './components/Login';
import Logo from './components/Logo';
import './styles/App.css';
import LeftSide from './components/LeftSide';
import ImageMimoo from './components/ImageMimoo';


const App = () => (
  <section className='container'>
  <div className='left-half'>
    <article>
      <LeftSide />
      <ImageMimoo />
    </article>
  </div>
  <div className='right-half'>
    <Logo />
    <Login />
  </div>
</section>

);

export default App;
