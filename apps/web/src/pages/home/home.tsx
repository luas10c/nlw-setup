import { Header } from '../../components/header'
import { SummaryTable } from '../../components/summary-table'

export const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}
