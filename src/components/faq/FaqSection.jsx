import { Contents } from '../../constants';
import { FaqElement } from './FaqElement';

export const FaqSection = () => (
    <section className=" min-h-screen text-primary y max-w-3xl justify-start flex m-auto pt-8 flex-col items-center">
        <h1 className="text-3xl mb-7">Frequently asked questions</h1>
        {Contents.faq.map((faq) => (
            <FaqElement key={faq.id} faqData={faq} />
        ))}
    </section>
);
