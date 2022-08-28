import React from "react";
import * as XLSX from "xlsx";
import axios from "axios";

export default function App() {
  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (evt) => {
      // console.log(evt);
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      // console.log(evt, bstr, wb);
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      postPets(data);
    };
    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  };
  const baseUrl = "http://localhost:3000/api/pet";
  async function postPets(data) {
    console.log(baseUrl);
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log(res);
  }

  return (
    <div>
      <input type="file" onChange={onChange} />
    </div>
  );
}
