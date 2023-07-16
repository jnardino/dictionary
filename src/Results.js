import React from 'react';

import Meanings from "./Meanings"

export default function Results(props) {
    console.log(props.results);
   if (props.results) {
        return (
            <div className="results">
                <h2>{props.results.word}</h2>
                <p>/{props.results.phonetic}/</p>
                {props.results.meanings.map(function(meaning, index) {
                    return (
                        <div key={index}>
                            <Meanings meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
   } else {
    return null;
   }
}