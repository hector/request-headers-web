import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const headersArray = Array.from(headersList.entries());

  return (
    <div>
      <h1>Request Headers</h1>
      <ul>
        {headersArray.map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
