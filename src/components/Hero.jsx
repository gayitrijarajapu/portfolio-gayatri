import profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy panel">
          <h1>Gayatri Jarajapu</h1>
          <h2>Frontend Developer</h2>
          <p className="lead">
            I build clean, responsive, and user-friendly web applications using
            React and modern frontend technologies.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#projects">See Projects</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Gayatri Jarajapu" />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
