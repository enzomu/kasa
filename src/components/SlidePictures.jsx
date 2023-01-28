import { useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../logements.json'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

export default function SlidePictures() {
    const { id } = useParams()
    const { pictures } = logements.find((logement) => logement.id === id)
    const [current, setCurrent] = useState(0)
    const slideToRight = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }
    const slideToLeft = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }
    return (
        <section className="SlidePictures">
            {pictures.length > 1 && (
                <img
                    className="arrowLeft"
                    src={arrowLeft}
                    alt="flèche gauche"
                    onClick={slideToLeft}
                />
            )}
            {pictures.length > 1 && (
                <img
                    className="arrowRight"
                    src={arrowRight}
                    alt="flèche droite"
                    onClick={slideToRight}
                />
            )}
            {pictures.map((picture, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <img
                                className="Slide__img"
                                src={picture}
                                alt={pictures.description}
                            />
                        )}
                        {index === current && (
                            <span className="Slide__img-count">
                                {current + 1}/{pictures.length}
                            </span>
                        )}
                    </div>
                )
            })}
        </section>
    )
}
