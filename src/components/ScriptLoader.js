import React, { useEffect } from "react";

const ScriptLoader = () => {
  useEffect(() => {
    // Load jQuery
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        // Load scripts in order
        await loadScript('/assets/vendor/jquery-3.6.0.min.js');
        await loadScript('/assets/vendor/popper/popper.min.js');
        await loadScript('/assets/vendor/bootstrap/js/bootstrap.min.js');
        await loadScript('/assets/vendor/slick/slick.min.js');
        await loadScript('/assets/vendor/magnific-popup/dist/jquery.magnific-popup.min.js');
        await loadScript('/assets/vendor/nice-select/js/jquery.nice-select.min.js');
        await loadScript('/assets/vendor/parallax.min.js');
        await loadScript('/assets/vendor/simplyCountdown.min.js');
        await loadScript('/assets/vendor/jquery-ui/jquery-ui.min.js');
        await loadScript('/assets/vendor/wow.min.js');
        await loadScript('/assets/js/theme.js');

        // Initialize WOW.js
        if (window.WOW) {
          new window.WOW().init();
        }

        // Initialize countdown
        if (window.simplyCountdown) {
          window.simplyCountdown('.simply-countdown', {
            year: 2024,
            month: 12,
            day: 31,
            hours: 23,
            minutes: 59,
            seconds: 59,
            words: {
              days: { singular: 'day', plural: 'days' },
              hours: { singular: 'hour', plural: 'hours' },
              minutes: { singular: 'minute', plural: 'minutes' },
              seconds: { singular: 'second', plural: 'seconds' }
            },
            pluralizeRule: function (integer) {
              return integer === 1 ? 0 : 1;
            },
            onEnd: function () {
              return;
            }
          });
        }

      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      // Remove scripts if needed
    };
  }, []);

  return null;
};

export default ScriptLoader; 