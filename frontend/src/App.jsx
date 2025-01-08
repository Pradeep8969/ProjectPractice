import React from 'react'
import Header from './components/Header';
import Intro from './components/Into'

const App = () => {
  return (
    <div className='h-[100vh] w-full bg-theme-primary text-gray-300'>
      <Header />
      <Intro/>

    </div>
  )
}

export default App;
