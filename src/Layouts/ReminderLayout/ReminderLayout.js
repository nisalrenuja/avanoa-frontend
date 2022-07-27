import { useState } from "react";
import "./ReminderLayout.css";
import FormInput from "../../components/Reminder/FormInput";

const ReminderLayout = () => {
  const [values, setValues] = useState({
    title: "",
    details: "",
    date: "",
    time: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "title",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "title",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "details",
      type: "details",
      placeholder: "details",
      errorMessage: "It should be a valid format!",
      label: "details",
      required: true,
    },
    {
      id: 3,
      name: "date",
      type: "date",
      placeholder: "date",
      label: "date",
    },
    {
      id: 4,
      name: "time",
      type: "time",
      placeholder: "time",
      errorMessage:
        "time should be in valid format!",
      label: "time",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>New Reminder</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <subbutton>Submit</subbutton>
      </form>
    </div>
  );
};

export default ReminderLayout;