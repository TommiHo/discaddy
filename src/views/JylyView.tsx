import ScoreButtonList from "../components/ScoreButtonList"
import ScoreList from "../components/ScoreList"
import { useTranslation } from "react-i18next"

const JylyView = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t("score")}</h1>
      <ScoreList />
      <ScoreButtonList />
    </div>
  )
}

export default JylyView
