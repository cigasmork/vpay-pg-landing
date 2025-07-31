import React, { useState } from 'react';
import { Section } from './Section';

interface ContactSectionProps {
  content: {
    title: string;
    subtitle: string;
    form: {
      email: string;
      subject: string;
      content: string;
      submit: string;
      loading: string;
      success: string;
      error: string;
    };
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !subject || !message) return;

    const body = `From: ${email}\n\n${message}`;

    const mailtoLink = `mailto:info@vpayv.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    
    // Reset form for better UX, in case the user stays on the page
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <Section id="contact" title={content.title} subtitle={content.subtitle}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">{content.form.email}</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">{content.form.subject}</label>
              <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300">{content.form.content}</label>
              <textarea id="content" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <button type="submit" className="w-full bg-yellow-600 text-black font-semibold py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                {content.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};