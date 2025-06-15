"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { EnvelopeIcon, SparklesIcon, LightBulbIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/solid';
const Blog8 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(Array(5).fill(false));
  const [showSubscribe, setShowSubscribe] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || "0");
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
      section.setAttribute('data-index', index.toString());
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const shareOnLinkedIn = () => {
    const title = "Cold Email Isn’t Dead – It Just Needs to Be Smarter";
    const summary = "How cold emailing is evolving in 2025 and what smart strategies still work.";
    const source = "Compare Bazaar";

    const shareUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
    shareUrl.searchParams.append("url", currentUrl);
    shareUrl.searchParams.append("title", title);
    shareUrl.searchParams.append("summary", summary);
    shareUrl.searchParams.append("source", source);

    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      shareUrl.toString(),
      'LinkedInShare',
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  const shareContent = async () => {
    const title = "Cold Email Isn’t Dead – It Just Needs to Be Smarter";
    const text = "Smart strategies to make your cold emails stand out in 2025.";

    try {
      if (navigator.share) {
        await navigator.share({ title, text, url: currentUrl });
      } else {
        shareOnLinkedIn();
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");

    setLoading(true);
    const formData = new FormData();
    formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a");
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    formData.append("redirect", "");

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
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Cold Email Isn’t Dead – It Just Needs to Be Smarter</title>
        <meta property="og:title" content="Cold Email Isn’t Dead – It Just Needs to Be Smarter" />
        <meta property="og:description" content="In 2025, cold email is still alive—but only when it's smart, value-driven, and well-personalized." />
        <meta property="og:image" content="https://blogs.compare-bazaar.com/images/coldmail.webp" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Compare Bazaar" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`animate-section transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold text-center text-[#0A3761] mb-2 bg-gradient-to-r from-[#0A3761] to-blue-600 bg-clip-text text-transparent">Cold Email Isn’t Dead – It Just Needs to Be Smarter</h1>
          <p className="text-gray-500 mb-6">Published on June 13, 2025 • 5 min read</p>
          <img
            src="https://blogs.compare-bazaar.com/images/blog12.webp"
            alt="Cold emailing illustration"
            className="rounded-xl shadow-xl mb-8 w-full object-cover"
          />

         
      <h2 className="text-xl font-semibold text-[#0A3761] mt-6 mb-2 flex items-center gap-2">
  <EnvelopeIcon className="w-5 h-5 text-[#0A3761]" />
  Avoid Generic Cold Email
</h2>
<p className="text-gray-700 mb-4">
  Various e-mail platforms are getting advanced with spam filters and can quickly flag repetitive patterns across mails. Hence, your mail ends up being spammed. 
  Hence, personalised human touches and creativity are necessary to stay out of spam box. 
</p>

<h2 className="text-xl font-semibold text-[#0A3761] mt-6 mb-2 flex items-center gap-2">
  <SparklesIcon className="w-5 h-5 text-[#0A3761]" />
  Go Beyond Hyper-Personalization
</h2>
<p className="text-gray-700 mb-4">
  In order to personalise your mail, go beyond the recipient’s name and mention relevant goals, specific pain points of the company, company news and recent achievements etc. 
  This brings out your homework on the table and represents your sincerity. Addressing these directly will show your interest and will also demonstrate that you have done your work well. 
</p>

<h2 className="text-xl font-semibold text-[#0A3761] mt-6 mb-2 flex items-center gap-2">
  <LightBulbIcon className="w-5 h-5 text-[#0A3761]" />
  Provide Value, Not Just a Pitch
</h2>
<p className="text-gray-700 mb-4">
  As we say, your first impression is the last impression. So, do not try to hard sell yourself in the first go itself. 
  Try to create a conversation around a pain point and offer a counter solution for that. Another way is to try asking an easy yes question, giving value to it, if you can. 
  Make your Call-to-action (CTA) specific and relevant.  
</p>

<h2 className="text-xl font-semibold text-[#0A3761] mt-6 mb-2 flex items-center gap-2">
  <DevicePhoneMobileIcon className="w-5 h-5 text-[#0A3761]" />
  Use a Multi-Medium Approach
</h2>
<p className="text-gray-700 mb-4">
  Try to interact with your recipient by interacting with them on various platforms such as LinkedIn. This will warm up your outreach and make your name familiar to your recipient. 
  Using automation and tools such as Clay.com, Saleshandy, Reply.io etc can help you with creating a holistic way to sequence your work across channels for better engagement.
</p>

<h2 className="text-xl font-semibold text-[#0A3761] mt-6 mb-2 flex items-center gap-2">
  <ChartBarIcon className="w-5 h-5 text-[#0A3761]" />
  Track, Analyze, and Improve
</h2>
<p className="text-gray-700 mb-4">
  After sending your mails, track your positive responses, reply rates, open rates etc analyse what works better. 
  You’ll have to keep testing, reworking and double down to completely ensure what works and what not.
  These strategies when executed together help your provider cut through the noise in today’s crowded market.
</p>

          <div className="bg-blue-50 border-l-4 border-[#0A3761] p-4 mb-6 rounded-r-lg">
            <p className="italic text-gray-700">
              Cold emailing is surely not dead- but the old methodology is. To succeed in present and future as well, you need to be more creative, interactive, value-driven and focused on authenticity. It’s still the most efficient way to grow for those who keeps themselves updated.  </p>
          </div>

          <p className="text-gray-700">
            <strong>Pro Tip:</strong>Experiment with new formats- short, catchy, witty emails. Use images and video messages and combine humour and sarcasm. Analyse your responses, iterate and evolve constantly.  
 

          </p>

          <div className="mt-8 flex gap-4">
            <button onClick={shareContent} className="bg-[#0A3761] text-white px-4 py-2 rounded hover:bg-blue-800 transition">
              Share this Article
            </button>
            
          </div>
        </div>
      </div>
      {/* Final Thoughts */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A3761] mb-6">
               Final Thought: Cold Emailing Isn’t Dead—Just Needs to Be Smarter
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Whether you’re just starting with outreach or refining your strategy—<b>Compare-Bazaar.com</b> gives you the tools to move forward with clarity, confidence, and control.
              </p>

              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <p className="font-bold text-lg text-[#0A3761] mb-3">
                  Ready to compare quotes for your next tech investment?
                </p>
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
                <p className="mt-4 italic text-gray-600">
                  Where smart choices start.
                </p>
              </div>
            </div>
          </div>
        </div>

           {/* Share Section gafru */}
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-center text-[#0A3761] mb-2 bg-gradient-to-r from-[#0A3761] to-blue-600 bg-clip-text text-transparent"> 
              Stay Updated
            </h3>
            <p className="text-gray-600 text-center mb-6">
             Get the latest cold email tactics that actually work — straight to your inbox, no spam, just strategy.
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

         {/* Share Section gafru */}
        <div className="max-w-md mx-auto px-4 py-6">
  <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 transform transition-all hover:scale-[1.01] hover:shadow-lg">
    <div className="flex flex-col items-center mb-6">
      <div className="relative mb-3">
        <div className="absolute -inset-2 bg-indigo-100 rounded-full blur opacity-75 animate-pulse"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </div>
      <p className="text-sm font-medium text-gray-500 tracking-wider">SHARE THIS CONTENT</p>
      <div className="mt-2 w-12 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
    </div>
    
    <div className="flex justify-center space-x-8">
      {/* LinkedIn Button */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-tilt"></div>
        <button 
          onClick={shareOnLinkedIn}
          className="relative p-4 bg-[#0A66C2] text-white rounded-full hover:bg-[#004182] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          aria-label="Share on LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </button>
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Share on LinkedIn
        </span>
      </div>
      
      {/* Universal Share Button with Gradient */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-tilt"></div>
        <button 
          onClick={shareContent}
          className="relative p-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          aria-label="Share content"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Share Options
        </span>
      </div>
      
      {/* Copy Link Button */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gray-800 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-tilt"></div>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(currentUrl);
            // Optional: Add a tooltip or animation here
          }}
          className="relative p-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          aria-label="Copy link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
        </button>
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Copy to Clipboard
        </span>
      </div>
    </div>
    
    {/* Success notification (hidden by default) */}
    <div className="mt-6 opacity-0 transition-opacity duration-300 pointer-events-none" id="copy-success">
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-sm flex items-center">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
        </svg>
        Link copied to clipboard!
      </div>
    </div>
  </div>
</div>
    

    </>
  );
};

export default Blog8;