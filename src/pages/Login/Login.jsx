import React, { useState } from 'react'
import { Navbar, PasswordInput } from '../../components';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError('Please, enter a valid email');
      return;
    }

    if(password.length < 6) {
      setError('Please, enter a valid password');
      return;
    }


    setError(null);

    console.log({
      email,
      password
    })
  }

  return (
    <>
        <Navbar />

        <div className="flex justify-center items-center h-screen">
            <div className="w-96 border rounded bg-white px-7 py-10">
                <form onSubmit={handleLogin}>
                  <h1 className="text-2xl font-medium mb-7">Login</h1>

                  <div className="mb-4">
                      <input 
                        type="text"
                        placeholder='Email'
                        className='input-box' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        />
                  </div>


                  <PasswordInput 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {error && <p className="text-red-500 text-sm pb-1">{error}</p>}
                  <button type="submit" className="btn-primary">Login</button>

                  <p className="text-sm text-center mt-4">
                    Create an account? {' '}
                    <Link to="/signup" className="text-blue-500">Sign up</Link>
                  </p>
                </form>
            </div>
        </div>
    </>
  )
}
