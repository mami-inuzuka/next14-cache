import { headers } from "next/headers";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function TodoPage({ params }: Props) {
  const response = await fetch(`http://localhost:3001/todos/${params.id}`).then(
    (res) => {
      return res;
    },
  );

  const todo = await response.json();

  const headersList = headers();
  const referer = headersList.get("referer");
  return (
    <div>
      Referer: {referer}
      <Link href="/">Home</Link>
      <h1>Todo</h1>
      <p>{todo.title}</p>
      <p>{todo.timestamp}</p>
    </div>
  );
}
