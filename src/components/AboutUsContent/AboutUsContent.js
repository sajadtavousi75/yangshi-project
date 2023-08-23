import React from 'react'

import './AboutUsContent.css'

export default function AboutUsContent() {
  return (
    <div className='aboutus'>
      <div className="container">
        <div className="about-content">
            <div className="about-information">
            <div className="about-des">
                <h1 className="about-title">About Us</h1>
                <p className="about-text">Welcome to "Yangshi" – an immersive art experience that transcends boundaries and awakens the senses. Our exhibition brings together the visionary creations of five remarkable artists, each a maestro of their craft. Step into a world where art becomes a conduit for emotions, stories, and revelations.</p>
            </div>
            <div className="about-des">
                <h1 className="about-title">Exhibition Overview</h1>
                <p className="about-text">"Yangshi" is a celebration of artistic diversity, showcasing a curated collection of paintings, sculptures, and digital marvels. With a focus on merging tradition with innovation, this exhibition invites you to explore the depths of human expression through captivating visuals and thought-provoking concepts.</p>
            </div>
            <div className="about-des">
                <h1 className="about-title">Inspiration and Story</h1>
                <p className="about-text">"Yangshi" draws inspiration from the interplay between light and shadow, reality and imagination. The exhibition was born from a shared vision to create a platform where art becomes a bridge between different worlds – a canvas where emotions are painted with vibrant hues and intricate strokes.</p>
            </div>
            <div className="about-des">
                <h1 className="about-title">Goals and Mission</h1>
                <p className="about-text">Our mission is simple yet profound: to immerse you in a world of creativity, to challenge perceptions, and to leave an indelible mark on your heart and mind. We aspire to nurture a community that embraces art's ability to inspire, heal, and transform.</p>
            </div>
            <div className="about-des">
                <h1 className="about-title">Call to Action</h1>
                <p className="about-text">Embark on a voyage through the pages of our website to discover more about the artists, their captivating artworks, and the immersive experiences that await you at "Yangshi." Book your tickets today and prepare to be enchanted.</p>
            </div>
            </div>
            <img className='about-img' src="/images/vector.png" alt="" />
        </div>
      </div>
    </div>
  )
}
