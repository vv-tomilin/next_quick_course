import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next title Home Hello</title>
        <meta name="keywords" content="next, javascript, nextjs, react" ></meta>
        <meta name="description" content="This is YouTube tutorial for NextJS"></meta>
        <meta charSet="utf-8"/>
      </Head>
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
