import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import store from '../redux/store/store'
import App from './index'

const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   retry: false,
   refetchOnWindowFocus: false,
  },
 },
})

const MainApp = () =>
 <QueryClientProvider client={queryClient}>
  <Provider store={store}>
   <BrowserRouter>
    <Routes>
     <Route path="/*" element={<App/>}/>
    </Routes>
   </BrowserRouter>
  </Provider>
  <ReactQueryDevtools initialIsOpen={true}/>
 </QueryClientProvider>

export default MainApp
