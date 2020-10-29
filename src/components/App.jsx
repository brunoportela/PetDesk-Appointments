import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Appointment from "./Appointment";
import Footer from "./Footer";

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("/api/appointments").then((res) => {
      const appointments = res.data;
      setAppointments(appointments);
    });
  }, []);

  function onUpdateData (id, modifiedAppointment) {
    // const formattedDateTime = new Date(modifiedAppointment.date + " " + modifiedAppointment.time)
    //
    // let appt = appointments.find(x => x.appointmentId === id);
    // appt.requestedDateTimeOffset = formattedDateTime;
    //
    // let copy = appointments.slice();
    // copy[copy.find(x => x.appointmentId === id)] = appt;
    // setAppointments(copy);
  }


  return ( <
    div className = "App" >
    <
    Header / >
    <
    div className = "container" >
    <
    div className = "row" > {
      appointments.map((item) => {
        return ( <
          Appointment key = {
            item.appointmentId
          }
          appointmentId = {
            item.appointmentId
          }
          appointmentType = {
            item.appointmentType
          }
          appointmentDate = {
            item.requestedDateTimeOffset
          }
          appointmentCreated = {
            item.createDateTime
          }
          clientId = {
            item.user.userId
          }
          clientName = {
            item.user.firstName + " " + item.user.lastName
          }
          animalId = {
            item.animal.animalId
          }
          animalName = {
            item.animal.firstName
          }
          animalSpecies = {
            item.animal.species
          }
          animalBreed = {
            item.animal.breed
          }
          update = {onUpdateData}
          />
        );
      })
    } </div>
    </div>
    <Footer / >

    </div>
  );
}

export default App;
