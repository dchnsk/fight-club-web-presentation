import { HeaderTab } from './HeaderTab';

export const AppHeader = () => {
    const tabs = [
        { id: 0, route: '/', title: 'Home' },
        { id: 1, route: '/about', title: 'About' },
        { id: 2, route: '/faq', title: 'FAQ' },
    ];

    return (
        <header
            className="
            z-10 top-0 
            flex flex-col justify-between content-center
            h-28 py-2
            bg-main-bg fixed w-full
        "
        >
            <div
                className="
                flex justify-center text-center
                text-color-secondary font-bold text-5xl
            "
            >
                Fight Club
            </div>
            <div
                className="
            flex justify-center items-center
            h-7  
             text-secondary"
            >
                {tabs.map((tab) => {
                    return (
                        <HeaderTab key={tab.id} route={tab.route}>
                            {' '}
                            {tab.title}
                        </HeaderTab>
                    );
                })}
            </div>
        </header>
    );
};
