import React, { useRef, useState } from 'react'
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Header = () => {

    //state vars for form pop up and showing a sign up or sign in form
    const [showingSignUpForm, setShowingSignUpForm] = useState(false);

    //ref for form
    const formModalRef = useRef(null);
    const handleFormModalPopUp = () => {

      formModalRef.current.classList.remove('hidden');
      formModalRef.current.classList.add('flex');
      
    }

    const handleFormModalClick = () => {
      formModalRef.current.classList.remove('flex');
      formModalRef.current.classList.add('hidden');
    }

  return (
    <div className='h-[10vh] w-full text-2xl flex justify-between items-center px-8'>
        <h1>Illuminate</h1>
        <div className='h-full text-xl w-[20%] flex justify-around items-center'>
            <button onClick={() => {setShowingSignUpForm(true); console.log('sign up click'); handleFormModalPopUp();}} className='bg-orange-800 px-4 h-[50%] text-white rounded hover:bg-orange-500 active:w-[45%] transition-all duration-200'>Sign Up</button>
            <button onClick={() => {setShowingSignUpForm(false); console.log('sign in click'); handleFormModalPopUp(); }} className='px-4 h-[50%] border-2 border-orange-800 text-white rounded hover:bg-orange-600'>Log In</button>
        </div>

        <div onClick={handleFormModalClick} ref={formModalRef} className='hidden h-[100vh] w-full bg-[rgba(0,0,0,0.6)] fixed top-0 left-0 justify-center items-center'>
            {showingSignUpForm ? (
              <SignUpForm setShowingSignUpForm={setShowingSignUpForm} />
            ): (
              <SignInForm setShowingSignUpForm={setShowingSignUpForm} />
            )}
        </div>

    </div>
  )
}

export default Header;
