import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {Provider}  from 'react-redux'
// import { BookStore } from './Store/Store.jsx'
import { AppProvider } from './Provider/Context/AppContext.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider >

    {/* <Provider store={BookStore}> */}
      <App/>
    {/* </Provider> */}
    </AppProvider>
  </StrictMode>,
)
