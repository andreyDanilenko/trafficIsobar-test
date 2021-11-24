import React from 'react'
import Cat from '../cat/Cat'
import './example.scss'

function Example() {
    return (
        <div className="example">
            <div className="example__wrapper-title">
                <div className="example__title-line-left"></div>
                <h2 className="example__title">Примеры</h2>
                <div className="example__title-line-right"></div>
            </div>
            <Cat />
        </div>
    )
}

export default Example
