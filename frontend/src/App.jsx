import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='h-[100vh] w-full bg-theme-primary text-gray-300'>
      <Header />
      <Footer />
    </div>
  )
}

export default App;
