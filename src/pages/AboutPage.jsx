import { AppLayout } from '../components/common/AppLayout';
import { Contents } from '../constants';

export const AboutPage = () => {
    return (
        <AppLayout>
            <section className="min-h-screen flex flex-col max-w-screen-xl m-auto justify-start items-center">
                <div className="flex flex-col items-center min-h-[300px] justify-around mt-5 ">
                    <h1 className="text-secondary text-3xl">Our Team</h1>
                    <div class="flex flex-wrap flex-row justify-center max-w-[852px] min-h-[210px]">
                        {Contents.teamMembers.map((person) => (
                            <div key={person.id} className="text-color-primary flex flex-col items-center m-4">
                                <div className="bg-unknown-person bg-contain bg-[right_bottom_-8px]  w-[100px] h-[100px]  bg-primary rounded-full"></div>
                                <span className="text-xl">{person.name}</span>
                                <span>{person.position}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
};