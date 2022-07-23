
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function MyApp({ Component, pageProps }: AppProps) {
  const themeValues = [
    "lofi",
    "luxury",
    "forest"
  ]
  useEffect(() => {
    themeChange(false)
  })
  return(
    <>
      <select data-choose-theme className='text-primary' name="theme-changer" id="theme">
        <option className='text-primary' value="">Change Theme?</option>
        {themeValues.map((value: string) => (
          <option className='text-primary' key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
        ))}
      </select>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
