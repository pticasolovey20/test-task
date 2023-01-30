import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetailPage } from "./pages/DetailPage";

export default function App() {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<DetailPage />} />
			</Routes>
		</div>
	);
}
