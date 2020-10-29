import React, { useState } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Details(props) {

  const [apt, setApt] = useState({
    date: props.appointmentDate,
    time: props.appointmentTime
  });


  function handleChange(event) {
      const { name, value } = event.target;

      setApt(prevApt => {
        return {
          ...prevApt,
          [name]: value
        };
      });

      // props.updateApts(apt)
    }

  return (
    <div className="form-group">
      <DialogTitle id="form-dialog-title">Appointment Details</DialogTitle>
      <DialogContent>
      <div>
        <DialogContentText>
          <div className="row">
            <div className="col-4">Date:</div>
            <div className="col">
              <input name="date"
                class="form-control"
                autocomplete="off"
                disabled={!props.edit}
                onChange={handleChange}
                value={apt.date}
                />
            </div>

          </div>
        </DialogContentText>
        <DialogContentText>
          <div className="row">
            <div className="col-4">Time:</div>
            <div className="col">
            <input name="time"
              class="form-control"
              autocomplete="off"
              disabled={!props.edit}
              onChange={handleChange}
              value={apt.time}/>
            </div>
          </div>
        </DialogContentText>
        </div>

        <DialogContentText>
          <div className="row">
            <div className="col-4">Services:</div>
            <div className="col">
            <input class="form-control" disabled="true" value={props.procedure}/>
            </div>
          </div>
        </DialogContentText>
        <DialogContentText>
          <div className="row">
            <div className="col-4">Pet Name:</div>
            <div className="col">
              <input class="form-control" disabled="true" value={props.pet}/>
            </div>
          </div>
        </DialogContentText>

        <DialogContentText>
          <div className="row">
            <div className="col-4">Species:</div>
            <div className="col">
              <input class="form-control" disabled="true" value={props.species !== null ? props.species : "[Not Informed]"}/>
            </div>
          </div>
        </DialogContentText>

        <DialogContentText>
          <div className="row">
            <div className="col-4">Breed:</div>
            <div className="col">
              <input class="form-control" disabled="true" value={props.breed !== null ? props.breed : "[Not Informed]"}/>
            </div>
          </div>
        </DialogContentText>

        <DialogContentText>
          <div className="row">
            <div className="col-4">Customer:</div>
            <div className="col">
              <input class="form-control" disabled="true" value={props.customer}/>
            </div>
          </div>
        </DialogContentText>

        <DialogContentText>
          <div className="row" style={{fontSize: "10px"}}>
            <div className="col">
              ID: {props.id}
            </div>
          </div>
          <div className="row" style={{fontSize: "10px"}}>
            <div className="col">
              Created: {props.appointmentCreated}
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
