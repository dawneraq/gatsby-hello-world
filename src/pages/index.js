import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Number of times clicked: {count}
      </button>
    </div>
  )
}

export default () => <Counter />
