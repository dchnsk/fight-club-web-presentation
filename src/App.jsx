import { Route, Routes } from 'react-router-dom';

import './index.css';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';

function App() {
    const routes = [
        { id: 0, path: '/', page: <HomePage /> },
        { id: 1, path: '/about', page: <AboutPage /> },
        { id: 2, path: '/faq', page: <FaqPage /> },
    ];

    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.id} path={route.path} element={route.page} />
            ))}
        </Routes>
    );
}

export default App;
