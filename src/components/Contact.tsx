import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-grey-850" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading reveal accent-underline">Contact</h2>
        <p className="section-subheading reveal">Let&apos;s work together on something great</p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info */}
          <div className="md:col-span-2 space-y-6 reveal">
            <p className="text-grey-200 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-4 rounded-lg bg-grey-800/50 border border-grey-700/30 hover:border-accent/30 transition-all group"
              >
                <Mail size={20} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-grey-400">Email</p>
                  <p className="text-sm text-grey-100 group-hover:text-accent transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-grey-800/50 border border-grey-700/30">
                <MapPin size={20} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-grey-400">Location</p>
                  <p className="text-sm text-grey-100">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 reveal">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-grey-200 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-grey-800 border border-grey-700/50 rounded-lg text-grey-100 placeholder-grey-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-grey-200 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-grey-800 border border-grey-700/50 rounded-lg text-grey-100 placeholder-grey-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-grey-200 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-grey-800 border border-grey-700/50 rounded-lg text-grey-100 placeholder-grey-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-primary w-full justify-center disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
