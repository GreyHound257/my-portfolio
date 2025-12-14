// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { sendContactForm } from '../actions'; // Import the server action

export default function Contact() {
  // ... keep your state definitions ...
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    // Create a FormData object to pass to the server
    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('message', formState.message);

    // Call the server action
    const result = await sendContactForm(formData);

    if (result.success) {
      setStatus('SENT');
      setFormState({ name: '', email: '', message: '' }); // Clear buffer
    } else {
      setStatus('ERROR');
      alert("Transmission Failed. Check secure logs.");
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-2xl mx-auto">
        
        {/* Header Terminal */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            SECURE_CHANNEL // ENCRYPTED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Initialize Comms
          </h1>
          <p className="text-gray-400 font-mono text-sm">
            /root/kuromaru/contact --mode=direct
          </p>
        </div>

        {/* The "Terminal" Form */}
        <div className="glass p-8 rounded-xl border border-white/10 relative overflow-hidden">
          
          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-5 pointer-events-none h-full w-full" style={{ backgroundSize: '100% 4px' }}></div>

          {status === 'SENT' ? (
            <div className="text-center py-20">
              <div className="text-green-400 text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Packet Received</h3>
              <p className="text-gray-400 font-mono">Transmission successful. Awaiting manual review.</p>
              <button 
                onClick={() => setStatus('IDLE')}
                className="mt-8 text-sm text-cyan-400 hover:text-cyan-300 font-mono underline"
              >
                [RESET_CONNECTION]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono text-violet-400 uppercase tracking-wider">
                  &gt; Identity (Name)
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-space-900/50 border border-white/10 rounded p-3 text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  placeholder="_"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono text-violet-400 uppercase tracking-wider">
                  &gt; Frequency (Email)
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-space-900/50 border border-white/10 rounded p-3 text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  placeholder="user@net.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono text-violet-400 uppercase tracking-wider">
                  &gt; Transmission Data (Message)
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-space-900/50 border border-white/10 rounded p-3 text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  placeholder="Enter encrypted payload..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'SENDING'}
                className="w-full py-4 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono font-bold tracking-widest hover:bg-cyan-500/20 hover:border-cyan-400 transition-all uppercase flex items-center justify-center gap-2 group"
              >
                {status === 'SENDING' ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-cyan-400 border-t-transparent rounded-full" />
                    UPLOADING...
                  </>
                ) : (
                  <>
                    <span>[ ESTABLISH_UPLINK ]</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}