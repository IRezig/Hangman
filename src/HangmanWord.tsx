type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
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
          <span style={{ borderBottom: ".1em solid black" }}>
            <span
              key={index}
              style={{
                visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
              }}>
              {letter}
            </span>
          </span>
        )
      })}
    </div>
  )
}
