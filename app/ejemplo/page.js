import React from 'react'

const Ejemplo = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        next: {
            tags: ['ejemplo']
        }
    });
    const result = await data.json();
    console.log({result});
  return (
    <div>{result.title}</div>
  )
}

export default Ejemplo