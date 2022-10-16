export const FaqElement = ({ faqData }) => {
    return (
        <div className="flex flex-col w-full mb-6">
            <div className="p-4 flex flex-col text-start rounded max-w-[65%]  bg-main-bg mb-3">
                <span className="text-lg">Question</span>
                {faqData.question}
            </div>
            <div className="p-4 text-lg flex flex-col bg-primary max-w-[65%]  text-black rounded ml-auto">
                <span className="text-lg">Answer:</span>
                {faqData.answer}
            </div>
        </div>
    );
};
