import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  useEffect(() => {

    async function fetchData() {
      const res = await fetch('/api');
      const data = await res.json();

      setTodos(data);
      console.log(data);
    }

    fetchData();
  }, []);

  const clickHandler = async () => {
    const res = fetch("/api", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await (await res).json()
    console.log(data)
  }

  return (
    <>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.todo}</li>
          ))
        }

        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />

        <button onClick={clickHandler}>create todo</button>
      </ul>
    </>
  );
}
