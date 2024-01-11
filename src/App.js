

import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ui from './Pages/Ui';
import Form from './Pages/Form';

import Initialpage from './Pages/Initialpage';
import Update from './Pages/Update';









function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Initialpage />} />

          

          <Route path="/form" element={<Form />} />
          <Route path="/update" element={<Update />} />


          <Route path="/users" element={<Ui />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
