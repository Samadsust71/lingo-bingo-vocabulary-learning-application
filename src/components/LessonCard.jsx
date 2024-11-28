
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaVolumeHigh } from "react-icons/fa6";

const LessonCard = ({ lesson = {} }) => {
  const difficulties = {
    easy: "bg-green-500",
    medium: "bg-yellow-500",
    difficult: "bg-red-500",
  };
 const {pronounceWord}=useContext(AuthContext)
  const {
    id,
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
  } = lesson || {};
  return (
    <div className="text-white" >
      <div className={`card shadow-xl ${difficulties[difficulty]}`}>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Word: {word}</h2>
          <p>Meaning: {meaning}</p>
          <p >Pronunciation: <button className="btn" onClick={()=>pronounceWord(pronunciation)}><FaVolumeHigh /></button></p>
          <p>Part of speech: {part_of_speech}</p>
          <p>Difficulty: {difficulty}</p>
          <button
            onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
            className="btn"
          >
            When to say the button
          </button>
          <div className="card-actions">
            <Link to={"/lessons"} className="btn btn-success">
              Back to Lesson
            </Link>
          </div>
        </div>
      </div>
      <Modal lesson={lesson}/>
    </div>
  );
};

export default LessonCard;
