import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import './Contact.css';

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'yekta3896@gmail.com',
    href: 'mailto:yekta3896@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.33 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.24 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 83036 86594',
    href: 'tel:+918303686594',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'ekta-yadav-1a8027256',
    href: 'https://www.linkedin.com/in/ekta-yadav-1a8027256',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Lucknow, Uttar Pradesh',
    href: null,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Compose mailto link
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailtoLink = `mailto:yekta3896@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="section-container">
        <SectionHeader
          tag="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind or an opportunity? I'd love to hear from you."
        />

        <div className="contact__layout">
          {/* Left: Info */}
          <div className="contact__info">
            <div className="contact__info-top">
              <h3 className="contact__info-title">Ready to build something great?</h3>
              <p className="contact__info-text">
                I'm currently open to new opportunities — whether it's a full-time role,
                freelance project, or just a technical conversation. My inbox is always open.
              </p>
            </div>

            <div className="contact__cards">
              {CONTACT_INFO.map((item, i) => (
                <div className="contact__card" key={i}>
                  <div className="contact__card-icon">{item.icon}</div>
                  <div className="contact__card-body">
                    <span className="contact__card-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__card-value" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__card-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="contact__availability">
              <span className="contact__avail-dot" />
              <div>
                <p className="contact__avail-title">Available for opportunities</p>
                <p className="contact__avail-sub">Open to full-time & freelance roles</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="contact__input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="contact__input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  className="contact__input"
                  placeholder="Job Opportunity / Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label">Message *</label>
                <textarea
                  name="message"
                  className="contact__textarea"
                  placeholder="Tell me about the opportunity or project..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`contact__submit ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </>
                )}
                {status === 'sending' && 'Opening mail client...'}
                {status === 'sent' && (
                  <>
                    Message Ready!
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </>
                )}
              </button>

              <p className="contact__form-note">
                This opens your default mail client. Alternatively, email me directly at{' '}
                <a href="mailto:yekta3896@gmail.com">yekta3896@gmail.com</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
