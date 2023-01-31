import React, { useState } from 'react';

const ToolBar = ({ insertSpeaker }) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [favorite, setFavorite] = useState(false);

  const handleSubmit = () => {
    insertSpeaker(first, last, favorite);
    setFirst('');
    setLast('');
    setFavorite(false);
    setToggleOpen(!toggleOpen);
  };
  return (
    <>
      <button
        className="button bg-primary"
        onClick={() => setToggleOpen(!toggleOpen)}
      >
        Insert Speaker
      </button>
      {toggleOpen && (
        <section className="toolbar">
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <label htmlFor="first">
              First
              <input
                id="first"
                type="text"
                style={{ marginLeft: '4px' }}
                placeholder="Enter First Name"
                onChange={(e) => setFirst(e.target.value)}
              />
            </label>
            <label htmlFor="last">
              Last
              <input
                id="last"
                type="text"
                style={{ marginLeft: '4px' }}
                placeholder="Enter Last Name"
                onChange={(e) => setLast(e.target.value)}
              />
            </label>
            <label htmlFor="favorite">
              Favorite
              <input
                id="favorite"
                type="checkbox"
                style={{ marginLeft: '4px' }}
                placeholder="Enter First Last"
                value={favorite}
                onChange={() => setFavorite(!favorite)}
              />
            </label>
            <button onClick={handleSubmit}>Add</button>
          </div>
        </section>
      )}
    </>
  );
};

export default ToolBar;
