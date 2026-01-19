import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  RecentWork,
  StarsCanvas,
} from "./components";

const App = () => {
  useEffect(() => {
    let intervalId = null;
    let timeoutId = null;
    let loadTimeoutId = null;
    let hashChangeTimeoutId = null;

    // Handle hash navigation on initial page load
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Use getBoundingClientRect for more accurate positioning
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 80; // Adjust for navbar height
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
          return true;
        }
      }
      return false;
    };

    // Function to try scrolling with multiple attempts
    const attemptScroll = () => {
      // Clear any existing intervals
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }

      // Try immediately first
      if (scrollToHash()) {
        return;
      }

      // If not found, retry periodically
      let attempts = 0;
      const maxAttempts = 50; // Try for up to 5 seconds
      intervalId = setInterval(() => {
        attempts++;
        if (scrollToHash() || attempts >= maxAttempts) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }, 100);
    };

    // Start attempting to scroll after React renders
    // Use requestAnimationFrame to ensure DOM is painted
    const startScrolling = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          attemptScroll();
        });
      });
    };
    
    timeoutId = setTimeout(startScrolling, 500);

    // Also try after window load event (as backup)
    const handleLoad = () => {
      if (timeoutId) clearTimeout(timeoutId);
      loadTimeoutId = setTimeout(attemptScroll, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    // Handle hash changes (when user clicks nav links)
    const handleHashChange = () => {
      hashChangeTimeoutId = setTimeout(scrollToHash, 100);
    };
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      if (loadTimeoutId) clearTimeout(loadTimeoutId);
      if (hashChangeTimeoutId) clearTimeout(hashChangeTimeoutId);
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gray-800">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <RecentWork />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
