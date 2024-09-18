import React, {useEffect, useState} from 'react'
import { TagInput } from '../../components'
import { MdClose } from 'react-icons/md';


export const AddEditNotes = ({
    noteData,
    noteType,
    onClose
}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        if (noteType === 'edit') {
            setTitle(noteData.title);
            setContent(noteData.content);
            setTags(noteData.tags);
        }
    }, [noteData, noteType]);

    // Add Note
    const addNewNote = async () => {};
    const editNote = async () => {};


    const handleAddNote = () => {
        if (!title || !content) {
            setError('Please fill all the fields');
            return;
        }

        setError(null);
        if (noteType === 'add') {
            addNewNote();
        } else {
            editNote();
        }
    }

    return (
        <div className='relative'>

            <button className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-1 hover:bg-slate-50"
                onClick={onClose}>
                <MdClose className="text-xl text-slate-400" />
            </button>

            <div className="flex flex-col gap-2">
                <label className="input-label">TITLE</label>
                <input
                    type="text"
                    className="text-2xl text-slate-950 outline-none"
                    placeholder='Go To Gym At 6 PM'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label className="input-label">CONTENT</label>
                <textarea
                    className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
                    placeholder='Write your note here...'
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <div className="mt-3">
                <label className="input-label">TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>

            {error && (
                <p className="text-red-500 text-xs pt-4">{error}</p>
            )}

            <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>
                {noteType === 'add' ? 'ADD NOTE' : 'SAVE'}
            </button>

        </div>
    )
}
