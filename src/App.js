import logo from './logo.svg';
import './App.css';
import Overview from './overview.js';
import Docu from './docu.js';
import Model from './model.js';
import Model2 from './model2.js';
import Updat from './update.js';
import Signup from './signup';
import Emailtest from './emailtest.js';
import Triagelogic from './triagelogic.js';
import Curlist from './curlist.js';
import Editlist from './editlist';
import Updatecur from './updatecur.js';
import Support from './support.js';
import Docu1 from './docu1.js';
import Triagelogicupdate from './triagelogicupdate.js';
import { BrowserRouter, Route , Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup />}/>
          <Route path="/overview" element={<Overview />}/>
          <Route path="/documentation" element={<Docu1 />}/>
          <Route path="/model" element={<Model />}/>
          <Route path="/model2" element={<Model2 />}/>
          <Route path="/emailtest" element={<Emailtest />}/>
          <Route path="/updateEntrymodel/:id" element={<Updat />}/>
          <Route path="/triagelogic" element={<Triagelogic />}/>
          <Route path="/currentlist" element={<Curlist />}/>
          <Route path="/editlist" element={<Editlist />}/>
          <Route path="/editlist12/:id" element={<Updatecur />}/>
          <Route path="/triagelogicupdate" element={<Triagelogicupdate />}/>
          <Route path="/support" element={<Support />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
