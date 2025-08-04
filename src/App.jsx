import React, { useEffect, useState } from 'react';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Assuming certificates are in 'public/certificates' folder
    // and you have a list of image filenames
    const imageList = [
      'DSA.png',
      'Fullstack.png',
      'Java.png',
      'MongoDb.png',
      'Nodejs.png',
      // Add more filenames as needed
    ];
    setImages(imageList);
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '8px',
            width: '420px',
            background: '#fff',
            hower: 'pointer',
            transition: 'transform 0.2s',
            cursor: 'pointer',
            ':hover': {
              transform: 'scale(1.05)',
              duration: 300,
              timingFunction: 'ease-in',
              gap: '3px',
              p: 4,
            },
          }}>
          <img
            src={`/certificates/${img}`}
            alt={`Certificate ${idx + 1}`}
            style={{ width: '100%', borderRadius: '4px' }}
          />
          <div style={{ marginTop: '8px', textAlign: 'center' }}>
            Certificate {idx + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
