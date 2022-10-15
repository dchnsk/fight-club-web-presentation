import { AppLayout } from '../components/common/AppLayout';
import { MainSection } from '../components/home/MainSection';
import { PlayerSecion } from '../components/home/PlayerSection';

export const HomePage = () => {
    return (
        <AppLayout>
            <main className="flex flex-col max-w-screen-xl w-full m-auto justify-center">
                <MainSection />
                <PlayerSecion />
            </main>
        </AppLayout>
    );
};
