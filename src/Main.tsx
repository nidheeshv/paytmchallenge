import React from "react";
import "./App.scss";
import { useQuery } from "react-query";

export default function Main() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "http://api.exchangeratesapi.io/latest?access_key=2018b35878a889a84bcf90a3338ee816"
    ).then((res) => res.json())
  );

  console.log("data", data);
  if (isLoading) return <>"Loading..."</>;

  if (error) return <div>"An error has occurred: " + error?.message </div>;

  return (
    <div>
      <h1 className="bg-blue-300">Currency</h1>
      <p>{data.description}</p>
    </div>
  );
}
