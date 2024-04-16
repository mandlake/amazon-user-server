"use client";

import { NextPage } from "next";
import "./article.css";

const Main = (props: ICompany) => {
  return (
    <>
      <tr>
        <td>{props.company}</td>
        <td>{props.contact}</td>
        <td>{props.country}</td>
      </tr>
    </>
  );
};

const CompaniesPage: NextPage = () => {
  const articles = [
    {
      id: 1,
      company: "Alfreds Futterkiste",
      contact: "Maria Anders",
      country: "Germany",
    },
    {
      id: 1,
      company: "Centro comercial Moctezuma",
      contact: "Francisco Chang",
      country: "Mexico",
    },
    {
      id: 1,
      company: "Ernst Handel",
      contact: "Roland Mendel",
      country: "Austria",
    },
    {
      id: 1,
      company: "Island Trading",
      contact: "Helen Bennett",
      country: "UK",
    },
    {
      id: 1,
      company: "Laughing Bacchus Winecellars",
      contact: "Yoshi Tannamuri",
      country: "Canada",
    },
    {
      id: 1,
      company: "Magazzini Alimentari Riuniti",
      contact: "Giovanni Rovelli",
      country: "Italy",
    },
  ];
  const companyList = articles.map((v, i) => (
    <Main
      key={i}
      id={v.id}
      company={v.company}
      contact={v.contact}
      country={v.country}
    />
  ));
  return (
    <>
      <h1>게시글 목록</h1>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>{companyList}</tbody>
      </table>
    </>
  );
};

export default CompaniesPage;
