import React from "react";
import styles from "./trainField.module.scss";
import Option from "../Option";
import Confetti from "../Confetti";
import { useNavigate } from "react-router-dom";

const TrainField: React.FC = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = React.useState(false);
  const [isConfetti, setIsConfetti] = React.useState(false);

  const question = "I`m __ years old";

  const [options, setOptions] = React.useState([
    { text: "17", veracity: false, hide: true },
    { text: "18", veracity: false, hide: true },
    { text: "20", veracity: false, hide: true },
    { text: "22", veracity: true, hide: true },
  ]);

  React.useEffect(()=>{
    if(!window.localStorage.getItem('token')){
      navigate('sign-in');
    }
  })

  const openVeracity = (text: string) => {
    const newOptions = [];
    for (let item of options) {
      const newHide = !(item.text === text || item.veracity === true);

      if(item.text === text && item.veracity === true) setIsConfetti(true);

      newOptions.push({
        text: item.text,
        veracity: item.veracity,
        hide: newHide,
      });
    }
    setOptions(newOptions);
    setDisabled(true);
    
  };

  return (
    <>
    {isConfetti ? <Confetti /> : <></>}
      <div className={styles.trainField}>
        <div className={styles.question}>
          <h3>{question}</h3>
        </div>
        <div className={styles.options}>
          {options.map((obj: any) => (
            <Option
              key={obj.text}
              veracity={obj.veracity}
              hide={obj.hide}
              openVeracity={openVeracity}
              disabled={disabled}
            >
              {obj.text}
            </Option>
          ))}
        </div>
        <nav>
          <button>
            ◀️ <p className={styles.underline}>previous</p>
          </button>
          <button>
            <p className={styles.underline}>next</p> ▶️
          </button>
        </nav>
      </div>
    </>
  );
};

export default TrainField;
