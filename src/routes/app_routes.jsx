import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, SignUp } from '../pages';

export const routes = (
    <Router>
      <Routes>
        <Route path="/dashboard" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
      </Routes>
    </Router>
  );