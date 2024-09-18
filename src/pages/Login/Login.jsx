import React, { useEffect, useState } from 'react'
import { Navbar, PasswordInput } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import HttpClient from '../../http-client/httpClient';
import { isThereValidToken } from '../../utils/tokenHandler';

export const Login = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if(isThereValidToken()) {
      navigate('/dashboard');
    }
  }, [navigate]);

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

    const httpClient = new HttpClient();
    
    httpClient.post('/api/auth/login', { username: email, password })
    .then((response) => {
      console.log('LOGIN response', response);
      const { token } = response;
      localStorage.setItem('token', token);
      navigate('/dashboard');
    }).catch((error) => {
      console.log('LOGIN error', error);
      setError('Invalid email or password');
    });
  }

  return (
    <>

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
