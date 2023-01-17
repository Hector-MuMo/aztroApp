import { useEffect, useState } from 'react'

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

const useGetZodiacSign = (ZodiacSign: string, day: string) => {
    const [zodiac, setZodiac] = useState<ZodiacObject>({ error: "There's an error trying to get the forecast" });

    const get = async () => {
        const result = await fetch(`https://aztro.sameerkumar.website/?sign=${ZodiacSign}&day=${day}`, {
            method: "post"
        })

        const zodiac = await result.json()

        console.log(zodiac);

        if (zodiac) {
            setZodiac({ info: zodiac })
        } else {
            setZodiac({ error: "There's an error trying to get the forecast" })
        }
    }

    useEffect(() => {
        get()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ZodiacSign, day]);

    return { zodiac }
}

export default useGetZodiacSign