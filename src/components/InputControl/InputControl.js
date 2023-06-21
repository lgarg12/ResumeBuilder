import React from 'react';

export const InputControl = ({ label, onChange, ...props }) => {
  return (
    <div className='flex flex-col gap-2 p-4'>
      {label && <label>{label}</label>}
      <input type='text' onChange={onChange} {...props} className='border-2 border-gray-300 rounded-2xl p-2' />
    </div>
  );
};
