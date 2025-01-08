import React from 'react'
import Header from './components/Header';
import Intro from './components/Into'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='h-[100vh] w-full bg-theme-primary text-gray-300'>
      <Header />
      <Intro/>

      <Footer />
    </div>
  )
}

export default App;
