import React, { useCallback, useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from "tsparticles-engine"
import type { Engine } from "tsparticles-engine";
import './App.css';
import SearchBox from './components/SearchBox';
import ZodiacCard from './components/ZodiacCard';
import useGetZodiacSign from './hooks/useGetZodiacSign';


function App() {
    const [zodiacChoosen, setZodiacChoosen] = useState("aries");
    const { zodiac } = useGetZodiacSign(zodiacChoosen, "today")
    const configs: ISourceOptions = {
        background: { color: "#111" },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#ffffff", "#0A52FB", "#F7EF09", "#EE0A0A", "#F0870A",]
            },
            shadow: {
                blur: 50,
                color: "#fff",
                enable: true,

            },
            shape: {
                type: "star"
            },
            opacity: {
                value: .8
            },
            size: {
                value: { min: 1, max: 8 }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#fff",
                opacity: 0.4,
                width: 1
            },
            move: {
                direction: "none",
                enable: true,
                speed: 1,
                random: true,
                straight: false,
                outModes: "out"
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                }
            }
        }
    };

    const handleZodiacChoosen = (value: string) => {
        setZodiacChoosen(value)
    }

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])


    return (
        <div className="App">
            <Particles options={configs} init={particlesInit} />
            <main>
                <SearchBox onSelection={handleZodiacChoosen} />
                <ZodiacCard zodiac={zodiac} />
            </main>
        </div>
    );
}

export default App;
