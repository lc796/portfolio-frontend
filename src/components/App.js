// Import router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import components
import Navbar from './Navbar';
import Home from './Home';
import Project from './project/Project'
import Footer from './Footer';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<Project />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
