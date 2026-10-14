import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  Globe,
  Clock,
  Briefcase
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Time Backend / Go Opportunity',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Akshay,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] relative border-t border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE4D6] border border-[#DFCFC0] text-[#8C3A18] font-mono text-xs mb-3 font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-[#C25E38]" />
            <span>INITIATE CONNECTION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24211D] tracking-tight">
            Let's Build Scalable Systems
          </h2>
          <p className="mt-2 text-[#686055] max-w-2xl text-sm sm:text-base">
            Open to full-time Backend Engineer roles, IoT cloud architecture, and distributed systems engineering. Available for remote work and worldwide relocation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7DFD3] hover:border-[#D5C9B8] shadow-sm transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#8C3A18] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C25E38]" />
                  <span>DIRECT EMAIL</span>
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] font-mono text-[#686055] hover:text-[#24211D] px-2 py-0.5 rounded bg-[#F5EDE1]"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-[#2E7D32]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-[#24211D] hover:text-[#C25E38] transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-[#7A7165] mt-1">
                Typical response time: within 12 hours.
              </p>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7DFD3] hover:border-[#D5C9B8] shadow-sm transition-all">
              <span className="text-xs font-mono text-[#8C3A18] font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Phone className="w-3.5 h-3.5 text-[#C25E38]" />
                <span>PHONE / WHATSAPP</span>
              </span>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="text-base sm:text-lg font-bold text-[#24211D] hover:text-[#C25E38] transition-colors"
              >
                {personalInfo.phone}
              </a>
              <p className="text-xs text-[#7A7165] mt-1">
                Direct phone inquiries or WhatsApp.
              </p>
            </div>

            {/* Location & Relocation Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7DFD3] shadow-sm">
              <span className="text-xs font-mono text-[#7A7165] font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#C25E38]" />
                <span>LOCATION & MOBILITY</span>
              </span>
              <div className="text-base font-bold text-[#24211D]">
                {personalInfo.location}
              </div>
              <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md text-xs font-mono bg-[#EDF5EE] text-[#1B5E20] border border-[#CDE3D2] font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>{personalInfo.relocationStatus}</span>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E7DFD3] hover:border-[#0A66C2]/40 hover:bg-[#FAF7F2] flex items-center gap-3 transition-all group shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EBF3FB] flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#24211D]">LinkedIn</div>
                  <div className="text-[11px] text-[#786F63]">akshay-mohan</div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E7DFD3] hover:border-[#24211D]/40 hover:bg-[#FAF7F2] flex items-center gap-3 transition-all group shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F5EDE1] flex items-center justify-center text-[#24211D] group-hover:bg-[#24211D] group-hover:text-[#FAF7F2] transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#24211D]">GitHub</div>
                  <div className="text-[11px] text-[#786F63]">AkshayMohanMp</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E7DFD3] shadow-sm">
              <h3 className="text-lg font-bold text-[#24211D] mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs text-[#7A7165] mb-6">
                Fill out the form below to immediately dispatch an email or initiate an interview discussion.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-[#EDF5EE] border border-[#CDE3D2] text-center space-y-2">
                  <Check className="w-8 h-8 text-[#2E7D32] mx-auto" />
                  <h4 className="text-base font-bold text-[#24211D]">Email Client Triggered!</h4>
                  <p className="text-xs text-[#5E564D]">
                    Your message was prepared in your default mail app for <strong className="text-[#C25E38]">{personalInfo.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#736B60] mb-1.5 font-semibold">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8C9] text-sm text-[#24211D] focus:outline-none focus:border-[#C25E38] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#736B60] mb-1.5 font-semibold">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8C9] text-sm text-[#24211D] focus:outline-none focus:border-[#C25E38] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#736B60] mb-1.5 font-semibold">
                      INQUIRY / OPPORTUNITY TYPE
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8C9] text-sm text-[#24211D] focus:outline-none focus:border-[#C25E38] transition-colors"
                    >
                      <option value="Full-Time Backend / Go Opportunity">Full-Time Backend / Go Engineering Role</option>
                      <option value="IoT Platform / Cloud Architecture Contract">IoT Platform / Cloud Architecture Project</option>
                      <option value="Distributed Systems Advisory">Distributed Systems / Concurrency Advisory</option>
                      <option value="General Technical Inquiry">General Technical Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#736B60] mb-1.5 font-semibold">
                      MESSAGE DETAILS
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Hi Akshay, we came across your work on high-throughput Go backends and IoT platforms and would love to chat..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8C9] text-sm text-[#24211D] focus:outline-none focus:border-[#C25E38] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm bg-[#C25E38] text-white hover:bg-[#B0532E] transition-all shadow-md shadow-[#C25E38]/20"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
