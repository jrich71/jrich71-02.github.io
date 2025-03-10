import React from 'react';
import { Brain, Microscope, Mail, Github, Linkedin, FileText, GraduationCap, Award, HeartPulse } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Medical AI Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Digital Health Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Specializing in User-Centered Assessment of Digital Health Solutions in Real-World Settings
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Me
            </a>
            <a href="#projects" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition border border-blue-600">
              View Projects
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="AI in Healthcare"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Passionate About Healthcare Innovation</h3>
              <p className="text-gray-600 mb-6">
                With a strong foundation in both healthcare and artificial intelligence, I'm dedicated to developing AI solutions that enhance patient care and medical research. My expertise spans machine learning, medical imaging analysis, and clinical decision support systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Brain className="text-blue-600 w-5 h-5" />
                  <span>Machine Learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HeartPulse className="text-blue-600 w-5 h-5" />
                  <span>Healthcare Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Microscope className="text-blue-600 w-5 h-5" />
                  <span>Medical Research</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="text-blue-600 w-5 h-5" />
                  <span>Continuous Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Patient-Provider Decision-Making",
                description: "AI-driven solutions to enhance collaborative decision-making between healthcare providers and patients.",
                icon: <Brain className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Healthcare Knowledge Management",
                description: "Systems for organizing and leveraging healthcare data and insights effectively.",
                icon: <HeartPulse className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Research Expertise",
                description: "Leading studies in digital health implementation and user experience assessment.",
                icon: <FileText className="w-8 h-8 text-blue-600" />
              }
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            I'm currently open to new opportunities in Health AI and would love to discuss how I can contribute to your team.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href="https://github.com/yourusername" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;