import ReactPlayer from 'react-player';
// import myVideo from 'video/trailer.mp4';

export const PlayerSecion = () => {
    return (
        <section
            id="player"
            className="min-h-[50vh] my-11 bg-blue100 w-full text-secondary flex items-center  flex-col"
        >
            <div className="w-full flex flex-col justify-center max-w-[852px]">
                <span className="text-2xl mb-2">Трейлер: </span>
                <ReactPlayer
                    config={{
                        file: {
                            playerVars: {
                                color: 'yellow',
                            },
                        },
                    }}
                    url="videos/trailer.mp4"
                    light="images/trailer-cover.png"
                    width={'100%'}
                    playing
                    controls
                />
            </div>
        </section>
    );
};
