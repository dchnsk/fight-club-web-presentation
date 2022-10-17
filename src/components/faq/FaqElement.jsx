export const FaqElement = ({ faqData }) => {
    return (
        <div className="flex flex-col w-full mb-6">
            <div className="p-4 flex flex-col text-start rounded max-w-[65%]  bg-secondary mb-3">
                <span className="text-lg">Question</span>
                {faqData.question}
            </div>
            <div className="p-4 flex flex-col bg-hightlight max-w-[65%]  text-tertiary rounded ml-auto">
                <span className="text-lg">Answer:</span>
                {faqData.answer}
            </div>
        </div>
    );
};
