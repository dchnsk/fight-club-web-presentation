import { AppFooter } from './footer';
import { AppHeader } from './header';

export const AppLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            <div className="mt-28 px-6">{children}</div>
            <AppFooter />
        </>
    );
};
