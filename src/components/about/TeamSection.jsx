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
            <h1 className="text-primary text-3xl">Our Team</h1>
            <div
                class="
                    flex flex-wrap flex-row
                    max-w-[852px] min-h-[210px]
                    justify-center 
                "
            >
                {Contents.teamMembers.map((person) => (
                    <div key={person.id} className="text-primary flex flex-col w-[100px] items-center m-5">
                        <div
                            className="
                                bg-unknown-person bg-contain bg-[right_bottom_-7px] bg-hightlight
                                w-[100px] h-[100px]  
                                border-hightlight border-[0.25rem]
                                overflow-hidden
                                rounded-full 
                            "
                        >
                            {person.image && (
                                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                            )}
                        </div>
                        <span className="text-xl overflow-hidden text-center">{person.name}</span>
                        <span className="opacity-60 text-center">{person.position}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
