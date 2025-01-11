import React from "react";

function Success() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f8ff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "2px solid #4caf50",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            color: "#4caf50",
            fontSize: "2.5rem",
            margin: "0",
          }}
        >
          Success!
        </h1>
        <p
          style={{
            color: "#555555",
            fontSize: "1.2rem",
            marginTop: "10px",
          }}
        >
          Your payment was processed successfully.
        </p>
      </div>
    </div>
  );
}

export default Success;
