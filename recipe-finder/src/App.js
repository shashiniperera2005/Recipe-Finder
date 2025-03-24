import React, { useEffect, useState } from 'react';
import './App.css'; 
import Header from './components/Header'; 
import SearchBar from './components/SearchBar'; 
import Footer from './components/Footer'; 
import background from './images/background.jpg'; 

// TypingEffect Component
const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let isMounted = true;  // To track if component is mounted
    //let timer;

    const handleTyping = async () => {
      for (let i = 0; i < text.length; i++) {
        if (isMounted) {
          setDisplayedText((prev) => prev + text[i]);
          await new Promise(res => setTimeout(res, speed));
        }
      }
    };

    handleTyping();

    return () => {
      isMounted = false;  // Clean up to prevent updating state after unmount
    };
  }, [text, speed]);

  return <h1>{displayedText}</h1>;
};

const App = () => {
  return (
    <div className="container" style={{ backgroundImage: `url(${background})` }}>
      <Header /> 
      <div className='content'>
        <TypingEffect text="Recipe Finder" speed={100} />
        <SearchBar /> 
      </div>
      <Footer /> 
    </div>
  );
};

export default App;