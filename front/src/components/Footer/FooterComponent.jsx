import React, { useState } from 'react';
import './FooterComponent.css'

function FooterComponent() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <>
      <footer>
        <div className="footerContainer">
          <p>Copyright {currentYear} Argent Bank</p>
        </div>
      </footer>
    </>
  )
}

export default FooterComponent
