import React, { useState } from "react";
import moment from "moment";
import Details from "./Details";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import EditedOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import ConfirmedOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import Tooltip from "@material-ui/core/Tooltip";

function Appointment(props) {
  const [open, setOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  let modifiedAppointment;

  const handleClickOpen = () => {
    setOnEdit(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOnEdit(false);
  };

  const handleEdit = () => {
    setOnEdit(true);
  };

  const handleConfirm = () => {
    setOpen(false);
    setIsConfirmed(true);
    setIsEdited(true);
  };

  const handleCancel = () => {
    setOnEdit(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    setIsEdited(true);
    setIsConfirmed(false);
    //props.update(props.appointmentId, modifiedAppointment);
  };

  const onUpdateApts = (apt) => {
    modifiedAppointment = apt;
  }

  const setBackgroundColor = () => {
    let backgroundColor = "white";
    if (isConfirmed) {
      backgroundColor = "#E7FFE4";
    } else if (isEdited) {
      backgroundColor = "#FFF9BF";
    }
    return backgroundColor;
  };

  const setIcon = () => {
    let setIconStyle = null;
    if (isConfirmed) {
      setIconStyle = (
        <Tooltip title="Appointment confirmed">
          <ConfirmedOutlinedIcon style={{ color: "green", fontSize: "18" }} />
        </Tooltip>
      );
    } else if (isEdited) {
      setIconStyle = (
        <Tooltip title="Appointment edited">
          <EditedOutlinedIcon style={{ color: "gray", fontSize: "18" }} />
        </Tooltip>
      );
    }
    return setIconStyle;
  };

  return (
    <div>
      <div className="note" style={{ background: setBackgroundColor() }}>
        <div className="container">
          <form onClick={handleClickOpen}>
            <p>
              Appointment Date: {moment(props.appointmentDate).format("ll")}
            </p>
            <p>
              Appointment Time: {moment(props.appointmentDate).format("LT")}
            </p>
            <p>Services: {props.appointmentType.slice(0, 20)}</p>
            <p>Pet: {props.animalName}</p>
            <div className="row">
              <div className="col-sm-10">
                <p>Customer: {props.clientName}</p>
              </div>
              <div>{setIcon()}</div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <Details
              showDetails={handleClickOpen}
              id={props.appointmentId}
              appointmentDate={moment(props.appointmentDate).format(
                "MM/DD/YYYY"
              )}
              appointmentTime={moment(props.appointmentDate).format("LT")}
              appointmentCreated={moment(props.appointmentCreated).format(
                "MM/DD/YYYY"
              )}
              pet={props.animalName}
              procedure={props.appointmentType}
              customer={props.clientName}
              breed={props.animalBreed}
              species={props.animalSpecies}
              edit={onEdit}
              updateApts={onUpdateApts}
            />

            <div>
              <DialogActions>
                {!onEdit ? (
                  <div>
                    <Button onClick={handleEdit} color="primary">
                      Edit
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                      Confirm
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button onClick={handleCancel} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                      Submit
                    </Button>
                  </div>
                )}
              </DialogActions>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
