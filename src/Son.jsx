import React, { memo } from "react";

// Memoize the Son component
export const Son = memo(({ numero, increment }) => {
    console.log('again reloaded...');
    return (
        <button className="btn btn-primary mr-3" onClick={() => { increment(numero) }}>
            {numero}
        </button>
    )
});
