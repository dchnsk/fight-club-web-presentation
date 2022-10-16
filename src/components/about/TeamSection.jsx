import { Contents } from '../../constants';

export const TeamSection = () => (
    <section
        className="
                flex flex-col 
                items-center m-auto justify-start
                max-w-screen-xl min-h-screen 
            "
    >
        <div
            className="
                flex flex-col
                min-h-[300px]
                items-center justify-around mt-5 
            "
        >
            <h1 className="text-secondary text-3xl">Our Team</h1>
            <div
                class="
                    flex flex-wrap flex-row
                    max-w-[852px] min-h-[210px]
                    justify-center 
                "
            >
                {Contents.teamMembers.map((person) => (
                    <div key={person.id} className="text-color-primary flex flex-col items-center m-4">
                        <div
                            className="
                                bg-unknown-person bg-contain bg-[right_bottom_-8px] bg-primary
                                w-[100px] h-[100px]  
                                rounded-full
                            "
                        ></div>
                        <span className="text-xl">{person.name}</span>
                        <span>{person.position}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
