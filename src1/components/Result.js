import React from 'react'

function Result({result}) {
    return (
        <section className="result">
            <img src="result.Poster" alt="images" />
            <h3>{result.Title}</h3>
        </section>
    )
}

export default Result