import React from 'react';

import Meanings from "./Meanings"

export default function Results(props) {
   if (props.results) {
        return (
            <div>
                <h2>{props.results.word}</h2>
                <p className="phonetic">/{props.results.phonetic}/</p>
                {props.results.meanings.map(function(meaning, index) {
                    return (
                        <div className="results" key={index}>
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