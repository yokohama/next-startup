import { ExamA } from 'components/user/dashboard/ExamA'
import { ExamB } from 'components/user/dashboard/ExamB'
import { ExamC } from 'components/user/dashboard/ExamC'
import { ExamD } from 'components/user/dashboard/ExamD'

type Props = {}

export const Dashboard: React.FC<Props> = ({ }: Props) => {
  return (
    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
        <div className="flex flex-col flex-wrap sm:flex-row ">
          <div className="w-full sm:w-1/2 xl:w-1/3">
            <ExamA />
            <ExamB />
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3">
            <ExamC />
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3">
            <ExamD />
          </div>
        </div>
      </div>
    </div>
  )
}