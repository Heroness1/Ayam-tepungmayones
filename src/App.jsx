import React from "react";

export default function App() {
  return (
    <main className="fixed inset-0 bg-black overflow-hidden">
      <iframe
        src="/annabey-run.html"
        title="Annabey Run"
        className="w-full h-full border-0"
        allow="autoplay"
      />
    </main>
  );
}
