import { Html } from "@react-email/components";

interface EmailTemplateProps {
  fullName: string;
  companyName?: string;
  country?: string;
  email: string;
  subject: string;
  subjectDetails?: string;
  message: string;
}

export function EmailTemplate({
  fullName,
  companyName,
  country,
  email,
  subject,
  subjectDetails,
  message,
}: EmailTemplateProps) {
  const infoRow = (label: string, value?: string) => (
    <tr>
      <td style={{ padding: "6px 8px", fontWeight: 600, width: "160px" }}>
        {label}
      </td>
      <td style={{ padding: "6px 8px", borderLeft: "1px solid #eee" }}>
        {value || "-"}
      </td>
    </tr>
  );

  return (
    <Html>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f7f7f7",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e5e5",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "20px 24px",
              borderBottom: "1px solid #e5e5e5",
              background: "linear-gradient(90deg, #0f172a, #1e293b)",
              color: "#ffffff",
            }}
          >
            <h1 style={{ margin: "0 0 4px", fontSize: "20px" }}>
              New Inquiry Received
            </h1>
            <p style={{ margin: 0, opacity: 0.9 }}>
              Details submitted from the contact form.
            </p>
          </div>

          <div style={{ padding: "20px 24px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                color: "#0f172a",
              }}
            >
              <tbody>
                {infoRow("Full name", fullName)}
                {infoRow("Company", companyName)}
                {infoRow("Country", country)}
                {infoRow("Email", email)}
                {infoRow("Subject", subject)}
                {infoRow("Subject details", subjectDetails)}
              </tbody>
            </table>

            <div style={{ marginTop: "18px" }}>
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: "6px",
                  fontSize: "14px",
                }}
              >
                Message
              </div>
              <div
                style={{
                  whiteSpace: "pre-wrap",
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  padding: "12px",
                  lineHeight: 1.5,
                  fontSize: "14px",
                }}
              >
                {message || "-"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}
