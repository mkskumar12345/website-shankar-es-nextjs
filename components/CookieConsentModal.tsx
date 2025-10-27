'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookieConsentPreferences';

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
};

export default function CookieConsentModal({ onSaved }: { onSaved?: () => void }) {
  const [show, setShow] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // first time, show modal
      setShow(true);
    } else {
      // already set, we can parse and optionally pass via onSaved
      const obj = JSON.parse(stored) as CookiePrefs;
      setPrefs(obj);
      if (onSaved) onSaved();
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setShow(false);
    if (onSaved) onSaved();
    // you may also trigger enabling scripts based on prefs
  };

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true, advertising: true };
    setPrefs(all);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    setShow(false);
    if (onSaved) onSaved();
  };

  const handleRejectAll = () => {
    const none = { necessary: true, analytics: false, advertising: false };
    setPrefs(none);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(none));
    setShow(false);
    if (onSaved) onSaved();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-xl w-full mx-4 p-8 text-center transition transform scale-95 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">About cookies on this website</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We use cookies to optimize the performance of this website and provide you with a better user experience in a personalized way.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          For more information, please visit our <a href="/cookie-notice" className="text-amber-500 hover:underline">Cookie Notice</a> and our <a href="/privacy" className="text-amber-500 hover:underline">Privacy Notice</a>.
        </p>

        <div className="text-left mb-6">
          <h3 className="font-semibold mb-2">You can personalise the cookies we use by providing your consent to enable their use by us by exercising your choice using the buttons below.</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={prefs.necessary}
                disabled
                className="mr-2"
              />
              <label className="text-gray-700 dark:text-gray-300">
                <strong>Strictly Necessary cookies</strong> – Always active
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={() => setPrefs(prev => ({ ...prev, analytics: !prev.analytics }))}
                className="mr-2"
              />
              <label className="text-gray-700 dark:text-gray-300">
                <strong>Analytical/Performance Cookies</strong>
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={prefs.advertising}
                onChange={() => setPrefs(prev => ({ ...prev, advertising: !prev.advertising }))}
                className="mr-2"
              />
              <label className="text-gray-700 dark:text-gray-300">
                <strong>Advertising Cookies</strong>
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={handleAcceptAll} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Accept All Cookies
          </button>
          <button onClick={handleSave} className="w-full sm:w-auto border border-amber-500 hover:border-amber-600 text-amber-500 font-semibold py-2 px-6 rounded-lg transition">
            Save My Preferences
          </button>
          <button onClick={handleRejectAll} className="w-full sm:w-auto text-gray-500 hover:text-gray-700 font-semibold py-2 px-6 rounded-lg">
            Reject Non-Necessary Cookies
          </button>
        </div>

      </div>
    </div>
  );
}
