"use client";

import styles from "./page.module.css";
import * as XLSX from "xlsx";

export default function Home() {

  async function convertToJson(headers, data){
    const rows = [];

    data.forEach(async row => {
      let rowData = {};

      row.forEach(async (element, index) => {
        rowData[headers[index]] = element;
      })
      rows.push(rowData)
    });
    console.log(rows);
    return rows;
  }

  function importExcel(e){
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event)=>{
      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, {type: "binary"});
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      const fileData = XLSX.utils.sheet_to_json(workSheet, {header: 1});
      const headers =   fileData[0];
      const heads = headers.map(head => ({title: head, field: head}))
      fileData.splice(0, 1);
      convertToJson(headers, fileData);
    }
    reader.readAsArrayBuffer(file);
  }

  return (
    <main className={styles.main}>
      <div>
          <div>
            <h1>Upload Excel File</h1>
            <input type="file" onChange={importExcel}/>
          </div>
          <br></br>
          <div>
            <label>How many sets would you like to make?</label>
            <br></br>
            <input type="number"/>
            <br></br>
            <br></br>
            <label>How many questions per set would you like to have?</label>
            <br></br>
            <input type="number"/>
            <br></br>
            <br></br>
            <label>How many students do you have?</label>
            <br></br>
            <input type="number"/>
          </div>
          <br></br>
          <div className="center">
            <button>Start Shuffling</button>
          </div>
      </div>
    </main>
  );
}
