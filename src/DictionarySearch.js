import React, { useState } from 'react';

import Results from "./Results";
import axios from "axios";

export default function DictionarySearch() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
   
    function handleResponse(response) {
        setResults(response.data);
;    }

    function search(event) {
        event.preventDefault();
        //documentation: https://www.shecodes.io/learn/apis/dictionary
        let key = `9ba41c950084bff0a243d378ot023fbe`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="row search-space">
                <form className="dictionary-search" onSubmit={search}>
                    <input className="col-sm-11 form-control" placeholder="Enter a word..." type="search" autoFocus={true} onChange={handleKeywordChange}></input>
                    <button	className="btn col-sm-01 btn-primary" type="submit" onSubmit={search}>
                        Search
                    </button>
                </form>
            <Results results={results}/>
        </div>
    );
}