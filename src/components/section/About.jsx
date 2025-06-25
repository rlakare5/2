
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [hoveredStat, setHoveredStat] = React.useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textContent} data-aos="fade-right">
          <h2 style={styles.heading}>About ChillFizz</h2>
          <div style={styles.decorativeLine} data-aos="slide-right" data-aos-delay="200"></div>
          <p style={styles.description} data-aos="fade-up" data-aos-delay="300">
            ChillFizz is not just a cold drink — it's a sensation. Made with real fruit extracts, zero artificial nonsense, and a fizz that brings instant refreshment. We're on a mission to add sparkle to every sip.
          </p>
          <p style={styles.highlight} data-aos="bounce-in" data-aos-delay="500">
            🌟 Available in over 20 countries and loved by millions! 🌟
          </p>
          <div style={styles.stats} data-aos="fade-up" data-aos-delay="600">
            <div 
              style={{
                ...styles.statItem,
                ...(hoveredStat === 0 ? styles.statItemHover : {})
              }}
              onMouseEnter={() => setHoveredStat(0)}
              onMouseLeave={() => setHoveredStat(null)}
              onClick={() => alert('100% Natural ingredients - no artificial additives!')}
            >
              <span style={styles.statNumber}>100%</span>
              <span style={styles.statLabel}>Natural</span>
            </div>
            <div 
              style={{
                ...styles.statItem,
                ...(hoveredStat === 1 ? styles.statItemHover : {})
              }}
              onMouseEnter={() => setHoveredStat(1)}
              onMouseLeave={() => setHoveredStat(null)}
              onClick={() => alert('Over 50 million happy customers worldwide!')}
            >
              <span style={styles.statNumber}>50M+</span>
              <span style={styles.statLabel}>Customers</span>
            </div>
            <div 
              style={{
                ...styles.statItem,
                ...(hoveredStat === 2 ? styles.statItemHover : {})
              }}
              onMouseEnter={() => setHoveredStat(2)}
              onMouseLeave={() => setHoveredStat(null)}
              onClick={() => alert('Available in 25+ countries and growing!')}
            >
              <span style={styles.statNumber}>25+</span>
              <span style={styles.statLabel}>Countries</span>
            </div>
          </div>
        </div>
        <div style={styles.imageWrapper} data-aos="fade-left" data-aos-delay="400">
          <div style={styles.imageContainer}>
            <img
              src="/attached_assets/1_1750068064776.png"
              alt="ChillFizz bottle"
              style={styles.image}
            />
            <div style={styles.floatingElement1} data-aos="float" data-aos-delay="800">✨</div>
            <div style={styles.floatingElement2} data-aos="float" data-aos-delay="1000">🥤</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
   // background: 'linear-gradient(135deg, #ffe0b3 0%, #ffc080 100%)',
  // background: 'linear-gradient(135deg, #fff3b0 0%, #ffcf80 50%, #ffb347 100%)',
  background: 'linear-gradient(135deg, #fcae60 0%, #f88f38 100%)',
  //background: 'linear-gradient(135deg, #d3d3d3 0%, #a9a9a9 100%)',


    //background: 'linear-gradient(145deg, #1e1e1e, #292929, #141414)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    scrollSnapAlign: 'start',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    width: '100%',
    gap: '3rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    flex: '1 1 500px',
    position: 'relative',
  },
  heading: {
    fontSize: '3rem',
    fontFamily: 'Kumbh Sans, sans-serif',
    marginBottom: '1rem',
    color: '#2c3e50',
    background: 'linear-gradient(45deg, #3498db, #2980b9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  decorativeLine: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #3498db, #00bcd4)',
    marginBottom: '2rem',
    borderRadius: '2px',
  },
  description: {
    fontSize: '1.2rem',
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: '1.8',
    color: '#34495e',
    marginBottom: '2rem',
  },
  highlight: {
    marginTop: '1rem',
    fontWeight: '700',
    fontSize: '1.3rem',
    color: '#e74c3c',
    textAlign: 'center',
    padding: '1rem',
    background: 'rgba(231, 76, 60, 0.1)',
    borderRadius: '15px',
    border: '2px solid rgba(231, 76, 60, 0.2)',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
    gap: '1rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    minWidth: '100px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  statItemHover: {
    transform: 'translateY(-5px) scale(1.05)',
    background: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  imageWrapper: {
    flex: '1 1 400px',
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  image: {
    width: '100%',
    maxWidth: '220px',
    borderRadius: '2rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    transform: 'perspective(1000px) rotateY(-10deg)',
    transition: 'transform 0.3s ease',
  },
  floatingElement1: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '2rem',
    animation: 'float 3s ease-in-out infinite',
  },
  floatingElement2: {
    position: 'absolute',
    bottom: '30px',
    left: '20px',
    fontSize: '2rem',
    animation: 'float 3s ease-in-out infinite 1.5s',
  },
};

export default About;
