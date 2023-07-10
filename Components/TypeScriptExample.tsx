// Pedro Tech Typescript Examples: https://www.youtube.com/watch?v=1jMJDbq7ZX4

import { useState } from 'react'

type Props = {
  name: string
  age: number
  email?: string
  getName?: (name: string) => string
}

export function TypeScriptExample(props: Props) {

  type NameType = "Pedro" | "Diego"
  const nameForType: NameType = "Pedro"
  
  const [country, setCountry] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      Hello {props.name}, your age: {props.age}, your country is: {country}
      <input
        type="text"
        placeholder="Type your country"
        onChange={handleChange}
      ></input>
    </div>
  )
}
