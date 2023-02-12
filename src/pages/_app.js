import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Toaster />
  </>
}


// ** /currancy , /customer-order , manage-order , transactions , users , users/manage */


