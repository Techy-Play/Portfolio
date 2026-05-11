"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Message sent successfully! I'll get back to you soon.");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  }

  return (
    <form className="contact-form glass-card" style={{ padding: 32 }} onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <textarea name="message" placeholder="Your Message..." required />
      </div>
      <button
        type="submit"
        className="btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>Sending...</>
        ) : (
          <><i className="fa-solid fa-paper-plane" /> Send Message</>
        )}
      </button>
      {status === "success" && <div className="form-success">{message}</div>}
      {status === "error" && <div className="form-error">{message}</div>}
    </form>
  );
}
