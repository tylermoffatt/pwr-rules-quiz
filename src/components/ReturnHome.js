import Link from 'next/link';

export default function ReturnHome() {
  return (
    <div>
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Home
        </button>
      </Link>
    </div>
  )
}