type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <section className="mx-auto my-0 max-w-150">
      {/* Header */}
      <header className="rounded-md bg-slate-600 p-8">
        <h2 className="text-2xl text-slate-200">New Contact Form Submission</h2>
      </header>

      {/* Body */}
      <article className="rounded-md border-slate-200 bg-slate-100 p-8">
        {/* Name */}
        <article style={{ marginBottom: "16px" }}>
          <p
            style={{
              margin: "0 0 4px",
              fontSize: "12px",
              color: "#64748b",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            From
          </p>
          <p style={{ margin: 0, fontSize: "16px", color: "#0f172a" }}>{name}</p>
        </article>

        {/* Email */}
        <div style={{ marginBottom: "16px" }}>
          <p
            style={{
              margin: "0 0 4px",
              fontSize: "12px",
              color: "#64748b",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Email
          </p>
          <a href={`mailto:${email}`} style={{ color: "#3b82f6", fontSize: "16px" }}>
            {email}
          </a>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "20px 0" }} />

        {/* Message */}
        <div>
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "12px",
              color: "#64748b",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Message
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              color: "#334155",
              lineHeight: "1.6",
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </p>
        </div>
      </article>
    </section>
  );
}
