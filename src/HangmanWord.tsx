type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}>
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span key={index} style={{ borderBottom: ".1em solid black" }}>
            <span
              style={{
                visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}>
              {letter}
            </span>
          </span>
        )
      })}
    </div>
  )
}
