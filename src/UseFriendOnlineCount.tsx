"use no memo"
import { useState, useEffect } from 'react';

export const useFriendOnlineCount = () => {
    const [randomNumber, setRandomNumber] = useState<number>(0);

    useEffect(() => {
        const generateRandomNumber = () => {
            setRandomNumber(Math.floor(Math.random() * 11));
        };

        generateRandomNumber(); // Generate a random number immediately
        const timer = setInterval(generateRandomNumber, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return randomNumber;
};

