import type { AppProps } from 'next/app'
import '../styles/globals.css'

function FlixFlex({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default FlixFlex;
