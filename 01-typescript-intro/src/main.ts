import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
Hello World
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
