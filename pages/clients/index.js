import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "moussa", name: "Moussa" },
    { id: "malick", name: "Malick" },
    { id: "khadime", name: "Khadime" },
  ];
  return (
    <section>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ClientsPage;
