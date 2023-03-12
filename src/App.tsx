import React, { useCallback, useEffect, useState } from "react"
import Words from "./WordsList.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetter = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLoser = incorrectLetter.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters(currentLetter => [...currentLetter, letter])
    },
    [guessedLetters, isLoser, isWinner]
  )

  function getWord() {
    return Words[Math.floor(Math.random() * Words.length)]
  }
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (!key.match(/[a-z]/i)) return

      event.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return () => document.removeEventListener("keypress", handler)
  }, [guessedLetters])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (key !== "Enter") return

      event.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler)
    return () => document.removeEventListener("keypress", handler)
  }, [])


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "800px",
        margin: "0 auto",
        height: "100vh",
        gap: "2rem",
      }}>
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}>
        {isLoser ? "You lost!" : "Refresh to play again"}
        {isWinner ? "You won!" : "Refresh to play again"}
      </div>
      <HangmanDrawing numberOfGuess={incorrectLetter.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isLoser}
          activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetter={incorrectLetter}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App
