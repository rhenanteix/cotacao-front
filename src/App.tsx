import './App.css'
import { QuotePage } from './pages/QuotePage'
import { QuoteHistory } from './pages/QuoteHistory'
import { QuoteDetails } from './pages/QuoteDetails.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuotePage />} />
        <Route path="/history" element={<QuoteHistory />} />
        <Route path="/quotes/:id" element={<QuoteDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
