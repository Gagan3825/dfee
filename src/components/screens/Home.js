import React, { useEffect, useState } from 'react';
import logo from './front_img.jpg'
import './Home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";



function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = logo;
  }, []);

  return (
    
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
   {imageLoaded && (
        <>
          <img
            src={logo}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              opacity: 1,
              transition: 'opacity 1s ease-in-out',
            }}
          />
          <button
            className='buttonconatiner'
            onClick={() => navigate("/bookstore")}
          >  <i className='fa fa-book' style={{marginRight: '10px', height: '10px'  }}></i>
            Bookstore
          </button>
           
          <button className="buttonconatiner2" onClick={() => navigate("/profile")}>
            <i className="fa fa-user" style={{ marginRight: '10px', height: '10px' }}></i>
            Profile
          </button>
            
          
        </>
      )}
  </div>
  )
}

export default Home