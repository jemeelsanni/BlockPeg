import React, { useState, useEffect } from 'react';
import { addDays } from 'date-fns';

const AumTimer = () => {
  const initialAUM = 20000000; // Initial AUM in USD
  const incrementAmount = 125000; // Amount to increment every 3 days in USD
  const daysInterval = 3; // Interval for increment in days

  const [aum, setAum] = useState(initialAUM);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the new AUM after the increment
      const newAUM = aum + incrementAmount;
      setAum(newAUM);
    }, daysInterval * 24 * 60 * 60 * 1000); // Convert days to milliseconds

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [aum]);

  return (
    <div>
      <p>USD: ${aum.toFixed(2)}</p>
      <p>BTC: {(aum / btcToUsdRate).toFixed(8)} BTC</p>
      <p>ETH: {(aum / ethToUsdRate).toFixed(8)} ETH</p>
      <p>BNB: {(aum / bnbToUsdRate).toFixed(8)} BNB</p>
    </div>
  );
};

// You will need to provide the current conversion rates for BTC, ETH, and BNB to USD.
const btcToUsdRate = 45000; // Replace with the actual rate
const ethToUsdRate = 3000; // Replace with the actual rate
const bnbToUsdRate = 400; // Replace with the actual rate

export default AumTimer;
