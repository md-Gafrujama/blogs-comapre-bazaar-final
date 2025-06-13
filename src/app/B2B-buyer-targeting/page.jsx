"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const Blog9 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(Array(6).fill(false));
  const [showSubscribe, setShowSubscribe] = useState(false);

  // Function to share on LinkedIn
  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  // Function to share content using Web Share API or fallback to clipboard
  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: currentUrl,
        });
      } catch (error) {
        alert('Sharing failed or was cancelled.');
      }
    } else {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        alert('Failed to copy link to clipboard.');
      }
    }
  };

  // Function to copy link to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      alert('Failed to copy link to clipboard.');
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setIsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-section').forEach((section, index) => {
      section.setAttribute('data-index', index);
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");
    setLoading(true);
    const formData = new FormData();
    formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a");
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail("");
          setSubscribed(false);
        }, 3000);
      } else alert("Failed to subscribe. Try again!");
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div>
  <Head>
    <title>The Future of B2B Buyer Targeting: AI, Technographics & Real-Time Signals</title>
    <meta property="og:title" content="The Future of B2B Buyer Targeting" />
    <meta property="og:description" content="Discover how AI, technographics, and real-time signals are shaping the future of B2B marketing with smarter, more agile targeting strategies." />
    <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog6.webp" />
    {currentUrl && <meta property="og:url" content={currentUrl} />}
  </Head>

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className={`max-w-4xl mx-auto pt-10 pb-2 animate-section transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mb-8">
        
        <h1 className="text-3xl md:text-5xl font-bold text-[#0A3761] mb-6 leading-tight bg-gradient-to-r from-[#0A3761] to-blue-600 bg-clip-text text-transparent">
          The Future of B2B Buyer Targeting: AI, Technographics & Real-Time Signals
        </h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <span>Published on June 1, 2025</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>
      </div>

      <div className="relative group">
        <img
          src="https://blogs.compare-bazaar.com/images/blog13.webp"
          alt="B2B marketing"
          className="mx-auto rounded-xl shadow-xl mb-8 w-full max-w-5xl aspect-[13/7] object-cover transform transition-all duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="bg-blue-50 border-l-4 border-[#0A3761] p-4 mb-8 rounded-r-lg hover:shadow-md transition-shadow duration-300">
        <p className="italic text-gray-700 text-lg">
          Discover how leading-edge technologies are reshaping B2B strategies with precision, personalization, and perfect timing.
        </p>
      </div>
    </div>

    <section className={`animate-section mt-12 ${isVisible[1] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-2xl font-bold text-[#0A3761] mb-4">🧠 AI: Personalisation and Predictive Analytics</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li className='font-bold'>Predicts buying intent via behavior analysis</li>
          <p>AI helps in predicting the buying intent by analysing the routine tasks, web behaviour and actionable insights, enabling hyper-personalised experiences.</p>
       
        <li className='font-bold'>Boosts lead generation by identifying high-potential accounts</li>
        <p>It prioritises accounts most likely to convert, improving sales and efficiency by identifying high quality sales.</p>
        <li className='font-bold'>Automates content creation and optimization</li>
        <p>AI tools help in generating content, helping teams scale the output without increasing headcounts and compromising on quality.</p>
        <li className='font-bold'>Enhances engagement with AI-powered chatbots</li>
      <p> AI tools help in generating content, helping teams scale the output without increasing headcounts and compromising on quality.</p>
      </ul>
    </section>

    <section className={`animate-section mt-12 ${isVisible[2] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-2xl font-bold text-[#0A3761] mb-4">🛠️ Technographics: Precise Targeting</h2>
      <p className="text-gray-700 mb-2">
       Technographics refers to the data -information about a company's technology stack and software usage, such as their cloud providers, marketing platforms, security tools etc. This adds in understanding the prospect better.  </p>
       <li className='text-gray-700'>Crafts personalised pitches addressing specific pain points</li>
       <li className='text-gray-700'>It helps in understanding and running competitive displacement campaigns as well as integration opportunities. </li>
       <li className='text-gray-700'>Refines and redefines account-based marketing for relevance and impact.</li>
      <p className="text-gray-700 italic">Example: SparkForce, a marketing company uses technographics filters to narrow down the list of companies that uses SAP. This allows precision in outreach and focuses on relevant leads.</p>
    </section>

    <section className={`animate-section mt-12  ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
     
        <h2 className="text-2xl font-bold text-[#0A3761] mb-4 ">
          📡 <span>Real-Time Signals: Act When Buyers Are Ready</span>
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 ">
          <li><span className="font-medium text-[#0A3761]">Detects intent:</span> through site visits, downloads, and demo requests</li>
          <li><span className="font-medium text-[#0A3761]">Boosts conversion:</span> enables timely outreach when buyers show interest</li>
          <li><span className="font-medium text-[#0A3761]">Faster deals:</span> meets prospects at peak interest to shorten sales cycles</li>
        </ul>
     
    </section>

    <section className={`animate-section mt-12  ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
        <h2 className="text-2xl font-bold text-[#0A3761] mb-4 flex items-center gap-2">
          🔁 <span>Traditional vs. Modern Targeting</span>
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-[#0A3761]">Approach</th>
                <th className="px-6 py-3 text-left font-semibold text-[#0A3761]">Traditional</th>
                <th className="px-6 py-3 text-left font-semibold text-[#0A3761]">Modern</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-blue-50/30 transition">
                <td className="px-6 py-4 font-medium">Focus</td>
                <td className="px-6 py-4">Broad market</td>
                <td className="px-6 py-4">Hyper-targeted segments</td>
              </tr>
              <tr className="border-t hover:bg-blue-50/30 transition">
                <td className="px-6 py-4 font-medium">Campaign Type</td>
                <td className="px-6 py-4">Generic, one-size-fits-all</td>
                <td className="px-6 py-4">Deeply personalized outreach</td>
              </tr>
              <tr className="border-t hover:bg-blue-50/30 transition">
                <td className="px-6 py-4 font-medium">Data</td>
                <td className="px-6 py-4">Static firmographics</td>
                <td className="px-6 py-4">Real-time intent & technographic signals</td>
              </tr>
            </tbody>
          </table>
        </div>
      
    </section>
  </div>

  <div className="max-w-4xl mx-auto px-2 py-8">
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0A3761] mb-6">
        Final Thought: Smarter Targeting, Better Results
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-6">
          The convergence and integration of AI, technographics and real-time signals is helping B2B targeting to become more smarter and agile.
In future, those who embraces these advanced methodologies combined with human insights and act at right time will gain success in B2B sales.
 </p>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <p className="mb-4">
            Visit <a href="https://compare-bazaar.com" className="text-blue-600 hover:underline font-medium">Compare-Bazaar.com</a> or reach us at:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center hover:text-[#0A3761] transition-colors duration-300">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>marketing@compare-bazaar.com</span>
            </li>
            <li className="flex items-center hover:text-[#0A3761] transition-colors duration-300">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+1 332-231-0404</span>
            </li>
          </ul>
          <p className="mt-4 italic text-gray-600">Where smart choices start.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-center text-[#0A3761] mb-2 bg-gradient-to-r from-[#0A3761] to-blue-600 bg-clip-text text-transparent"> 
              Stay Updated
            </h3>
            <p className="text-gray-600 text-center mb-6">
             Subscribe for cutting-edge insights on B2B buyer targeting—AI-driven strategies, technographics, and real-time signals. No fluff, just future-forward tactics
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3761] focus:border-[#0A3761] transition hover:border-gray-400"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className={`w-full ${
                  subscribed ? 'bg-green-600' : 'bg-gradient-to-r from-[#ff8633] to-orange-500 hover:from-[#e6732b] hover:to-orange-600'
                } text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-2 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : subscribed ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Subscribed!
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Share Section */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Share this article</h3>
            <p className="text-gray-600 text-sm">Help others discover these insights</p>
          </div>
          
          <div className="flex justify-center items-center space-x-6">
            {/* LinkedIn Button */}
            <button 
              onClick={shareOnLinkedIn}
              className="flex items-center space-x-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-4 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-medium">LinkedIn</span>
            </button>
            
            {/* Universal Share Button */}
            <button 
              onClick={shareContent}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Share content"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="font-medium">Share</span>
            </button>
            
            {/* Copy Link Button */}
            <button 
              onClick={copyToClipboard}
              className={`flex items-center space-x-2 ${
                copied 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-700 hover:bg-gray-800'
              } text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
              aria-label="Copy link"
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span className="font-medium">Copy Link</span>
                </>
              )}
            </button>
          </div>
          
          {/* Success Message */}
          {copied && (
            <div className="mt-4 text-center">
              <p className="text-green-600 text-sm font-medium">Link copied to clipboard!</p>
            </div>
          )}
        </div>
      </>
  );
};

export default Blog9;