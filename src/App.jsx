import { useState } from 'react'
import Page1 from './pages/Page1.jsx'
import Page2 from './pages/Page2.jsx'
import Page3 from './pages/Page3.jsx'

export default function App() {
  const [page, setPage] = useState(1)

  const next = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setPage(p => p + 1)
  }

  if (page === 1) return <Page1 onNext={next} />
  if (page === 2) return <Page2 onNext={next} />
  return <Page3 />
}
