import React, { useState, useEffect } from 'react';
import './Notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(savedNotes);
  }, []);

  const handleAddNote = () => {
    setTitle('');
    setDescription('');
    setIsUpdate(false);
    setUpdateId(null);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setTitle('');
    setDescription('');
    setIsUpdate(false);
    setUpdateId(null);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    if (!title.trim() && !description.trim()) return;

    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const noteInfo = {
      title: title.trim(),
      description: description.trim(),
      date: `${month} ${day}, ${year}`
    };

    let updatedNotes;
    if (isUpdate) {
      updatedNotes = notes.map((note, index) => 
        index === updateId ? noteInfo : note
      );
    } else {
      updatedNotes = [...notes, noteInfo];
    }

    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    handleClosePopup();
  };

  const handleEditNote = (noteId) => {
    const note = notes[noteId];
    setTitle(note.title);
    setDescription(note.description);
    setIsUpdate(true);
    setUpdateId(noteId);
    setShowPopup(true);
  };

  const handleDeleteNote = (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const updatedNotes = notes.filter((_, index) => index !== noteId);
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
  };

  return (
    <div className="notes-page">
      <div className="notes-container">
      {showPopup && (
        <div className="popup-box">
          <div className="popup">
            <div className="content">
              <header>
                <p>{isUpdate ? 'Update a Note' : 'Add a new Note'}</p>
                <i className="uil uil-times" onClick={handleClosePopup}></i>
              </header>
              <form onSubmit={handleSaveNote}>
                <div className="row title">
                  <label>Title</label>
                  <input
                    type="text"
                    spellCheck="false"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter note title..."
                  />
                </div>
                <div className="row description">
                  <label>Description</label>
                  <textarea
                    spellCheck="false"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter note description..."
                  ></textarea>
                </div>
                <button type="submit">{isUpdate ? 'Update Note' : 'Add Note'}</button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="wrapper">
        <li className="add-box" onClick={handleAddNote}>
          <div className="icon"><i className="uil uil-plus"></i></div>
          <p>Add new note</p>
        </li>

        {notes.map((note, index) => (
          <NoteItem
            key={index}
            note={note}
            onEdit={() => handleEditNote(index)}
            onDelete={() => handleDeleteNote(index)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

const NoteItem = ({ note, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowMenu(false);
    };

    if (showMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <li className="note">
      <div className="details">
        <p>{note.title}</p>
        <span dangerouslySetInnerHTML={{ __html: note.description.replaceAll('\n', '<br/>') }}></span>
      </div>
      <div className="bottom-content">
        <span>{note.date}</span>
        <div className="settings">
          <i onClick={toggleMenu} className="uil uil-ellipsis-h"></i>
          {showMenu && (
            <ul className="menu">
              <li onClick={onEdit}>
                <i className="uil uil-pen"></i>Edit
              </li>
              <li onClick={onDelete}>
                <i className="uil uil-trash"></i>Delete
              </li>
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};

export default Notes;
