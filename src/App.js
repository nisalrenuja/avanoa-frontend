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
import AudioSetting from "./components/AudioSetting/AudioSetting";
import { Settings } from "@mui/icons-material";
import SettingsLayout from "./Layouts/SettingsLayout/SettingsLayout";
import { useMediaQuery } from 'react-responsive';

function App() {
	const { dispatch, token, isLoggedIn } = useContext(AuthContext);

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
				<Route path="/Reminder" element={<Home/>} />
				<Route path="/Reminder/register" element={<Register/>} />
				<Route path="/Reminder/edit/:id" element={<Edit/>} />
				<Route path="/Reminder/view/:id" element={<Details/>} />
				<Route path="/AudioSetting" element={<AudioSetting/>} />





			</Routes>
		</BrowserRouter>

		
	);
}

	


export default App;
