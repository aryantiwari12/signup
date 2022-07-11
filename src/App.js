// import logo from '../logo.svg';
import './App.css';
import EmailSignUp from './components/EmailSignUp';
import FinishingSignUp from './components/FinishingSignUp';
import ForgottenPassword from './components/ForgottenPassword';
import ResetyourPasaword from './components/ResetyourPasaword';
import Index from './components';
import SignInin from './components/SignInin';
import { BrowserRouter as Router, Routes, Route, path, Link } from 'react-router-dom'
import PhoneSingin from './components/PhoneSingin';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/signinin/emailsignup' element={<EmailSignUp />} />
          <Route path='/finishingsignup' element={<FinishingSignUp />} />
          <Route path='/signinin' element={<SignInin />} />
          <Route path='signinin/forgotpassword' element={<ForgottenPassword />} />
          <Route path='/phonesignin' element={<PhoneSingin />} />
          {/* <Route path='/facebook' element={<Facebook />} /> */}
          <Route path='/signinin/forgotpassword/resetpassword' element={<ResetyourPasaword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
