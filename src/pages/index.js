import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api');
      const data = await res.json();
      setTodos(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.todo}</li>
          ))
        }
      </ul>
    </>
  );
}
