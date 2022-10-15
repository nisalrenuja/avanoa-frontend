import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivateLayout from "./Layouts/ActivateLayout/ActivateLayout";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import HomeLayout from "./Layouts/HomeLayout/HomeLayout";
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
import Home from "./components/Reminder/Home";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import axios from "./libs/axios";
import EmergencyLayout from "./Layouts/EmergencyLayout/EmergencyLayout";
import KeyboardLayout from "./Layouts/KeyboardLayout/KeyboardLayout";
import Register from "./components/Reminder/Register";
import Edit from "./components/Reminder/Edit";
import Details from "./components/Reminder/Details";
import { Settings } from "@mui/icons-material";
import SettingsLayout from "./Layouts/SettingsLayout/SettingsLayout";
import { useMediaQuery } from "react-responsive";
import { onDelete, setReminders } from "./reducers/reminders/reminderSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AudioSetting from "./components/AudioSetting/AudioSetting";
import EmailSetting from "./components/EmailSetting/EmailSetting";

function App() {
  const _dispatch = useDispatch();
  const reminders = useSelector((state) => state.reminder.reminders);
  const { dispatch, token, isLoggedIn } = useContext(AuthContext);
  const [nextReminder, setNextReminder] = useState(null);
  const [changed, setChanged] = useState(false);

  const retrieveReminders = () => {
    axios.get("/reminders").then((res) => {
      console.log("Hello1");
      if (res.data.success) {
        var _reminders = [];
        res.data.existingReminders.map((reminder) => {
          var _reminder = {
            id: reminder._id,
            title: reminder.Title,
            description: reminder.Description,
            time: reminder.Timestamp,
          };
          _reminders.push({ ..._reminder });
        });
        _dispatch(setReminders(_reminders));
        setChanged(!changed);
      }
    });
    console.log("Hello");
  };

  useEffect(() => {
    setInterval(() => {
      retrieveReminders();
    }, 5000);
  }, []);

  useEffect(() => {
    var interval = setInterval(() => {
      if (nextReminder && nextReminder.id !== "") {
        const time = nextReminder.time;
        const now = new Date();
        const nowTime = now.getTime();
        var x = new Date(time);
        console.log(
          x.getDate() +
            " " +
            x.getMonth() +
            " " +
            x.getFullYear() +
            " " +
            x.getHours() +
            ":" +
            x.getMinutes() +
            ":" +
            x.getSeconds()
        );
        if (time <= nowTime) {
          alert("Reminder: " + nextReminder.description);
          clearInterval(interval);
          var nextTime = new Date(now);
          nextTime.setDate(nextTime.getDate() + 1);
          nextTime.setHours(new Date(time).getHours());
          nextTime.setMinutes(0);
          nextTime.setSeconds(0);
          axios
            .put("/reminder/update/" + nextReminder.id, {
              Timestamp: nextTime.getTime(),
            })
            .then((res) => {
              setNextReminder({
                id: nextReminder.id,
                title: nextReminder.title,
                description: nextReminder.description,
                time: nextTime.getTime(),
              });
              setChanged(!changed);
            });
          // axios.delete(`/reminder/delete/${nextReminder.id}`).then((res) => {
          // 	_dispatch(onDelete(nextReminder.id));
          // });
        }
      }
    }, 1000);
  }, [nextReminder]);

  useEffect(() => {
    if (reminders && reminders.length > 0 && reminders[0].id !== "") {
      var nextTime = Number.MAX_VALUE;
      var next = null;
      var nextIdx = -1;
      for (let i = 0; i < reminders.length; i++) {
        const reminder = reminders[i];
        const time = reminder.time;
        if (time < nextTime) {
          nextTime = time;
          next = reminder;
          nextIdx = i;
        }
      }
      setNextReminder(next);
    } else setNextReminder(null);
  }, [changed]);

  // get ac token
  useEffect(() => {
    const _appSignging = localStorage.getItem("_appSignging");
    if (_appSignging) {
      const getToken = async () => {
        const res = await axios.post("/api/auth/access", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.ac_token });
      };
      getToken();
    }
  }, [dispatch, isLoggedIn]);

  // get user data
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch({ type: "SIGNING" });
        const res = await axios.get("/api/auth/user", {
          headers: { Authorization: token },
        });
        dispatch({ type: "GET_USER", payload: res.data });
      };
      getUser();
    }
  }, [dispatch, token]);

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <HomeLayout /> : <AuthLayout />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <ProfileLayout /> : <AuthLayout />}
        />
        <Route path="/auth/reset-password/:token" element={<ResetLayout />} />
        <Route
          path="/api/auth/activate/:activation_token"
          element={<ActivateLayout />}
        />
        <Route path="/emergency" element={<EmergencyLayout />} />

        <Route path="/Keyboard" element={<KeyboardLayout />} />
        <Route path="/settings" element={<SettingsLayout />} />
        <Route path="/Reminder" element={<Home />} />
        <Route path="/Reminder/register" element={<Register />} />
        <Route path="/Reminder/edit/:id" element={<Edit />} />
        <Route path="/Reminder/view/:id" element={<Details />} />
        <Route path="/AudioSetting" element={<AudioSetting />} />
        <Route path="/emailSetting" element={<EmailSetting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
