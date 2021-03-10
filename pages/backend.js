import Layout from "../components/layout";
export default function Backend() {
  return (
    <Layout>
      See?
      <form action="api/hello">
        <input placeholder="send to database"></input>
        <button onClick={() => requestData}>Sond</button>
      </form>
    </Layout>
  );
}

export async function requestData(data) {
  const response = await fetch(`/api/hello`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  console.log(response.json());
}
