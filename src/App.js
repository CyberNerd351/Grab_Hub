import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';
import MakePayments from './components/MakePayments';
import Marquee from './components/marquee';
import AboutUs from './components/AboutUs';
import Exit from './components/Exit';
import TermsAndConditions from './components/TermsandConditions';
import FAQs from './components/FAQs';
import ContactSupport from './components/ContactSupport';
import ChatAssistant from './components/ChatAssistant';



function App() {
  return (
    <div className="App bg-dark">
      <Router>
      <header className="App-header">

          <h1 className='mt-3'>GRAB HUB — Quick Orders. Tasty Rewards.</h1>

      </header> 

      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<GetProducts/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/makepayments' element={<MakePayments/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/exit' element={<Exit/>}/>
        <Route path='/terms' element={<TermsAndConditions/>}/>
        <Route path="/faq" element={<FAQs/>} />
        <Route path="/support" element={<ContactSupport/>} />
        <Route path="/assistant" element={<ChatAssistant/>} />
        

      </Routes>

      </Router>

      <Marquee/>

    </div>
  );
}

export default App;


