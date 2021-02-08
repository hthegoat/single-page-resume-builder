import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import SectionHeader from "./SectionHeader";

export default function ShortDescription({ title, Icon, description }) {
  const [desc, setDesc] = useState("");

  function onChange(event) {
    setDesc(event.target.value);
  }

  return (
    <>
      <textarea value={desc} onChange={onChange}></textarea>
      <ReactMarkdown>{desc}</ReactMarkdown>
    </>
  );
}
