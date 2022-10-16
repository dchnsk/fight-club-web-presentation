import { AppLayout } from '../components/common/AppLayout';
import { Contents } from '../constants';

export const FaqPage = () => {
    return (
        <AppLayout>
            <section className=" min-h-screen text-color-primary max-w-3xl justify-start flex m-auto pt-8 flex-col items-center">
                <h1 className="text-3xl mb-7">Frequently asked questions</h1>
                {Contents.faq.map((faq) => (
                    <div id={faq.id} className="flex flex-col w-full mb-6">
                        <div className="p-4 flex flex-col text-start rounded max-w-[65%]  bg-main-bg mb-3">
                            <span className="text-lg">Question</span>
                            {faq.question}
                        </div>
                        <div className="p-4 text-lg flex flex-col bg-primary max-w-[65%]  text-black rounded ml-auto">
                            <span className="text-lg">Answer:</span>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </section>
        </AppLayout>
    );
};
