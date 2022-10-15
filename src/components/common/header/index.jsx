import { HeaderTab } from './HeaderTab';

export const AppHeader = () => (
    <header className="z-10 header flex flex-col justify-between h-28 py-2 bg-main-bg content-center fixed w-full">
        <div className="header__logo flex justify-center text-color-secondary font-bold text-5xl text-center">
            Fight Club
        </div>
        <div className="header__menu flex justify-center  h-7 items-center text-secondary">
            <HeaderTab>Home</HeaderTab>
            <HeaderTab>About</HeaderTab>
            <HeaderTab>FAQ</HeaderTab>
        </div>
    </header>
);
