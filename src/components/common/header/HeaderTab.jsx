import { Link } from 'react-router-dom';
import React from 'react';
import '../../../styles/index.css';

export const HeaderTab = ({ children, route }) => (
    <Link to={route}>
        <span
            className="
                p-1 mx-3 rounded-md 
                transition-all hover:underline 
                underline-offset-4 cursor-pointer text-xl
            "
        >
            {children}
        </span>
    </Link>
);
