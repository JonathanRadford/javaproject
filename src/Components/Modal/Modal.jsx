import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Modal.scss";

const ModalComponent = (props) => {
  const { createdBy, game, gameLength, genre, comments, image } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Modal">
      <button variant="primary" onClick={handleShow}>
        More Info:
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p>Game: {game}</p>
          <p>Added by: {createdBy}</p>
          <p>Game Length: {gameLength}</p>
          <p>Genre: {genre}</p>
          <p>Comments: {comments}</p>

          <div className="Modal__container">
            <img src={image} alt={game} className="Modal__image" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
