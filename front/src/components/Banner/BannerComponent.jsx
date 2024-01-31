import React from 'react';
import './BannerComponent.css'

function BannerComponent({ imageSrc }) {
  return (
    <>
      <section className="sectionSlogan">
        <img src={imageSrc}></img>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </section>
    </>
  )
}

export default BannerComponent
