"use client"
export default function Home() {
  const handleClick =  async () => {
    let data = {
      name: "John Doe",
      age: 30,
      email: "John@gmail.com"
    };
 let a = await fetch('/api/add', { 
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ data }),
});
 let res = await a.json();
  console.log(res);
}
  return (
    <div>
      <h1 className="text-2xl font-bold">Next.js Api routes 
      </h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
