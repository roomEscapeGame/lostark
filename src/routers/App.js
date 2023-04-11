import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

//페이지
import Imprinting from "pages/imprinting/Imprinting";

//스타일
import "assets/css/common.css";
import "assets/css/font.css";

function App() {
	return (
		<Common>
			<header>
				<nav>
					<Link to="/imprinting">각인</Link>
				</nav>
			</header>
			<Routes>
				<Route path="/imprinting/*" element={<Imprinting />} />
			</Routes>
		</Common>
	);
}

const Common = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background-color: #333;
	*{
		color: #fff;
	}
`

export default App;
