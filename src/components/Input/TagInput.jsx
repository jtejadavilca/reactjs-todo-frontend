import React, { useState } from 'react';
import { MdAdd, MdClose, MdWarning } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

export const TagInput = ({tags, setTags}) => {

  const [inputValue, setInputValue] = useState('');
  const [tagAlreadyExists, setTagAlreadyExists] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTagAlreadyExists(false);
  }

  const addNewTag = () => {
    if (inputValue.trim() === '') return;
    if (tags.includes(inputValue)) {
      setTagAlreadyExists(true);
      return;
    }

    setTags([...tags, inputValue]);
    setInputValue('');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addNewTag();
    }
  }

  const handleToRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div>

        {tags?.length > 0 && (
      <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-2 text-sm text-slate-800">
              #{tag}
              <button onClick={() => handleToRemoveTag(tag)}>
                <MdClose className="text-xs text-red-500" />
              </button>
            </span>
          ))}
      </div>
        )}

      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          className="w-full text-sm bg-transparent border px-3 py-2 rounded outline-none"
          placeholder='Add tags'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {tagAlreadyExists && (
          <>
            <Tooltip anchorSelect='.warning' place='top-start' variant='dark' >
            Tag already exists
            </Tooltip>
            <MdWarning className='warning w-10 text-red-800' />
          </>
        )}

        <button
          className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
          onClick={addNewTag}
        >
          <MdAdd className="w-full h-full text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  )
}
