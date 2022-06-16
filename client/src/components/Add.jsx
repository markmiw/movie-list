import React from 'react';
var Add = (props) => {
  return (
    <form className='add' onSubmit={(event) => {
      props.handleAdd(event);
      }}>
      <input type='text' placeholder='Add...' onChange={(event) => {
      props.onChangeAdd(event);
      }}></input>
      <button type='button' onClick={(event) => {
      props.handleAdd(event);
      }}>Add</button>
    </form>
  );
};

export default Add;
