import React from 'react';

export default function Meanings(props) {
    return (
        <div>
            <h3 className="result-type">{props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definition}</p>
            <em>Example:"{props.meaning.example}"</em>
            <p>Synonyms:
                {props.meaning.synonyms != null ? props.meaning.synonyms.map(function(synonyms, index) {
                    return (
                        <div className="synonyms" key={index}>
                            <span>{synonyms}</span>
                        </div>
                    );
                }) : null}
            </p>
        </div>
    );
}