import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Class from './Class';
import Login from './Login';
import Main from './Main';
import Project from './Project';
import Congrats from './Congrats'
import Tag from './Tag'
import Layout from './layouts/layout';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/project/:projectId" element={<Project />}></Route>
            <Route path="/congrats" element={<Congrats />}></Route>
            <Route path="/tag/:tagId" element={<Tag />}></Route>
            <Route path="/class/:classId" element={<Class />}></Route>
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
