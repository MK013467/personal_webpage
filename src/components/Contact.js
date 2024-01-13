import React from 'react';
import Linkedin from "./Linkedin.png";
import gmail from './gmail.svg'
import github from './github.png'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (    <section id="contact" className="p-4 text-center">
  <h2 className="text-2xl font-bold mb-4">Contact</h2>
  <div className="flex justify-center space-x-6">
    {/* LinkedIn Link */}
    <a href="https://www.linkedin.com/in/minsok-kwon-178b38182/" target="_blank" rel="noopener noreferrer">
      <img src={Linkedin} alt="LinkedIn" className="h-10" />
    </a>

    {/* Gmail Link */}
    <a href="mailto:minsk603@gmail.com">
      <img src={gmail} alt="Gmail" className="h-10" />
    </a>
    <a href="https://github.com/MK013467" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="github" className="h-10" />
    </a>
  </div>
</section>
  );
}

export default Contact;