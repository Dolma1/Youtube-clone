import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import voice from '../../assets/VoiceSearch.png'
import upload_icon from '../../assets/upload.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.jpg'
import { Link } from 'react-router-dom'

const availableKeywords = [
  'HTML',
  'css',
  'Tutorials',
  'JavaScript',
  'Web app Tutorial',
  'How to create a website',
];

export default function Navbar() {
  const [input, setInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length) {
      const results = availableKeywords.filter((keyword) =>
        keyword.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setFilteredResults([]);
  };
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' src={menu_icon} alt="" />
            <Link to='/' ><img className='logo' src={logo} alt="" /></Link>
            <span className='country-code'>NP</span>
        </div>

        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
                <input 
                    type="text" 
                    placeholder='Search'  
                    value={input} 
                    onChange={handleInputChange} 
                />
                
                {filteredResults.length > 0 && (
                <div className="resultbox">
                    <ul>
                    {filteredResults.map((keyword, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(keyword)}>
                        {keyword}
                        </li>
                    ))}
                    </ul>
                </div>
                )}
                <img src={search_icon} alt="" />
            </div>
            <div className="voice-search">
                <img src={voice} alt="" />
            </div>
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt=""className='upload' />
            <img src={notification_icon} alt=""  className='notification'/>
            <img src={profile_icon} className='user-icon' alt="" />

        </div>
    </nav>
  )
}


