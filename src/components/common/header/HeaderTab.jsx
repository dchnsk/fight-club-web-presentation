import React from 'react';
import '../../../index.css';

export const HeaderTab = ({ children }) => (
    <span
        className="
            p-1 mx-3 rounded-md 
            transition-all hover:underline 
            underline-offset-4 cursor-pointer text-xl
        "
    >
        {children}
    </span>
);
