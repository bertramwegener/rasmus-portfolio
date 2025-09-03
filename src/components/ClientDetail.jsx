import { useParams } from "react-router";
import { useEffect, useState } from "react";
// import {clients} from "../data/clients.json"

export default function Detail() {
  const [client, setClient] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/clients.json");
      const data = await response.json();
      console.log(data);
      console.log(id);
      const clientData = data.find((c) => c.id === id);
      setClient(clientData);
    }
    getData();
  }, []);

  const { id } = useParams();
  return (
    <section>
      <article>
        <h3>{client.name}</h3>
        <h4>{client.subtitle}</h4>
        <p>{client.body}</p>
      </article>
      <figure>
        <img src={client.image} alt="{client.name}" />
      </figure>
    </section>
  );
}