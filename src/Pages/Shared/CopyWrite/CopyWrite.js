import React from 'react';

const CopyWrite = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-accent bg-opacity-50 py-4 text-center text-gray-600">
      <div className="container mx-auto">
        <p className="text-sm font-bold">
          &copy; {currentYear} Doctors Portal All Rights Reserved. - made by Arju
        </p>
      </div>
    </div>
  );
};

export default CopyWrite;
