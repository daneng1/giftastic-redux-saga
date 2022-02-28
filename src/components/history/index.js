import React from "react";

export default function History({ searches, loading, error, setInput, handleClick }) {

    return (
        <>
        {loading && <h2>Loading...</h2>}
        {error && !loading && <h2>{error}</h2>}
        {searches.length > 0 &&
            <div>
                <label>Previous Searches
                    <ul>
                        {searches.map((item) => {
                            return (
                                <li onClick={(e) => handleClick(e)} onMouseEnter={() => setInput(item.data)} value={item.data} key={item.id}>{item.data}</li>
                        )})}
                    </ul>
                </label>
            </div>
        }
        </>
    )
}