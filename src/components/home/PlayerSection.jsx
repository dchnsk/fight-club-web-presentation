import { FilmTrailerPlayer } from './FilmTrailerPlayer';

export const PlayerSecion = () => {
    return (
        <section
            id="player"
            className="min-h-[50vh] my-11 bg-blue100 w-full text-secondary flex items-center  flex-col"
        >
            <div className="w-full flex flex-col justify-center max-w-[852px]">
                <h3 className="text-2xl mb-2">Трейлер: </h3>
                <FilmTrailerPlayer />
            </div>
        </section>
    );
};
