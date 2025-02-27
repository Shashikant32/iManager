import React from 'react';
import { Link } from 'react-router-dom';

const preventRefresh = (e) => {
	e.preventDefault();
};

function Home() {
    return (
        <div className="Home">
        {/* Header Section */}
        <header>
          <div className="logo">
            <span className="logo-text">iManager</span>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
  
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Transform Your Workflow with iManager</h1>
            <p>Stay organized, be productive, and manage tasks with ease.</p>
            <a href="#pricing" className="cta-button">Get Started</a>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="features" className="features">
          <h2>Features</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <img src="task-icon.svg" alt="Task Management" />
              <h3>Task Management</h3>
              <p>Organize tasks and workflows efficiently with ease.</p>
            </div>
            <div className="feature-card">
              <img src="time-icon.svg" alt="Time Tracking" />
              <h3>Time Tracking</h3>
              <p>Track your time spent on tasks and improve productivity.</p>
            </div>
            <div className="feature-card">
              <img src="collaboration-icon.svg" alt="Collaboration" />
              <h3>Collaboration</h3>
              <p>Collaborate in real-time with your team, no matter where they are.</p>
            </div>
          </div>
        </section>
  
        {/* Pricing Section */}
        <section id="pricing" className="pricing">
          <h2>Choose Your Plan</h2>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic</h3>
              <p>₹999.99/month</p>
              <ul>
                <li>1 User</li>
                <li>Basic Features</li>
              </ul>
              <a href="/Signup" className="cta-button">Subscribe</a>
            </div>
            <div className="plan">
              <h3>Pro</h3>
              <p>₹1999.99/month</p>
              <ul>
                <li>5 Users</li>
                <li>Advanced Features</li>
              </ul>
              <a href="/Signup" className="cta-button">Subscribe</a>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <p>₹4999.99/month</p>
              <ul>
                <li>Unlimited Users</li>
                <li>Custom Solutions</li>
              </ul>
              <a href="#contact" className="cta-button">Subscribe</a>
            </div>
          </div>
        </section>
  
        {/* Footer Section */}
        <footer id="footer">
          <p>&copy; 2025 iManager. All rights reserved.</p>
          <nav>
            <ul>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
  export default Home;