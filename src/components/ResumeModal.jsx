import "../styles/resume.css";

export default function ResumeModal({ show, setShow }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={() => setShow(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>My Resume</h3>

        <iframe
          src="/resume.pdf"
          title="resume"
          className="resume-frame"
        />

        <a href="/resume.pdf" download className="download-btn">
          Download Resume
        </a>
      </div>
    </div>
  );
}
