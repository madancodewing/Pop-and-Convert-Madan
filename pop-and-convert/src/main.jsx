import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RichTextEditor from './assets/Component/RIchText'


// import App from './App'
import PracticeQuery from './assets/Query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      <PracticeQuery />
      <RichTextEditor />
    </QueryClientProvider>

  </React.StrictMode>,
)
