import { AppLayout } from '../components/common/AppLayout';
import { Contents } from '../constants';
import { FaqElement } from '../components/faq/FaqElement';

export const FaqPage = () => {
    return (
        <AppLayout>
            <section className=" min-h-screen text-color-primary max-w-3xl justify-start flex m-auto pt-8 flex-col items-center">
                <h1 className="text-3xl mb-7">Frequently asked questions</h1>
                {Contents.faq.map((faq) => (
                    <FaqElement key={faq.id} faqData={faq} />
                ))}
            </section>
        </AppLayout>
    );
};
