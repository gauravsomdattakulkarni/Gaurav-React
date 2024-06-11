import React from 'react';

function Contact() {
  return (
    <div className="card mx-auto mt-5 shadow" style={{ width: "50%" }}>
      <div className="card-body">
        <h5 className="card-title text-center mb-4">Contact Us</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0"><strong>Email:</strong> info@bharatbulletin.com</li>
          <li className="list-group-item border-0"><strong>Contact:</strong> +91-1234567890</li>
          <li className="list-group-item border-0"><strong>Support Team:</strong> support@bharatbulletin.com</li>
          <li className="list-group-item border-0"><strong>Technical Team:</strong> tech@bharatbulletin.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
