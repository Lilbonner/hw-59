import React, { useState, useEffect } from 'react';

interface Meme {
    value: string;
}

const memeDisplay: React.FC = () => {
    const [meme, setMeme] = useState('');

    useEffect(() => {
        fetchMeme();
    }, []);

    const fetchMeme = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data: Meme = await response.json();
            setMeme(data.value);
        } catch (error) {
            console.error('Error fetching meme:', error);
        }
    };

    return (
        <div>
            <h2>Meme</h2>
            <p>{meme}</p>
            <button onClick={fetchMeme}>Get Meme</button>
        </div>
    );
};

export default memeDisplay;
