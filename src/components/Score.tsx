type props = {
  round: number
  distance: number
  score: number
}
const Score = ({ round, distance = 0, score = 0 }: props) => {
  return (
    <div className="flex flex-col gap-1 w-10">
      <span className="text-center">{round}</span>
      <div className="text-center border-2 border-black">{distance}</div>
      <div className="text-center border-2 border-black">{score}</div>
    </div>
  )
}

export default Score
