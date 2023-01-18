import { Header } from './components/header'
import { SummaryTable } from './components/summary-table'

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}

export default App
