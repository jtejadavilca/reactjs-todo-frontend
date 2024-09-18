import { useEffect, useState } from 'react';
import Modal from 'react-modal'; 
import {
    Navbar,
    NoteCard
} from '../../components';

import { MdAdd } from 'react-icons/md';
import { AddEditNotes } from '../AddEditNotes/AddEditNotes';
import notesService from '../../service/notes_service';
import { getUserInfoFromToken } from '../../utils/tokenHandler';

export const Home = () => {

    const [openAddEditNote, setOpenAddEditNote] = useState({
        isShown: false,
        type: 'add',
        data: null
    });

    const [note, setNote] = useState({});
    const [notes, setNotes] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    
    Modal.setAppElement('#root');


    const getUserInfo = () => {
        setUserInfo(getUserInfoFromToken());
    }

    const getNotes = () => {
        console.log('notesService', notesService);
        notesService.getNotes()
            .then(({data}) => {
                setNotes(data);
            })
            .catch((error) => {
                console.log('error getNotes()',error);
            });
    }

    const getNote = (noteId) => {
        notesService.getNote(noteId)
            .then(({data}) => {
                setNote(data);
                setOpenAddEditNote({
                    isShown: true,
                    type: 'edit',
                    data
                });
            })
            .catch((error) => {
                console.log('error getNote()',error);
            }
        );
    }

    
    useEffect(() => {
        getUserInfo();
        getNotes();
    }, []);



    const handleOpenAddNote = () => {
        setOpenAddEditNote({
                isShown: true,
                type: 'add',
                data: note
            });
        
    }

    return (
        <>
            <Navbar userInfo={userInfo} />

            <div className="container mx-auto">
                <div className='grid grid-cols-3 gap-4 mt-8'>
                    {
                        notes.map((note) => (
                            <NoteCard
                                key={note._id}
                                title={note.title}
                                date={note.createdAt}
                                content={note.content}
                                tags={note.tags}
                                isPinned={note.isPinned}
                                onEdit={() => getNote(note._id)}
                                onDelete={() => {}}
                                onPinNote={() => {}}
                            />
                        ))
                    }
                </div>
            </div>

            <button
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
                onClick={handleOpenAddNote}
            >
                <MdAdd className="text-[32px] text-white"  />
            </button>

            <Modal
                isOpen={openAddEditNote.isShown}
                onRequestClose={() => {}}
                // title={openAddEditNote.type === 'add' ? 'Add Note' : 'Edit Note'}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                    },
                    content: {
                        border: '1px',
                    }
                }}
                shouldCloseOnEsc={true}
                contentLabel="Example modal..."
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5"
            >
                <AddEditNotes
                    noteData={openAddEditNote.data}
                    noteType={openAddEditNote.type}
                    onClose={() => setOpenAddEditNote({ isShown: false, type: 'add', data: null })}
                />
            </Modal>
        </>
    )
}
