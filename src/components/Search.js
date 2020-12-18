import React from 'react'

export default function Search(props) {
  console.log(props);
  const { setSearchTerm } = props;

  const changeHandler = (e) => {
    // not the same variable as searchTerm in App.js
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  }

  return (
    <div className='search-friends container'>
      <input onChange={changeHandler} />
    </div>
  )
}
