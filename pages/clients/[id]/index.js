import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[projectId]",
      query: {
        id: "moussa",
        projectId: "projectA",
      },
    });
  }
  return (
    <section>
      <h1>Projects Of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </section>
  );
}

export default ClientProjectPage;
