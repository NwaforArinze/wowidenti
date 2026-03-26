"use client";

import { useState } from "react";

export default function FacialRecognition() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  function testRecognition() {
    if (name !== "") {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          See Our Facial Recognition in Action
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="Enter Name"
            className="border p-3 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={testRecognition}
            className="bg-blue-600 text-white p-3 rounded-lg"
          >
            Test Recognition
          </button>
        </div>

        {status && (
          <div className="mt-10 text-center p-6 rounded-xl bg-gray-100">
            {status === "success"
              ? `✅ Face Detected: ${name}`
              : "❌ Face Not Detected"}
          </div>
        )}
      </div>
    </section>
  );
}
