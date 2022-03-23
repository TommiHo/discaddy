import Score from "./Score"

const ScoreList = () => {
  const rounds = []
  for (let i = 1; i <= 20; i++) {
    rounds.push(i)
  }

  return (
    <div className="flex flex-wrap justify-items-center gap-4 m-8">
      {rounds.map((round) => (
        <Score key={round} round={round} distance={0} score={0} />
      ))}
    </div>
  )
}

export default ScoreList
