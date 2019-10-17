import React from 'react';
function Head() {
    return (
        <div>
            <h1>
                Header Component
            </h1>
        </div>
    );
}

export function MyComp() {
    let msg = 'This is my comp';
    return (
        <div>
            <Head />
            <h2>{msg}</h2>
        </div>
    )
}