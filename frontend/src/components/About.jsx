import React from 'react';

function About() {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            margin: '0',
            padding: '2px',
            backgroundColor: '#f7f7f7',
            color: '#333'
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '50px auto',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}>
                <h1 style={{
                    color: '#444',
                    fontSize: '2em',
                    marginBottom: '20px'
                }}>
                    About Our Bookstore
                </h1>
                <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                    Welcome to our Bookstore, a unique platform designed to promote the joy of reading and learning by redistributing books to those who need them most. Our mission is simple: to collect donated books from individuals and connect them with <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>NGOs</span> and <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>orphanages</span>, ensuring that children and communities have access to a wide range of reading materials at no cost.
                </p>

                <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                    Our website serves as a bridge between generous donors and eager readers. Here's how it works:
                </p>
                <ul style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                    <li>Individuals who wish to donate their books can easily list them on our platform.</li>
                    <li>NGOs and orphanages looking for educational resources can browse through our collection and request books that meet their needs.</li>
                    <li>We handle the logistics of connecting donors and recipients, ensuring that the books reach the right hands.</li>
                </ul>

                <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                    By giving books a second life, we aim to foster a love for reading and provide educational opportunities to underprivileged children. Your participation in this initiative can make a real difference—whether you're donating books, volunteering, or simply spreading the word.
                </p>

                <p style={{ lineHeight: '1.6' }}>
                    Join us in our mission to spread knowledge, empower communities, and make the world a better place, one book at a time.
                </p>
            </div>
        </div>
    );
}

export default About;

