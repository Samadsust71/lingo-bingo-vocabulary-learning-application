import React, { useEffect } from "react";

const Modal = ({ lesson }) => {
  const { id, word, meaning, when_to_say, example } = lesson || {};

  //
  return (
    <dialog id={`my_modal_${id}`} className="modal modal-middle text-gray-800">
      <div className="modal-box text-center space-y-3">
        <h3 className="font-bold text-lg">Word: {word}</h3>
        <p>Meaning: {meaning}</p>
        <p>when to say: {when_to_say}</p>
        <p>Example: {example}</p>
        <div className="modal-action justify-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
