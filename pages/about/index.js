import Router from 'next/router';

export default function About() {

    const linkClickHandler = (url) => {
        Router.push(url);
    }

    return (
        <>
            <h1>This About page</h1>
            <button onClick={() => linkClickHandler('/')}>Go back to Home</button>
            <button onClick={() => linkClickHandler('/posts')} >Go to posts</button>
        </>
    );
}