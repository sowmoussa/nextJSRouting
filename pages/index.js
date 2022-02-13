import Link from "next/link";

function HomePage() {
  return (
    <section>
      <p>Hello, I am Moscar</p>
      <ul>
        <li>
          <Link  href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link  href="/clients">Clients</Link>
        </li>
      </ul>
    </section>
  );
}

export default HomePage;
