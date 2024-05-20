import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
          <div>
            <h1>Upload Excel File</h1>
            <input type="file"/>
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
