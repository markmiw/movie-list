import React from 'react';
var Search = (props) => {
  return (
    <form className='searchbar' onSubmit={(event) => {
      props.handleSubmit(event);
      }}>
      <input type='text' placeholder='Search...' onChange={(event) => {
      props.onChangeSearch(event);
      }}></input>
      <button type='button' onClick={(event) => {
      props.handleSubmit(event);
      }}>Search</button>
    </form>
  );
};

export default Search;
