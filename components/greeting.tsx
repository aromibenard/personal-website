'use client'
import { useEffect, useState } from "react";

const greetings = [
    'Hello..', 'Bonjour..', 'Hola..', 'Ciao..', 'Hallo..', 'Salam..', 'Niaje..', 'Hi..'
]

export default function Greeting() {
    const [displayGreeting, setDisplayGreeting] = useState('')
    const [greetingIndex, setGreetingIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused) return

        const currentGreeting = greetings[greetingIndex]

        const timeout = setTimeout(() => {
        if (!deleting) {
            if (charIndex < currentGreeting.length) {
                setDisplayGreeting(currentGreeting.slice(0, charIndex + 1))
                setCharIndex(charIndex + 1)
            } else {
                setIsPaused(true)
                setTimeout(() => {
                    setDeleting(true)
                    setIsPaused(false)
                }, 1000) // pause after typing
            }
        } else {
            if (charIndex > 0) {
                setDisplayGreeting(currentGreeting.slice(0, charIndex - 1))
                setCharIndex(charIndex - 1)
            } else {
                setDeleting(false)
                setGreetingIndex((greetingIndex + 1) % greetings.length)
                setIsPaused(true)
                setTimeout(() => {
                    setIsPaused(false)
                }, 200) // pause after deleting
            }
        }
        }, deleting ? 100 : 200)

        return () => clearTimeout(timeout)
    }, [charIndex, deleting, greetingIndex, isPaused])

    return (
        <div className="font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        {displayGreeting}
        <span className="text-purple-600 animate-pulse">|</span>
        </div>
    )
}