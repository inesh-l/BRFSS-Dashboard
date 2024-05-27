import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { getOrUploadFile } from './lib/llm/gemini-functions.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
