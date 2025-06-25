
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EmployeeReview = () => {
  const [hoveredReview, setHoveredReview] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const employees = [
    {
      name: "Sarah Johnson",
      position: "Marketing Manager",
      rating: 5,
      review: "Working at ChillFizz has been an incredible journey! The company culture is amazing, and I love being part of a team that's passionate about creating refreshing experiences.",
      avatar: "👩‍💼",
      department: "Marketing",
      yearsWorked: 3,
      highlight: "Great work-life balance"
    },
    {
      name: "Michael Chen",
      position: "Product Developer",
      rating: 5,
      review: "The innovation opportunities here are endless. I get to experiment with new flavors and contribute to products that millions of people enjoy worldwide.",
      avatar: "👨‍🔬",
      department: "R&D",
      yearsWorked: 2,
      highlight: "Innovation-focused environment"
    },
    {
      name: "Emily Rodriguez",
      position: "Sales Director",
      rating: 4,
      review: "ChillFizz invests in its people. The training programs are top-notch, and there's always room for growth. Plus, the team events are always a blast!",
      avatar: "👩‍💻",
      department: "Sales",
      yearsWorked: 4,
      highlight: "Excellent career growth"
    },
    {
      name: "David Thompson",
      position: "Quality Assurance Lead",
      rating: 5,
      review: "I'm proud to ensure every bottle meets our high standards. The company really cares about quality and customer satisfaction, which makes my job meaningful.",
      avatar: "👨‍🔧",
      department: "Quality",
      yearsWorked: 5,
      highlight: "Purpose-driven work"
    },
    {
      name: "Lisa Park",
      position: "HR Specialist",
      rating: 5,
      review: "ChillFizz truly values diversity and inclusion. We have flexible work arrangements, great benefits, and a supportive management team that listens to employees.",
      avatar: "👩‍🎓",
      department: "Human Resources",
      yearsWorked: 2,
      highlight: "Inclusive workplace"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index}
        style={{
          color: index < rating ? '#FFD700' : '#E0E0E0',
          fontSize: '1.2rem',
          textShadow: index < rating ? '0 0 10px rgba(255, 215, 0, 0.5)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        ★
      </span>
    ));
  };

  const averageRating = (employees.reduce((sum, emp) => sum + emp.rating, 0) / employees.length).toFixed(1);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header} data-aos="fade-down">
          <h1 style={styles.title}>Employee Reviews</h1>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            Hear from our amazing team members who make ChillFizz possible
          </p>
          <div style={styles.overallRating} data-aos="zoom-in" data-aos-delay="200">
            <div style={styles.ratingValue}>{averageRating}</div>
            <div style={styles.ratingStars}>
              {renderStars(Math.round(averageRating))}
            </div>
            <div style={styles.ratingText}>Average Employee Rating</div>
          </div>
        </div>

        <div style={styles.reviewsGrid}>
          {employees.map((employee, index) => (
            <div
              key={index}
              style={{
                ...styles.reviewCard,
                transform: hoveredReview === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredReview === index 
                  ? '0 20px 40px rgba(0, 123, 255, 0.3)' 
                  : '0 10px 30px rgba(0,0,0,0.1)'
              }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onMouseEnter={() => setHoveredReview(index)}
              onMouseLeave={() => setHoveredReview(null)}
            >
              <div style={styles.reviewHeader}>
                <div style={styles.employeeInfo}>
                  <div style={styles.avatar}>{employee.avatar}</div>
                  <div style={styles.employeeDetails}>
                    <h3 style={styles.employeeName}>{employee.name}</h3>
                    <p style={styles.employeePosition}>{employee.position}</p>
                    <p style={styles.employeeDepartment}>{employee.department} • {employee.yearsWorked} years</p>
                  </div>
                </div>
                <div style={styles.ratingContainer}>
                  <div style={styles.stars}>
                    {renderStars(employee.rating)}
                  </div>
                  <div style={styles.ratingNumber}>{employee.rating}/5</div>
                </div>
              </div>

              <div style={styles.reviewContent}>
                <p style={styles.reviewText}>"{employee.review}"</p>
                <div style={styles.highlight}>
                  <span style={styles.highlightIcon}>✨</span>
                  <span style={styles.highlightText}>{employee.highlight}</span>
                </div>
              </div>

              <div style={styles.reviewFooter}>
                <div style={styles.verifiedBadge}>
                  <span style={styles.verifiedIcon}>✓</span>
                  Verified Employee
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.joinTeam} data-aos="fade-up" data-aos-delay="800">
          <h3 style={styles.joinTitle}>Want to Join Our Amazing Team?</h3>
          <p style={styles.joinSubtitle}>We're always looking for passionate individuals to join the ChillFizz family</p>
          <button 
            style={styles.joinButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 123, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 123, 255, 0.3)';
            }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    color: '#333',
    position: 'relative'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  title: {
    fontSize: '3rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  titleUnderline: {
    width: '100px',
    height: '4px',
    background: 'linear-gradient(90deg, #007BFF, #0056b3)',
    margin: '0 auto 2rem auto',
    borderRadius: '2px'
  },
  subtitle: {
    fontSize: '1.2rem',
    fontFamily: 'Open Sans, sans-serif',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
    lineHeight: '1.6'
  },
  overallRating: {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '20px',
    display: 'inline-block',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    border: '2px solid rgba(0, 123, 255, 0.1)'
  },
  ratingValue: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: '0.5rem'
  },
  ratingStars: {
    textAlign: 'center',
    marginBottom: '0.5rem'
  },
  ratingText: {
    fontSize: '0.9rem',
    color: '#666',
    textAlign: 'center',
    fontWeight: '600'
  },
  reviewsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  },
  reviewCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: '1px solid rgba(0, 123, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden'
  },
  reviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem'
  },
  employeeInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #007BFF, #0056b3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: 'white'
  },
  employeeDetails: {
    flex: 1
  },
  employeeName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#2c3e50',
    margin: '0 0 0.25rem 0'
  },
  employeePosition: {
    fontSize: '0.9rem',
    color: '#007BFF',
    fontWeight: '500',
    margin: '0 0 0.25rem 0'
  },
  employeeDepartment: {
    fontSize: '0.8rem',
    color: '#666',
    margin: 0
  },
  ratingContainer: {
    textAlign: 'right'
  },
  stars: {
    marginBottom: '0.25rem'
  },
  ratingNumber: {
    fontSize: '0.9rem',
    color: '#666',
    fontWeight: '600'
  },
  reviewContent: {
    marginBottom: '1.5rem'
  },
  reviewText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#444',
    fontStyle: 'italic',
    marginBottom: '1rem'
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 86, 179, 0.1))',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    border: '1px solid rgba(0, 123, 255, 0.2)'
  },
  highlightIcon: {
    fontSize: '1rem'
  },
  highlightText: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#007BFF'
  },
  reviewFooter: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  verifiedBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(40, 167, 69, 0.1)',
    color: '#28a745',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: '1px solid rgba(40, 167, 69, 0.2)'
  },
  verifiedIcon: {
    background: '#28a745',
    color: 'white',
    borderRadius: '50%',
    width: '16px',
    height: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.7rem'
  },
  joinTeam: {
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 86, 179, 0.1))',
    padding: '3rem',
    borderRadius: '25px',
    border: '2px solid rgba(0, 123, 255, 0.2)'
  },
  joinTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '1rem'
  },
  joinSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem',
    lineHeight: '1.6'
  },
  joinButton: {
    background: 'linear-gradient(135deg, #007BFF, #0056b3)',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 20px rgba(0, 123, 255, 0.3)'
  }
};

export default EmployeeReview;
