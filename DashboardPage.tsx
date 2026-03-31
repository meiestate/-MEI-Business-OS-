const cards = [
  { title: "New Leads", value: "128", sub: "+12 today" },
  { title: "Follow-ups Due", value: "34", sub: "8 overdue" },
  { title: "Active Deals", value: "19", sub: "₹2.4Cr pipeline" },
  { title: "Closed This Month", value: "7", sub: "₹48L revenue" },
];

export default function DashboardPage() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "18px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "10px" }}>
              {card.title}
            </div>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#f8fafc" }}>
              {card.value}
            </div>
            <div style={{ fontSize: "13px", color: "#60a5fa", marginTop: "8px" }}>
              {card.sub}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "16px",
        }}
      >
        <section
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: "18px",
            padding: "20px",
          }}
        >
          <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
            Pipeline Overview
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {[
              ["New", "24"],
              ["Contacted", "18"],
              ["Visit Planned", "12"],
              ["Negotiation", "9"],
              ["Token", "5"],
              ["Closed", "7"],
            ].map(([label, count]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#0f172a",
                  border: "1px solid #1e293b",
                  borderRadius: "14px",
                  padding: "14px 16px",
                }}
              >
                <span>{label}</span>
                <strong>{count}</strong>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: "18px",
            padding: "20px",
          }}
        >
          <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>
            Today Tasks
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {[
              "Call 3 hot leads",
              "Schedule Whitefield visit",
              "Send price sheet",
              "Update negotiation notes",
            ].map((task) => (
              <div
                key={task}
                style={{
                  background: "#0f172a",
                  border: "1px solid #1e293b",
                  borderRadius: "14px",
                  padding: "14px 16px",
                  color: "#cbd5e1",
                }}
              >
                {task}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
