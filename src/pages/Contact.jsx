import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="divider"></div>

      <section className="main-title">
        <h1>CONTACT</h1>
        <hr />
      </section>

      <section id="info">
        <div className="grid-container">
          <div className="tit">Email:</div>
          <div className="content">baongocvo2007@gmail.com</div>
          <div className="tit">Phone:</div>
          <div className="content">+1 (781) 366 - 6991</div>
          <div className="tit">Website:</div>
          <div className="content">
            <Link to="/">Link here</Link>
          </div>
        </div>
      </section>
    </>
  );
}
