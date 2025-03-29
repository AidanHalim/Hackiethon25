import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/success.json';

const JournalSuccess = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigate('/');
        }, 3000);

        return () => clearTimeout(timeout); // cleanup
      }, [navigate]);

    return (
        <Lottie
            animationData={animationData}
            loop={false}
            autoplay={true}
            style={{ width: 300, height: 300 }}
        />
    );
};

export default JournalSuccess;