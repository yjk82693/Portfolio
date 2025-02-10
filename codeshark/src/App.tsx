import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import Register from './pages/Register'; // Import Register component
import Settings from './pages/Settings';
import About from './pages/About';
import Contact from './pages/Contact';
import StudyC from './pages/StudyC';
import StudyCPlusPlus from './pages/StudyC++';
import StudyJava from './pages/StudyJava';
import StudyPython from './pages/StudyPython';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        {/* Navbar */}
        <Navbar />
        <Content>
          <Routes>
            {/* Use 'element' instead of 'component' */}
            <Route path="/" element={<Home />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/register" element={<Register />} /> {/* Add Register route */}
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Study Pages */}
            <Route path="/study-c" element={<StudyC />} />
            <Route path="/study-cplusplus" element={<StudyCPlusPlus />} />
            <Route path="/study-java" element={<StudyJava />} />
            <Route path="/study-python" element={<StudyPython />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
