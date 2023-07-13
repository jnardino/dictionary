import React, { useState } from 'react';

export default function DictionarySearch() {
    let [keyword, setKeyword] = useState("");
   
    function search(event) {
        event.preventDefault();
        alert (`${keyword}`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="dictionarySearch">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}></input>
            </form>
        </div>
    );
}