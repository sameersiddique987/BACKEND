import React from "react";

function Cancel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff5f5",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "2px solid #f44336",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            color: "#f44336",
            fontSize: "2.5rem",
            margin: "0",
          }}
        >
          Cancelled!
        </h1>
        <p
          style={{
            color: "#555555",
            fontSize: "1.2rem",
            marginTop: "10px",
          }}
        >
          Your payment was cancelled. Please try again.
        </p>
      </div>
    </div>
  );
}

export default Cancel;
