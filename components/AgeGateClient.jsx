// components/AgeGateClient.jsx
'use client';
import { useEffect, useState } from 'react';
import AgeGateModal from './AgeGateModal';

const AGE_KEY = 'hasAcceptedAgeGate';

export default function AgeGateClient({ children }) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const flag = localStorage.getItem(AGE_KEY);
    if (flag === 'true') {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(AGE_KEY, 'true');
    setAccepted(true);
  };

  if (!accepted) {
    return <AgeGateModal onAccept={handleAccept} />;
  }

  return <>{children}</>;
}
