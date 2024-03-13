import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    const responce = await fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    );
    const data = await responce.json();
    setData(data.jokes);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Type</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.category}</td>
                <td>{e.type}</td>
                <td>{e.joke}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Home;
