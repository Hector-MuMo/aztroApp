import React from 'react'
import "../Style/ZodiacCard.css"

interface ZodiacObject {
    info?: {
        color: string
        compatibility: string
        current_date: string
        date_range: string
        description: string
        lucky_number: string
        lucky_time: string
        mood: string
    }
    error?: string
}

interface ZodiacCardProps {
    zodiac: ZodiacObject
}

const ZodiacCard = ({ zodiac }: ZodiacCardProps) => {
    return (
        <div className='zodiac-card-container'>
            {zodiac && zodiac.info ?
                <div className='zodiac-card-info'>
                    <span>Color: {zodiac.info.color}</span>
                    <span>Compatibility: {zodiac.info.compatibility}</span>
                    <span>Date Range: {zodiac.info.date_range}</span>
                    <span>Lucky Number: {zodiac.info.lucky_number}</span>
                    <span>Lucky Time: {zodiac.info.lucky_time}</span>
                    <span>Mood: {zodiac.info.mood}</span>
                    <span>Prediction: {zodiac.info.description}</span>
                </div>
                :
                <p>{zodiac.error}</p>
            }
        </div>
    )
}

export default ZodiacCard