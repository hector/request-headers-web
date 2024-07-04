import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const headersArray = Array.from(headersList.entries());

  // Sort headersArray by key
  headersArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

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
