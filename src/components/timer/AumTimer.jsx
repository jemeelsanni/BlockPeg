import React, { useState, useEffect } from 'react';

const AumTimer = () => {
  const initialAUM = 20005628; // Initial AUM in USD
  const incrementAmount = 125000; // Amount to increment every 3 days in USD
  const daysInterval = 3; // Interval for increment in days
  const conversionUpdateInterval = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

  const [aum, setAum] = useState(initialAUM);
  const [remainingTime, setRemainingTime] = useState(conversionUpdateInterval); // Initial remaining time in milliseconds
  const [btcValue, setBtcValue] = useState(initialAUM / btcToUsdRate);
  const [ethValue, setEthValue] = useState(initialAUM / ethToUsdRate);
  const [bnbValue, setBnbValue] = useState(initialAUM / bnbToUsdRate);

  // Load timer state from local storage, if available
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('timerState'));

    if (savedState) {
      setAum(savedState.aum);
      setRemainingTime(savedState.remainingTime);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the remaining time
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1000); // Subtract 1 second (1000 milliseconds)

      if (remainingTime <= 0) {
        // Calculate the new AUM after the increment
        const newAUM = aum + incrementAmount;
        setAum(newAUM);

        // Reset the remaining time to the conversion update interval
        setRemainingTime(conversionUpdateInterval);
      }
    }, 1000); // Update every 1 second

    // Save timer state to local storage
    localStorage.setItem('timerState', JSON.stringify({ aum, remainingTime }));

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [aum, remainingTime]);

  // Timer to update conversion values every 48 hours
  useEffect(() => {
    const conversionTimer = setInterval(() => {
      // Update BTC, ETH, BNB values
      setBtcValue(aum / btcToUsdRate);
      setEthValue(aum / ethToUsdRate);
      setBnbValue(aum / bnbToUsdRate);
    }, conversionUpdateInterval);

    // Clean up the timer when the component unmounts
    return () => clearInterval(conversionTimer);
  }, [aum]);

  // Function to format milliseconds into days, hours, minutes, seconds, and milliseconds
  const formatTime = (milliseconds) => {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    const millisecondsRemainder = milliseconds % 1000;

    return (
      <div className="flex items-center space-x-2 text-2xl">
        <span>{days}d</span>
        <span>{hours}h</span>
        <span>{minutes}m</span>
        <span>{seconds}s</span>
        <span>{millisecondsRemainder}ms</span>
      </div>
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center text-[#0c3c4c]"> 
      <div>
        <p>USD: ${aum.toFixed(2)}</p>
        <p>BTC: {btcValue.toFixed(2)} BTC</p>
        <p>ETH: {ethValue.toFixed(2)} ETH</p>
        <p>BNB: {bnbValue.toFixed(2)} BNB</p>
      </div>
    </div>
  );
};

// You will need to provide the current conversion rates for BTC, ETH, and BNB to USD.
const btcToUsdRate = 45000; // Replace with the actual rate
const ethToUsdRate = 3000; // Replace with the actual rate
const bnbToUsdRate = 400; // Replace with the actual rate

export default AumTimer;
