import React from 'react'
import { useParams, Navigate } from 'react-router'
import logements from '../logements.json'
import SlidePictures from '../components/SlidePictures'

const Singleproduct = () => {
    const { id } = useParams()
    const logement = logements.find((logement) => logement.id === id)
    if (!logement) {
        Navigate('*')
    }
    const { title, location, tags, host, rating, description, equipments } =
        logement || {}

    return (
        <main>
            <SlidePictures />
            <div className="logements-header">
                <div className="ads-header__rental">
                    <h1 className="rental__title">{title}</h1>
                    <h2 className="rental__location">{location}</h2>
                </div>
            </div>
        </main>
    )
}
export default Singleproduct
