export default function Topbar() {
  return (
    <header
      style={{
        height: "72px",
        borderBottom: "1px solid #1f2937",
        background: "#0f172a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#f8fafc",
          }}
        >
          Dashboard
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "#94a3b8",
            marginTop: "2px",
          }}
        >
          Welcome back to MEI Business OS
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <input
          placeholder="Search..."
          style={{
            width: "240px",
            background: "#111827",
            color: "#e5e7eb",
            border: "1px solid #374151",
            borderRadius: "12px",
            padding: "10px 14px",
            outline: "none",
          }}
        />

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "10px 16px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          + Add Lead
        </button>
      </div>
    </header>
  );
}
