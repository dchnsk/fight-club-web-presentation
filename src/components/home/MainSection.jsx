import React from 'react';
import { AppConstants } from '../../constants';

export const MainSection = () => {
    return (
        <section
            id="#section1"
            className="
                min-h-600 w-full mt-20 
                text-secondary flex flex-col
                md:justify-start items-center
            "
        >
            <div
                className="
                    flex flex-col 
                    mt-16 max-w-4x max-w-[852px]
                    justify-center md:justify-start
                "
            >
                <div
                    className="
                        flex flex-col
                        items-center sm:items-start
                        sm:flex-row 
                    "
                >
                    <div className="max-w-xs">
                        <img src="images/fc-poster.jpg" alt="Fight Club poster" className="object-cover" />
                        <div className="mt-4">
                            <a href="#player">
                                <button
                                    className="
                                        cursor-pointer border p-2
                                        border-color-secondary rounded-lg
                                        text-color-secondary
                                    "
                                >
                                    Смотреть Трейлер
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="ml-5 max-w-lg">
                        <h1 className="text-3xl text-start">Бойцовский клуб (1999)</h1>
                        <span className="w-full flex opacity-60 my-1">
                            <h3 className="text-2xl mr-2">Fight Club</h3>
                            <span className="p-0.5 border rounded-md">18+</span>
                        </span>
                        <h4 className="text-2xs mt-4 mb-2">Жанр: Триллер, Драма, Криминал</h4>
                        <h4 className="text-2xs my-2">Страна: США, Германия</h4>
                        <h4 className="text-2xs my-2">Слоган: "Интриги. Хаос. Мыло"</h4>
                        <div>
                            <h2 className="text-2xl">O фильме:</h2>
                            <span className="">{AppConstants.filmDescription}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex h-16 mt-4 items-start">
                    <div className="flex flex-col">
                        <span>Актеры:</span>{' '}
                        <div>
                            {AppConstants.filmActors.map((actor) => (
                                <span className="opacity-60">
                                    <a
                                        className="
                                            transition-colors cursor-pointer 
                                            hover:text-color-secondary
                                        "
                                        rel="noreferrer"
                                        target="_blank"
                                        href={actor.url}
                                    >
                                        {actor.name}
                                    </a>
                                    ,
                                </span>
                            ))}
                        </div>
                    </div>
                    <div
                        className="
                            flex flex-col
                            w-1/2 
                            items-start md:items-end
                        "
                    >
                        <div className="flex flex-col">
                            <span>Режиссер: </span>
                            <span>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.kinopoisk.ru/name/2944/"
                                    className="cursor-pointer opacity-60 hover:text-color-secondary"
                                >
                                    Дэвид Финчер
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
