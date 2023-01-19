import { Routes, Route } from 'react-router-dom'

import { History } from './src/pages/History'
import { Home } from './src/pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}