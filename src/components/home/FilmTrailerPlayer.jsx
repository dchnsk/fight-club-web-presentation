import ReactPlayer from 'react-player';

export const FilmTrailerPlayer = () => (
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
);
