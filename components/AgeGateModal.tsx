
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const STORAGE_KEY = 'hasAcceptedAgeGate';

export default function AgeGateModal({ onAccept }) {
    const router = useRouter();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const accepted = localStorage.getItem(STORAGE_KEY);
            if (accepted !== 'true') {
                setShow(true);
            }
        }
    }, []);

    const handleAccept = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, 'true');
        }
        setShow(false);
        if (onAccept) onAccept();
    };

    const handleDecline = () => {
        router.push('https://www.google.com');
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-lg w-full mx-4 p-8 text-center transition transform scale-95 animate-fadeIn">
                <div className="mb-6">
                    <span className="inline-block bg-amber-500 text-white rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z" />
                        </svg>
                    </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Please read the following warning</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">I am <strong>over 18 years old</strong> and I accept the viewing of explicit texts and images intended for an adult audience.</p>
                <p className="text-gray-500 dark:text-gray-400 mb-8">I have read and accept the <a href="/terms" className="text-amber-500 hover:underline">Terms & Conditions</a>.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={handleAccept} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition">
                        ACCEPT
                    </button>
                    <button onClick={handleDecline} className="w-full sm:w-auto text-amber-500 hover:text-amber-600 font-semibold py-2 px-6 rounded-lg border border-amber-500 hover:border-amber-600 transition">
                        DECLINE
                    </button>
                </div>
            </div>
        </div>
    );
}
