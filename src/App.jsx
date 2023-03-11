import { Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Community from './components/Community'
import Layout from './Layout';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='community' element={<Community/>}/>
      </Route>
      <Route path='store' element={ <Store/>} />
    </Routes>
  )
}

export default App
