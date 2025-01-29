'use client';

import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const supabaseUrl = 'https://rzaukiglowabowqevpem.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YXVraWdsb3dhYm93cWV2cGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxODk3NDcsImV4cCI6MjAzMzc2NTc0N30.wSQnUlCio1DpXHj0xa5_6W6KjyUzXv4kKWyhpziUx_s';

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const { error } = await supabase
        .from('gmail1')
        .insert([{ email }]);

      if (error) throw error;

      setEmail('');
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              DesignAI
            </h1>
            <div className="flex items-center">
              <p className="text-gray-600 font-medium">Alpha Version Coming Soon</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600 ring-1 ring-inset ring-purple-600/20">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-purple-600"></span>
              Where AI Meets Creativity
            </div>
            <h1 className="text-4xl sm:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Create Stunning Visuals
              <br />
              Powered by AI
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Transform your ideas into beautiful infographics and posters in seconds. Our AI understands design principles and creates visuals that captivate.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 placeholder-gray-500 shadow-sm"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white shadow-lg transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist →'}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="text-green-600 text-sm font-medium">Thanks for joining! We'll keep you updated.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again.</p>
            )}
            <p className="text-gray-500 text-sm">Get early access when we launch</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why You'll Love DesignAI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-purple-50 hover:bg-purple-100/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI-Powered Design</h3>
              <p className="text-gray-600">Let AI generate professional designs based on proven design principles and trends.</p>
            </div>
            <div className="p-8 rounded-2xl bg-purple-50 hover:bg-purple-100/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Templates</h3>
              <p className="text-gray-600">Choose from hundreds of templates that adapt to your content intelligently.</p>
            </div>
            <div className="p-8 rounded-2xl bg-purple-50 hover:bg-purple-100/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">One-Click Export</h3>
              <p className="text-gray-600">Export your designs in multiple formats perfect for social media, print, or web.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(255,255,255,0.12),transparent)] animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-[spin_15s_linear_reverse_infinite]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.1)]">
              Be First to Experience
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                The Future of Design
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join our exclusive waitlist and be among the first to create stunning designs with AI.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group px-8 py-5 bg-white rounded-2xl font-medium text-purple-600 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Joining...' : (
                  <>
                    Join Waitlist
                    <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                  </>
                )}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="text-white font-medium mb-8">Thanks for joining! We'll keep you updated.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-200 font-medium mb-8">Something went wrong. Please try again.</p>
            )}
            <div className="flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2024 DesignAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
