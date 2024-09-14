import React, { useRef, useState } from 'react'
import { Navbar, PasswordInput } from '../../components';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

export const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSignUp = (e) => {
    e.preventDefault();

    if(!name) {
      setError('Please, enter your name');
      nameRef.current.focus();
      return;
    }

    if(!validateEmail(email)) {
      setError('Please, enter a valid email');
      emailRef.current.focus();
      return;
    }

    if(password.length < 6) {
      setError('Password must have at least 6 characters');
      passwordRef.current.focus();
      return;
    }

    if(password !== confirmPassword) {
      setError('Passwords do not match');
      confirmPasswordRef.current.focus();
      return;
    }


    setError(null);

    console.log({
      name,
      email,
      password,
      confirmPassword
    })
  }

  return (
    <>
        <Navbar />

        <div className="flex justify-center items-center h-screen">
            <div className="w-96 border rounded bg-white px-7 py-10">
                <form onSubmit={handleSignUp}>
                  <h1 className="text-2xl font-medium mb-7">Sign Up</h1>

                  <div>
                      <input 
                        type="text"
                        placeholder='Full name'
                        className='input-box' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        id="name"
                        ref={nameRef}
                        />
                  </div>

                  <div>
                      <input 
                        type="text"
                        placeholder='Email'
                        className='input-box' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        ref={emailRef}
                        />
                  </div>


                  <PasswordInput 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    refInput={passwordRef}
                  />


                  <PasswordInput 
                    value={confirmPassword}
                    placeholder={'Confirm password'}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    refInput={confirmPasswordRef}
                  />

                  {error && <p className="text-red-500 text-sm pb-1">{error}</p>}
                  <button type="submit" className="btn-primary">Create Account</button>

                  <p className="text-sm text-center mt-4">
                    Have already an account? {' '}
                    <Link to="/login" className="text-blue-500">Login</Link>
                  </p>
                </form>
            </div>
        </div>
    </>
  )
}
