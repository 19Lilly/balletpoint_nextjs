'use client';

import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';

const CopyToClipboard = () => {
  const [isShow, setIsShow] = useState(false);
  const IBAN = ' SK2309000000005219375395';
  const copyToClipboard = () => {
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 2000);
    return navigator.clipboard.writeText(IBAN);
  };
  return (
    <button
      className='flex items-center gap-1 hover:text-fuchsia-600 relative'
      onClick={copyToClipboard}
    >
      {isShow && (
        <span className='border rounded-xl px-1 absolute -top-4 -right-12  text-sm'>
          skopírované
        </span>
      )}
      <FiCopy />
      <span className='text-sm'>kopírovať</span>
    </button>
  );
};

export default CopyToClipboard;
