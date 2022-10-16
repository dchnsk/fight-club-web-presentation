import { AppLayout } from '../components/common/AppLayout';

export const AboutPage = () => {
    const people = [
        { id: 0, name: 'Valerii Dycahsnkyi', position: 'Programmer' },
        { id: 1, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 2, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 3, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 4, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 5, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 6, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 7, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 8, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 9, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 10, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 11, name: 'John Doe', position: 'Trailer Editing', image: '' },
        { id: 12, name: 'John Doe', position: 'Trailer Editing', image: '' },
    ];

    return (
        <AppLayout>
            <section className="min-h-screen flex flex-col max-w-screen-xl m-auto justify-start items-center">
                <div className="flex flex-col items-center min-h-[300px] justify-around mt-5 ">
                    <h1 className="text-secondary text-2xl">Our Team</h1>
                    <div class="flex flex-wrap flex-row justify-center max-w-[852px] min-h-[210px]">
                        {people.map((person) => (
                            <div key={person.id} className="text-color-primary flex flex-col items-center m-4">
                                <div className="bg-unknown-person bg-contain bg-[right_bottom_-8px]  w-[100px] h-[100px]  bg-primary rounded-full"></div>
                                <span>{person.name}</span>
                                <span>{person.position}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
};
