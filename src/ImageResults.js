import React from 'react';

export default function ImageResults(props) {
    if (props.photos) {
    return (
        <section className="results result-images">
            <div className="row">
                {props.photos.map(function(photos, index) {
                    return (
                        <div className="col-4" key={index}>
                            <img src={photos.src.landscape} alt={photos.alt} className="img-fluid images" />
                        </div>
                        )
                })}
            </div>
        </section>)
    } else {
    return null;
   }
}