'use client'

import { useState } from 'react'
import { Menu, X, Download, Github, Linkedin, Mail, Phone, Award, University, School, BrainCircuit, CircuitBoard, Brain, Code, GitFork, Server, Cpu, Layers, Monitor, Briefcase, Heart, Microchip } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';

export function PortfolioComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">SS</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#awards" className="hover:text-blue-600 transition-colors">Awards</a>
            <a href="#volunteer" className="hover:text-blue-600 transition-colors">Volunteer</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#home" className="block py-2 px-4 hover:bg-gray-200">Home</a>
            <a href="#about" className="block py-2 px-4 hover:bg-gray-200">About</a>
            <a href="#education" className="block py-2 px-4 hover:bg-gray-200">Education</a>
            <a href="#experience" className="block py-2 px-4 hover:bg-gray-200">Experience</a>
            <a href="#projects" className="block py-2 px-4 hover:bg-gray-200">Projects</a>
            <a href="#skills" className="block py-2 px-4 hover:bg-gray-200">Skills</a>
            <a href="#awards" className="block py-2 px-4 hover:bg-gray-200">Awards</a>
            <a href="#volunteer" className="block py-2 px-4 hover:bg-gray-200">Volunteer</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-gray-200">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)'}}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shubham Singh</h1>
          <p className="text-xl md:text-2xl mb-4">Electronics Engineer | AI Enthusiast | Innovator</p>
          <p className="text-lg mb-4 flex justify-center items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>+91 9733203984</span>
            <Mail className="h-5 w-5 ml-4" />
            <span>tech.s4shubham@gmail.com</span>
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/Shubham722-227" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/shubham-singh-0598461aa/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
          <a href="/cv.pdf" download>
            <Button variant="secondary" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/shubham.jpg" alt="Shubham Singh" className="rounded-full w-full h-full object-cover" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-75"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                I&apos;m a passionate Electronics and Communication Engineering graduate with a keen interest in AI and innovation. My journey in technology has led me to explore various aspects of electronics, signal processing, and artificial intelligence.
              </p>
              <p className="text-lg mb-4">
                With a strong foundation in both hardware and software, I strive to bridge the gap between theoretical concepts and practical applications. My goal is to contribute to cutting-edge technologies that can make a positive impact on society.
              </p>
              <Button variant="outline">Read More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <University className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">B.Tech in Electronics and Communication Engineering</h3>
                  <p className="text-gray-600">Central University of Rajasthan, Ajmer, Rajasthan</p>
                </div>
              </div>
              <p className="text-gray-600 mb-2">Nov 2021 - Present</p>
              <p className="font-semibold">CGPA: 8.5</p>
            </CardContent>
          </Card>
          <Card className="max-w-2xl mx-auto mt-4">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <School className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Senior Secondary Education, CBSE</h3>
                  <p className="text-gray-600">DAV Public School Midnapore, West Bengal</p>
                </div>
              </div>
              <p className="text-gray-600 mb-2">April 2019 - March 2020</p>
              <p className="font-semibold">Percentage: 92%</p>
            </CardContent>
          </Card>
          <Card className="max-w-2xl mx-auto mt-4">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <School className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">High School Education, CBSE</h3>
                  <p className="text-gray-600">DAV Public School Midnapore, West Bengal</p>
                </div>
              </div>
              <p className="text-gray-600 mb-2">April 2017 - March 2018</p>
              <p className="font-semibold">Percentage: 95.2%</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-8 w-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Signal Processing and AI Intern</h3>
                    <p className="text-gray-600 mb-4">PARAS ANTI-DRONE TECHNOLOGIES PVT. LTD. | Jun 2024 – Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  <li>Developed and implemented advanced signal processing algorithms for non-cooperative aerial detection, tracking drones, UAVs and aircraft.</li>
                  <li>Enhanced detection accuracy and tracking efficiency by 25%, safeguarding critical infrastructure from aerial threats.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-8 w-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Research Intern</h3>
                    <p className="text-gray-600 mb-4">PCCOE Pune | Aug 2022 – Oct 2022</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  <li>Engineered a low-cost Cervical Cancer Detection device utilizing CNN to capture and classify cervical wall images, achieving a 91.8% accuracy rate.</li>
                  <li>This innovation reduced diagnostic costs by 40%, making early detection more accessible.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BrainCircuit className="h-8 w-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Deep Learning-Based Product Detection</h3>
                    <p className="text-gray-600 mb-2">Flipkart Grid | Sept – Oct 2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  <li>Developed and demonstrated a deep learning-based product detection system, identifying over 100 unique brands, product counts, and manufacturing and expiry details with 95% OCR accuracy.</li>
                  <li>Integrated freshness detection for fruits and vegetables using ResNet, improving classification accuracy by 20% and reducing spoilage detection time by 30%.</li>
                  <li>Successfully demonstrated the system to the department, showcasing a 40% improvement in product tracking and quality management processes.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CircuitBoard className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">8051 Custom Development Board</h3>
                </div>
                <p className="text-gray-600 mb-2">Embedded Systems, KiCAD, Microcontrollers, C | Nov 2023</p>
                <p>Innovated a budget-friendly 8051 microcontroller development board featuring USB programming capabilities. Leveraged KiCAD and custom C bootloader to cut production costs by 50%, benefiting 60+ students and hobbyists.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Digit Classifier</h3>
                </div>
                <p className="text-gray-600 mb-2">Python, Jupyter Notebook | Oct 2023</p>
                <p>Devised and trained a Naive Bayes classifier to accurately recognize handwritten digits, achieving an 88% accuracy rate with the UCI Optical Recognition of Handwritten Digits dataset.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Monitor className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">PCB Prototyping Machine</h3>
                </div>
                <p className="text-gray-600 mb-2">Arduino Uno, Arduino IDE, FreeCAD, Fusion360, CURA, Python, PHP | Aug 2023</p>
                <p>Designed and optimized a 3D-printed PCB Prototyping Machine using Arduino Uno and FreeCAD, reducing manufacturing costs by 99% compared to market standards.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Edge Detection</h3>
                </div>
                <p className="text-gray-600 mb-2">MATLAB | Feb 2023</p>
                <p>Extrapolated advanced image edge detection techniques in MATLAB, converting images to Grayscale and HSI formats using the Prewitt algorithm, which improved image analysis accuracy by 35% for applications in medical imaging and quality control.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Programming Languages</h3>
                </div>
                <p>C, Assembly, C++, Python, Bash, Go, HTML, CSS, SQL, PHP, MIPS, MATLAB/Octave</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GitFork className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Frameworks/Libraries</h3>
                </div>
                <p>PyTorch, TensorFlow, Selenium, OpenCV, Numpy, Pandas, Matplotlib, Flask, Django</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Server className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Platforms</h3>
                </div>
                <p>Linux, Google Cloud Platform, GitHub, Heroku</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CircuitBoard className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">PCB Design Tools</h3>
                </div>
                <p>KiCAD, ExpressPCB</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Monitor className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Antenna and Simulation Tools</h3>
                </div>
                <p>CST, TCAD</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Microchip className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Circuit Design Tools</h3>
                </div>
                <p>Multisim, Pspice, Keil, Proteus, Microcap12</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Layers className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">3D Modelling Tools</h3>
                </div>
                <p>AutoCAD, CURA (3D Slicing), FreeCAD (3D Modeling)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Embedded Systems</h3>
                </div>
                <p>8051 Microcontroller, STM32 series, Raspberry Pi 3, ESP32, ESP8266, ESP Cameras, Arduino Uno</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Honors and Awards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">AWS Deepracer Student Championship</h3>
                </div>
                <p>Placed 7th globally out of 10,000+ participants.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Network Security Specialist Certification</h3>
                </div>
                <p>Certified Network Security Specialist from ICSI, UK.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">AI Programming Nanodegree</h3>
                </div>
                <p>Earned a Nanodegree in AI Programming with Python from Udacity.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Startup Pitching Competitions</h3>
                </div>
                <p>Won two startup pitching competitions organized by IIC, CURAJ.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Experience Section */}
      <section id="volunteer" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Volunteer Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">National Startup and Innovation 2.0 Event</h3>
                </div>
                <p>Coordinated logistics and supported 100+ participants at CURAJ.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Google Developers Group Cloud Community Days</h3>
                </div>
                <p>Collaborated in organizing the event, engaging with more than 300 attendees in Jaipur.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">MATLAB Faculty Development Program</h3>
                </div>
                <p>Managed and delivered a program at CURAJ, engaging over 450 participants from 62 institutions nationwide.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-xl font-bold">Image Processing Workshop</h3>
                </div>
                <p>Instructed 250+ attendees in image processing techniques during MATLAB FDP, enhancing practical skills in the field.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <p className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                +91 9733203984
              </p>
              <p className="flex items-center justify-center mt-2">
                <Mail className="h-5 w-5 mr-2" />
                tech.s4shubham@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Shubham Singh. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Shubham722-227" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/shubham-singh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <nav className="mt-4 flex justify-center space-x-4">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#awards" className="hover:text-blue-400 transition-colors">Awards</a>
            <a href="#volunteer" className="hover:text-blue-400 transition-colors">Volunteer</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
