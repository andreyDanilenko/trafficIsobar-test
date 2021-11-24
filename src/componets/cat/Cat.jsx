import React, { useEffect, useState } from 'react'
import './car.scss'


function Cat() {
    const [loaded, setLoaded] = useState(false);
    const [isLoader, setIsLoader] = useState(false)
    const [cat, setCat] = useState('');

    useEffect(() => {
        setIsLoader(true)
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then((result) => setCat(result[0].url))
            .then(() => {
                setTimeout(() => {
                    setIsLoader(false)
                }, 1000);
            })
    }, [loaded])

    function getCat() {
        setLoaded(!loaded)
    }

    return (
        <div className="cat">
            <div className="cat__card">
                <h3 className="cat__card-title">Картинка с котом</h3>
                {isLoader ? <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
                    <img src={cat} alt="" />
                }
                <div className="cat__button-wrapper">
                    <button onClick={() => getCat()} className="cat__button">Загрузить другую</button>
                </div>
            </div>
        </div>
    )
}

export default Cat
