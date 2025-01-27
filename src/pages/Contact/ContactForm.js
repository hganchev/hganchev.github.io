import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        if (validateForm(name, email, subject, message)) {
            sendEmail(formData);
        }
    };

    const validateForm = (name, email, subject, message) => {
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return false;
        }
        // Additional validation can be added here
        return true;
    };

    const sendEmail = (data) => {
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert('There was an error sending your message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9'
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer'
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit} style={formStyle}>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                style={inputStyle}
            />
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                style={inputStyle}
            />
            <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                style={inputStyle}
            />
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                style={{ ...inputStyle, height: '100px' }}
            />
            <button type="submit" style={buttonStyle}>Send</button>
        </form>
    );
};

export default ContactForm;