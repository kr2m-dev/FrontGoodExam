import React from 'react';
import EtudiantDashboard from '../Etudiant/EtudiantDashboard';

function Enseignant() {
  return (
    <div>
          <EtudiantDashboard />
    </div>
  )
}

export default Enseignant;

// import React, { useState, useEffect } from "react";
// //import { BellIcon, BookOpenIcon, ClipboardDocumentListIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
// import Navigation from "../Etudiant/Navigation";
// import ListExam from "../Etudiant/ListExam";
// import MesCopies from "../Etudiant/MesCopies"; // Nouveau composant pour les copies
// import Chatbot from "../Etudiant/Chatbot";
// import Accueil from "../Etudiant/Accueil";
// import NavItem from "../Etudiant/NavItem";
// import Card from "../Etudiant/Card";
// import "../Etudiant/EtudiantDashboard.css";

// function EtudiantDashboard() {
//   const [role, setRole] = useState("");
//   const [selectedSection, setSelectedSection] = useState("Notifications");

//   useEffect(() => {
//     const storedRole = localStorage.getItem("role");
//     setRole(storedRole);
//   }, []);

//   if (!role)
//     return (
//       <div className="loading-screen">
//         Chargement...
//       </div>
//     );

//   return (

   
//     <div className="dashboard-container">
//          <h1>vou s</h1>
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2 className="dashboard-title">Dashboard</h2>
//         <nav className="nav-menu">
//           <NavItem icon={<BellIcon className="h-6 w-6" />} text=" Notifications" onClick={() => setSelectedSection("Notifications")} />
//           <NavItem icon={<BookOpenIcon className="h-6 w-6" />} text=" Examens" onClick={() => setSelectedSection("Examens")} />
//           <NavItem icon={<ClipboardDocumentListIcon className="h-6 w-6" />} text=" Mes Copies" onClick={() => setSelectedSection("MesCopies")} />
//           <NavItem icon={<ChatBubbleLeftEllipsisIcon className="h-6 w-6" />} text=" ChatBot" onClick={() => setSelectedSection("ChatBot")} />
//         </nav>
//       </aside>

//       {/* Contenu principal */}
//       <main className="main-content">
//         <Navigation role={role} />
//         <h2 className="section-title">
//           {role === "teacher" ? "Gérer les examens" : "Tableau de Bord Étudiant"}
//         </h2>

//         <div className="content-grid">
//           {selectedSection === "Notifications" && <Card title="Notifications"><Accueil /></Card>}
//           {selectedSection === "Examens" && <Card title="Examens disponibles"><ListExam role={role} /></Card>}
//           {selectedSection === "MesCopies" && <Card title="Vos Copies" fullWidth><MesCopies /></Card>}
//           {selectedSection === "ChatBot" && <Card title="Chatbot - Posez vos questions"><Chatbot /></Card>}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default EtudiantDashboard;

