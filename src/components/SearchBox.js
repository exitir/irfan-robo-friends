import React from 'react';

const SearchBox = ({searchchange}) => {
    return (
        <div>
            <input
                className='pa3 ba b--green bg-light-blue'
                type='search'
                placeholder='search robots'
                onChange = {searchchange}
                />
        </div>
    );
}

export default SearchBox;