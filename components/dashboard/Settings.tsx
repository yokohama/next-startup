import { Alert } from "components/Alert"
import { DashboardProps } from "components/DashboardLayout"

export const Settings = ({alertList, setAlertList}: DashboardProps) => {
  const handleOnClick = () => {
    setAlertList([
      ...alertList, 
      <Alert key={alertList.length+1} message='なにかが発生しました！' />
    ])
  }

  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
        <div className="w-full mb-10">
          <div className="text-6xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-lg text-indigo-700 text-center px-5">
            Settings
          </p>
          <div className="text-6xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div>
          <p className="text-lg text-indigo-700 text-center px-5">
            以下、動作確認用
          </p>
          <ul>
           <li><a href='#' onClick={handleOnClick}>アラート発火</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}