import { useState } from 'react';

export default function SearchForm({ searchText, setSearchText }) {
  return (
    <form
      action='#'
      className='search'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <button type='submit'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        spellCheck='false'
        type='text'
        required
        placeholder='Find remote developer jobs...'
      />
    </form>
  );
}
