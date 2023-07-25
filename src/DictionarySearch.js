import React, { useState } from 'react';

import Results from "./Results";
import ImageResults from "./ImageResults";
import axios from "axios";

export default function DictionarySearch() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
   
    function handleDictionaryResponse(response) {
        setResults(response.data);
;    }

    function handleImageResponse(response) {
        setPhotos(response.data.photos);
;    }
    
    function search(event) {
        event.preventDefault();
        //documentation: https://www.shecodes.io/learn/apis/dictionary
        let key = `9ba41c950084bff0a243d378ot023fbe`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        //documentation: https://www.shecodes.io/learn/apis/images
        let imageKey = `9ba41c950084bff0a243d378ot023fbe`;
        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageKey}`;
        axios.get(imageApiUrl).then(handleImageResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div>
            <form className="row main-search" onSubmit={search}>
                <div className="col-9 col-sm-10 search-area">
                    <input className="form-control search-bar" placeholder="What word do you want to look up?" type="search" autoFocus={true} onChange={handleKeywordChange}></input>
                </div>
                <button	className="btn col-3 col-sm-2 button-50" type="submit" onSubmit={search}>
                    Search
                </button>
            </form>
            <Results results={results}/>
            <ImageResults photos={photos}/>
        </div>
    );
}