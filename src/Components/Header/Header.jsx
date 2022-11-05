import React from "react";
import "./Header.css";
import { Plus } from "phosphor-react";
import { UserPlus } from "phosphor-react";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container-header">
      <h2 className="logo-header">Pocoyo</h2>

      <div className="User-header"></div>
        <Plus className="plus-header" size={20} />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="modalsignup">
              <select
                className="form-select-document ro"
                aria-label="Default select example"
              >
                <option selected>Tipo de documento</option>
                <option value="1">CC</option>
                <option value="2">TI</option>
                <option value="3">TE</option>
              </select>

              <input
                type="text"
                className="ro"
                name="name"
                placeholder="Nombre completo"
              />
              <input
                type="number"
                className="ro"
                name="number"
                placeholder="Número del documento"
              />
              <input
                type="email"
                className="ro"
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                className="ro"
                name="password"
                placeholder="Contraseña"
              />
              <input
                type="text"
                className="ro"
                name="ususario"
                placeholder="Nombre de usuario"
              />
              <input type="file" name="avatar" placeholder="Agrega una foto" />
              <input
                type="text"
                className="ro"
                name="direccion"
                placeholder="Escribe tú dirección"
              />

              <select
                className="form-select-rol ro"
                aria-label="Default select example"
              >
                <option selected>Rol</option>
                <option value="1">Administrador</option>
                <option value="2">Estudiante</option>
              </select>

              <bottom className="btn-submit">ENVIAR</bottom>
            </div>
          </Modal>
        <div className="accuont-header" onClick={handleOpen}>

          <Avatar className="avatar-header">
            <UserPlus size={20} />
          </Avatar>
          <div className="infoUser-header">
            <h5 className="name-header fi">Sign up</h5>
          </div>
        </div>
      </div>
  );    
};

export default Header;
