"use client"
import React from 'react';
import App from './Components/App';
import estilos from "./page.module.css"

function Page() {
  return (
    <div className={estilos.header}>
      <h1>ProjectPro</h1>
      <App />
    </div>
  );
}

export default Page;