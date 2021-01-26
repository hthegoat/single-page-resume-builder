import React from "react";

export default function CompanyDescription({ company }) {
  return (
    <ul>
      {company.description.map((data, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>
      ))}
    </ul>
  );
}
