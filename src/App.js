
import { Routes, Route } from 'react-router-dom'
import { AddingCustomer } from './components/addingCustomer/AddingCustomer';
import GetAllCustomers from './components/getAllCustomers/GetAllCustomers';
import { LoggingIn } from './components/user/loggingIn/LoggingIn';
import { Registering } from './components/user/registering/Registering';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoggingIn />} />
        <Route path='/addingCustomer' element={<AddingCustomer />} />
        <Route path='/registering' element={<Registering />} />
        <Route path='/allCustomers' element={<GetAllCustomers />} />
      </Routes>

    </div>
  );
}

export default App;
