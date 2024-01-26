import React, {useState} from 'react';

interface FilmItemProps {
    film: {
        id: number;
        title: string;
    };
    deleteFilm: (id: number) => void;
    editFilm: (id: number, editTitle: string) => void;
}
const FilmItem: React.FC<FilmItemProps> = ({ film, deleteFilm, editFilm }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedTitle, setEditedTitle] = useState<string>(film.title);

    const handleEdit = () => {
        if (editedTitle.trim() !== '') {
            editFilm(film.id, editedTitle);
            setIsEditing(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleEdit();
        }
    };
    return (
        <div>
            {isEditing ? (
                <p key={film.id}>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        onBlur={handleEdit}
                        onKeyDown={handleKeyDown}
                    />
                </p>
            ) : (
                <div className="MovieItem" key={film.id}>
                    {film.title}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteFilm(film.id)}>Delete</button>
                </div>
            )}
        </div>

    );
};

export default FilmItem;