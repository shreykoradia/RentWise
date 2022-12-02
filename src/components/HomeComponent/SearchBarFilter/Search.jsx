import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './searchBar.css'

const Search = ({value , changeInput}) => {
  return (
    <div className='searchBar-wrap'>
        <SearchIcon className="searchBar-icon" />
        <input 
        type='text'
        placeholder="Enter invalid Property Title to See 404 Error (ex. Mumbai) "
        value={value}
        onChange={changeInput}
        /> 
    </div>
  )
}

export default Search