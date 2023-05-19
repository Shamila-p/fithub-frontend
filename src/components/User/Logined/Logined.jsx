import React, { useEffect, useState } from 'react';

const Logined = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the family</h1>
      <p>We need to know you more. Click on below and complete your survey</p>
      <button>Click me</button>
    </div>
  );
};



export default Logined;
