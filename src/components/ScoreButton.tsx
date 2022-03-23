type props = {
  buttonLabel: number
}
const ScoreButton = ({ buttonLabel }: props) => {
  return <button type="button">{buttonLabel}</button>
}

export default ScoreButton
