import ReactPlayer from 'react-player';
// import myVideo from 'video/trailer.mp4';

export const PlayerSecion = () => {
    return (
        <section id="player" className="h-screen my-11 bg-blue100 w-full text-secondary flex items-center  flex-col">
            <div className="w-full flex flex-col justify-center max-w-[852px]">
                <span className="text-xl mb-2">Трейлер: </span>
                <ReactPlayer width={'100%'} url="videos/trailer.mp4" controls={true} />
            </div>
        </section>
    );
};
