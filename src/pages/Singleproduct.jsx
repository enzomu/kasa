import React from 'react'
import { useParams, Navigate } from 'react-router'
import logements from '../logements.json'
import SlidePictures from '../components/SlidePictures'
import Stars from '../components/Stars'
import Collapse from '../components/Collapse'

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
                <div className="logements-header__SingleProduct">
                    <h1 className="SingleProduct__title">{title}</h1>
                    <h2 className="SingleProduct__location">{location}</h2>
                    <div className="SingleProduct__tags">
                        {tags.map((tag) => {
                            return (
                                <p key={`${tag}`} className="tag">
                                    {tag}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div className="logements-header__host">
                    <div className="host__profile">
                        <p className="host__name">{host.name}</p>
                        <img
                            className="host__pic"
                            src={host.picture}
                            alt="hébergeur {host.name}"
                        />
                    </div>
                    <div className="host__rating">
                        <Stars rate={rating} />
                    </div>
                </div>
            </div>
            <div className="logements-body">
                <Collapse
                    className="logements-body__SingleProduct"
                    title="Description"
                    description={
                        <p className="logements-body__SingleProduct-details">{`${description}`}</p>
                    }
                />
                <Collapse
                    className="logements-body__SingleProduct"
                    title="Équipements"
                    description={
                        <ul className="logements-body__SingleProduct-details">
                            {equipments.map((equipment) => {
                                return <li key={`${equipment}`}>{equipment}</li>
                            })}
                        </ul>
                    }
                />
            </div>
        </main>
    )
}
export default Singleproduct
