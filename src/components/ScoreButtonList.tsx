import ScoreButton from "./ScoreButton"

const ScoreButtonList = () => {
  const buttonValues = []

  for (let i = 0; i <= 5; i++) {
    buttonValues.push(i)
  }

  return (
    <div className="flex flex-row justify-around absolute bottom-8 w-full ">
      {buttonValues.map((value) => (
        <ScoreButton key={value} buttonLabel={value} />
      ))}
    </div>
  )
}

export default ScoreButtonList
