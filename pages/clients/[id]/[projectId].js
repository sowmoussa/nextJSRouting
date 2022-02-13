import { useRouter } from "next/router";

function ClientProjectPage() {
    const router = useRouter();

    console.log(router.query);
    return (
      <section>
        <h1>A selected project for a client</h1>
      </section>
    );
  }
  
  export default ClientProjectPage;