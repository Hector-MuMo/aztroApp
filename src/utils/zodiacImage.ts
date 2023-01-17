import aries from "../images/aries.png"
import taurus from "../images/tauro.png"
import gemini from "../images/geminis.png"
import cancer from "../images/cancer.png"
import leo from "../images/leo.png"
import virgo from "../images/virgo.png"
import libra from "../images/libra.png"
import scorpio from "../images/escorpio.png"
import sagittarius from "../images/sagitario.png"
import capricorn from "../images/capricornio.png"
import aquarius from "../images/acuario.png"
import pisces from "../images/piscis.png"

const zodiacImage = (value: string) => {
    switch (value) {
        case "aries":
            return aries
        case "taurus":
            return taurus
        case "gemini":
            return gemini
        case "cancer":
            return cancer
        case "leo":
            return leo
        case "virgo":
            return virgo
        case "libra":
            return libra
        case "scorpio":
            return scorpio
        case "sagittarius":
            return sagittarius
        case "capricorn":
            return capricorn
        case "aquarius":
            return aquarius
        case "pisces":
            return pisces
        default:
            break;
    }
}

export { zodiacImage }
