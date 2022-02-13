import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname, 'm', router.query)
  return (
    <section>
      <p>PortfolioProjectPage</p>
    </section>
  );
}

export default PortfolioProjectPage;
