import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState();


  const clickHandler = async () => {
    const res = fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await (await res).json()
    console.log(data)
  }
  
  return (
    <>
      <h1>
        connecting dataBase to next.js project
      </h1>
      <ul>

        <input type="text" value={name} onChange={e => setName(e.target.value)} />

        <button onClick={clickHandler}>POST</button>
      </ul>
    </>
  );
}
