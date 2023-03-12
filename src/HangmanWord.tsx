export function HangmanWord(): JSX.Element {
  const wordToGuess = "TEST"
  const guessedLetters = ["T", "E"]
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
