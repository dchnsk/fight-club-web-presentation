import { Link } from 'react-router-dom';
import { Contents } from '../../../constants';

export const AppFooter = () => (
    <footer className="h-28 text-primary bg-secondary w-full flex flex-col items-center justify-center text-center">
        <span className="text-lg">Send feedback:</span>
        <div className="flex justify-between w-[120px] mt-2 items-center">
            {Contents.officialSocialMedias.map((socMed) => (
                <Link>
                    <img
                        id={socMed.id}
                        className="cursor-pointer"
                        src={socMed.imageSrc}
                        width={32}
                        alt={`${socMed.title} icon`}
                    />
                </Link>
            ))}
        </div>
    </footer>
);
