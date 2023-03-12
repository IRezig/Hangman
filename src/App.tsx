import React, { useState } from "react"
import Words from "./WordsList.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    const randomIndex = Math.floor(Math.random() * Words.length)
    return Words[randomIndex]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetter = guessedLetters.filter(letter => !wordToGuess.includes(letter))
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
        Lose Win
      </div>
      <HangmanDrawing numberOfGuess={incorrectLetter.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
