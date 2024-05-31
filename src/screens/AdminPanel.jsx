import React, { useState } from 'react';
import { getFirestore,collection, addDoc } from 'firebase/firestore';
import firebaseApp from '../firebase/credenciales';

const firestore = getFirestore(firebaseApp);

function AdminPanel({ onVolver }) {
  const [nuevoTorneo, setNuevoTorneo] = useState({
    nombre: '',
    fechaLimite: '',
    imagenURL: '',
    maxParticipantes: 0,
    participantesRegistrados: 0
  });

  const handleCrearTorneo = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, 'torneos'), nuevoTorneo);
      console.log("Torneo creado con ID: ", docRef.id);
      // Limpiar el formulario después de la creación exitosa
      setNuevoTorneo({
        nombre: '',
        fechaLimite: '',
        imagenURL: '',
        maxParticipantes: 0,
        participantesRegistrados: 0
      });
    } catch (error) {
      console.error("Error al crear el torneo: ", error);
    }
  };

  return (
    <div className='crear-torneo'>
      <form onSubmit={handleCrearTorneo}>
      <h3 className='x'>CREAR TORNEO</h3>
        <label className='x'>
          Nombre:
          <input type="text" value={nuevoTorneo.nombre} onChange={(e) => setNuevoTorneo({ ...nuevoTorneo, nombre: e.target.value })} />
        </label>
        <label className='x'>
          Fecha límite de inscripción:
          <input type="date" value={nuevoTorneo.fechaLimite} onChange={(e) => setNuevoTorneo({ ...nuevoTorneo, fechaLimite: e.target.value })} />
        </label>
        
        <label className='x'>
          Cantidad máxima de participantes:
          <input type="number" value={nuevoTorneo.maxParticipantes} onChange={(e) => setNuevoTorneo({ ...nuevoTorneo, maxParticipantes: parseInt(e.target.value) })} />
        </label>
        <label className='x'>
          Participantes registrados:
          <input type="number" value={nuevoTorneo.participantesRegistrados} onChange={(e) => setNuevoTorneo({ ...nuevoTorneo, participantesRegistrados: parseInt(e.target.value) })} />
        </label>
        <button className="boton" type="submit">Crear Torneo</button>
        <button className="boton" onClick={onVolver}>Volver</button>
      </form>
      
    </div>
  );
}

export default AdminPanel;