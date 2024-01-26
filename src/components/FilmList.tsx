import React, { useState } from 'react';
import FilmItem from './FilmItem';

interface Film {
    id: number;
    title: string;
}

const FilmList: React.FC = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [newFilm, setNewFilm] = useState<string>('');

    const addFilm = () => {
        if (newFilm.trim() !== '') {
            const newFilmItem: Film = {
                id: Math.floor(Math.random() * 1000),
                title: newFilm.trim(),
            };
            setFilms([...films, newFilmItem]);
            setNewFilm('');
        }
    };
    const deleteFilm = (id: number) => {
        const updatedFilms = films.filter(film => film.id !== id);
        setFilms(updatedFilms);
    };
    const editFilm = (id: number, editedTitle: string) => {
        const updatedMovies = films.map(movie =>
            movie.id === id ? { ...movie, title: editedTitle } : movie
        );
        setFilms(updatedMovies);
    };

    return (
        <div>
            <input
                className="input-film"
                type="text"
                value={newFilm}
                onChange={(e) => setNewFilm(e.target.value)}
            />
            <button className="add" onClick={addFilm}>Add</button>
            <h5>To watch list:</h5>
            <ul>
                {films.map((film) => (
                    <FilmItem
                        key={film.id}
                        film={film}
                        deleteFilm={deleteFilm}
                        editFilm={editFilm}
                    />
                ))}
            </ul>
        </div>
    );
};

export default FilmList;