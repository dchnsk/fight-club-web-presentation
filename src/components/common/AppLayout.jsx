import { AppFooter } from './footer';
import { AppHeader } from './header';

export const AppLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            {children}
            <AppFooter />
        </>
    );
};
