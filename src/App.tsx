import { Outlet } from "@tanstack/react-router";
import './App.css'

export default function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Rick & Morty Characters</h1>
      <Outlet/>
    </div>
  );
}
