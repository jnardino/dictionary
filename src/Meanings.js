import React from 'react';

export default function Meanings(props) {
    return (
        <div>
            <h3 className="result-type">{props.meaning.partOfSpeech}</h3>
            <p>Definition: {props.meaning.definition}</p>
            <em>
                {props.meaning.example != null ? "Example: " : ""}
                {props.meaning.example != null ? `"${props.meaning.example}"`  : null}
            </em>
            <p>
                {props.meaning.synonyms != null ? "Synonyms: " : ""}
                {props.meaning.synonyms != null ? props.meaning.synonyms.map(function(synonyms, index) {
                    return (
                        <div className="synonyms" key={index}>
                            <span>{index === 0 ? "" : ", "}{synonyms}</span>
                        </div>
                    );
                }) : null}
            </p>
        </div>
    );
}