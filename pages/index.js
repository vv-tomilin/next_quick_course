import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello NextJS</h1>
      <p>This text</p>
      <ul>
        <li>
          <Link href={'/about'}><a>About</a></Link>
        </li>
        <li>
          <Link href="/posts"><a>Posts</a></Link>
        </li>
      </ul>
    </div>
  )
}
