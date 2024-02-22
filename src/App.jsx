import showcase from "./assets/showcase.png";
import html5 from "./assets/html-5.png";
import css3 from "./assets/css-3.png";
import mongodb from "./assets/mongodb.png";
import expressjs from "./assets/expressjs.png";
import reactjs from "./assets/reactjs.png";
import nodejs from "./assets/nodejs.png";
import StockManagementApp from "./assets/StockManagementApp.jpg"
import NewsApp from "./assets/NewsApp.jpg"
export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            Portfolio Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#certifications" className="nav-link">
                  Certifications
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="bg-dark text-light p-5 text-center text-sm-start"
        id="about"
      >
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                <span className="text-warning">Hello!</span>
              </h1>
              <p>
                I'm SARAVANAKUMAR S,
                <br />a Passionate fresher with expertise in HTML, CSS, and
                JavaScript, specializing in React JS for dynamic and interactive
                user interfaces. Proficient in Node.js, Express.js, and MongoDB
                for robust server-side development and efficient database
                management. Eager to contribute creative and functional
                solutions to innovative projects.
              </p>
              <button className="btn btn-primary btn-lg">
                <a
                  href="https://drive.google.com/file/d/10CxpeAX7Yr-ljD9R_XHcR0DswoWDROsX/view?usp=drivesdk"
                  className="pe-auto text-light"
                >
                  Resume
                </a>
              </button>
            </div>
            <img
              className="img-fluid d-none d-sm-block"
              src={showcase}
              alt="showcase"
              style={{ height: "220px" }}
            />
          </div>
        </div>
      </section>
      <section className="p-5" id="skills">
        <div className="container text-center">
          <h1 className="text-center">Skills</h1>
          <div className="row justify-content-around">
            <div className="col-md-2 my-3">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <img
                    src={html5}
                    alt=""
                    style={{ maxHeight: "50px", maxWidth: "50px" }}
                  />
                  <h3 className="card-title mb-3">HTML</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <img
                    src={css3}
                    alt=""
                    style={{ maxHeight: "50px", maxWidth: "50px" }}
                  />
                  <h3 className="card-title mb-3">CSS</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <img
                    src={mongodb}
                    alt=""
                    style={{ maxHeight: "50px", maxWidth: "50px" }}
                  />
                  <h3 className="card-title mb-3">Mongo DB</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-md-2 my-3">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <img
                    src={expressjs}
                    alt=""
                    style={{ maxHeight: "50px", maxWidth: "50px" }}
                  />
                  <h3 className="card-title mb-3">Express JS</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <img
                    src={reactjs}
                    alt=""
                    style={{ maxHeight: "50px", maxWidth: "50px" }}
                  />
                  <h3 className="card-title mb-3">React JS</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <img
                    src={nodejs}
                    alt=""
                    style={{ maxHeight: "50px", maxWidth: "50px" }}
                  />
                  <h3 className="card-title mb-3">Node JS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-dark" id="projects">
        <div className="container">
          <h1 className="text-center text-light mb-5">Projects</h1>
          <div className="row justify-content-around">
            <div className="col-md-3 my-5" style={{ cursor: "pointer" }}>
              <div className="card text-bg-dark">
                <img src={StockManagementApp} className="card-img" alt="led" />
                <div className="card-img-overlay">
                  <h1 className="card-title">Stock Management App</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-5" style={{ cursor: "pointer" }}>
              <div className="card text-bg-dark">
                <img src={NewsApp} className="card-img" alt="led" />
                <div className="card-img-overlay">
                  <h1 className="card-title">News App</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-light" id="certifications">
        <h1 className="text-center">Certifications</h1>
        <div className="container">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Learn JAVA Programming - Beginner to Master
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  "I have gained a comprehensive understanding of Java
                  programming, covering core concepts, object-oriented
                  principles, and advanced topics. The certification has
                  equipped me to develop robust and scalable applications in
                  Java."
                </div>
                <p className="px-4">
                  <a href="https://drive.google.com/file/d/1VmXsN48QNtG8WKKHA5EFP7-AACQuQBdu/view?usp=drive_link">
                    Read more
                  </a>
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Web Development
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  "In my one-month web development internship, I gained hands-on
                  experience in building responsive and visually appealing
                  websites using HTML, CSS, and Bootstrap, while also acquiring
                  a solid foundation in JavaScript for interactive web
                  functionality."
                </div>
                <p className="px-4">
                  <a href="https://drive.google.com/file/d/1VohOZH3HWtqv1Jm-IUGb83Wkymprqi3O/view?usp=drive_link">
                    Read more
                  </a>
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Cloud Computing
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  "I have obtained a cloud computing certification, equipping me
                  with the expertise to design scalable and efficient cloud
                  architectures, deploy and manage cloud resources, and optimize
                  cloud solutions for enhanced performance and
                  cost-effectiveness."
                </div>
                <p className="px-4">
                  <a href="https://drive.google.com/file/d/1f1J-_kPvLzJw61Ux0VGYG4f6V8SUuCEt/view?usp=drive_link">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-dark">
        <div className="container text-center">
          <div className="row text-center">
            <div className="col-md-4">
              <h5 style={{ cursor: "pointer" }}>
                <a
                  href="mailto:saravanas04112002@gmail.com"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Email
                </a>
              </h5>
            </div>
            <div className="col-md-4">
              <h5 style={{ cursor: "pointer" }}>
                <a
                  href="www.linkedin.com/in/saravanakumar-s-ece-49449b2a0"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  LinkedIn
                </a>
              </h5>
            </div>
            <div className="col-md-4">
              <h5 style={{ cursor: "pointer" }}>
                <a
                  href="https://github.com/sk-04112002"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  GitHub
                </a>
              </h5>
            </div>
            <p className="text-light pt-5">
              Copyright &copy; 2024 SARAVANAKUMAR S
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
