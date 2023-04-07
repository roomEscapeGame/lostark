import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
	const [내가맞출각인, 저장내가맞출각인] = useState([]);
	const [내각인, 저장내각인] = useState([]);
	const [필요각인레벨, 저장필요각인레벨] = useState([]);

	const [내각인_1, 저장내각인_1] = useState();
	const [내각인_2, 저장내각인_2] = useState();
	const [내각인_3, 저장내각인_3] = useState();
	const [내각인_4, 저장내각인_4] = useState();
	const [내각인_5, 저장내각인_5] = useState();
	const [내각인레벨_1, 저장내각인레벨_1] = useState();
	const [내각인레벨_2, 저장내각인레벨_2] = useState();
	const [내각인레벨_3, 저장내각인레벨_3] = useState();
	const [내각인레벨_4, 저장내각인레벨_4] = useState();
	const [내각인레벨_5, 저장내각인레벨_5] = useState();

	const [맞출각인_1, 저장맞출각인_1] = useState();
	const [맞출각인_2, 저장맞출각인_2] = useState();
	const [맞출각인_3, 저장맞출각인_3] = useState();
	const [맞출각인_4, 저장맞출각인_4] = useState();
	const [맞출각인_5, 저장맞출각인_5] = useState();
	const [맞출각인레벨_1, 저장맞출각인레벨_1] = useState();
	const [맞출각인레벨_2, 저장맞출각인레벨_2] = useState();
	const [맞출각인레벨_3, 저장맞출각인레벨_3] = useState();
	const [맞출각인레벨_4, 저장맞출각인레벨_4] = useState();
	const [맞출각인레벨_5, 저장맞출각인레벨_5] = useState();

	const 맞출각인저장 = () => {
		저장내가맞출각인([
			{ 각인: 맞출각인_1, 레벨: Number(맞출각인레벨_1) },
			{ 각인: 맞출각인_2, 레벨: Number(맞출각인레벨_2) },
			{ 각인: 맞출각인_3, 레벨: Number(맞출각인레벨_3) },
			{ 각인: 맞출각인_4, 레벨: Number(맞출각인레벨_4) },
			{ 각인: 맞출각인_5, 레벨: Number(맞출각인레벨_5) },
		]);
	}

	const 내각인저장 = () => {
		저장내각인([
			{ 각인: 내각인_1, 레벨: Number(내각인레벨_1) },
			{ 각인: 내각인_2, 레벨: Number(내각인레벨_2) },
			{ 각인: 내각인_3, 레벨: Number(내각인레벨_3) },
			{ 각인: 내각인_4, 레벨: Number(내각인레벨_4) },
			{ 각인: 내각인_5, 레벨: Number(내각인레벨_5) },
		]);
	}

	const 각인계산 = () => {
		let 복사내각인 = [...내각인];
		let 복사맞출각인 = [...내가맞출각인];
		let 계산된각인 = [];
		for (let i = 0; i < 내가맞출각인.length; i++) {
			for (let j = 0; j < 내각인.length; j++) {
				if (복사맞출각인[i].각인 === 복사내각인[j].각인) {
					계산된각인.push({
						각인: 내가맞출각인[i].각인,
						필요레벨: 내가맞출각인[i].레벨 - 내각인[i].레벨
					})
					break;
				}
			}
		}
		저장필요각인레벨([...계산된각인]);
	}

	useEffect(() => {
		console.log(내가맞출각인);
		console.log(내각인);
		console.log(필요각인레벨);
	}, [필요각인레벨])

	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		switch (name) {
			case "맞출각인_1":
				저장맞출각인_1(value);
				break;
			case "맞출각인_2":
				저장맞출각인_2(value);
				break;
			case "맞출각인_3":
				저장맞출각인_3(value);
				break;
			case "맞출각인_4":
				저장맞출각인_4(value);
				break;
			case "맞출각인_5":
				저장맞출각인_5(value);
				break;
			case "맞출각인레벨_1":
				저장맞출각인레벨_1(value);
				break;
			case "맞출각인레벨_2":
				저장맞출각인레벨_2(value);
				break;
			case "맞출각인레벨_3":
				저장맞출각인레벨_3(value);
				break;
			case "맞출각인레벨_4":
				저장맞출각인레벨_4(value);
				break;
			case "맞출각인레벨_5":
				저장맞출각인레벨_5(value);
				break;
			case "내각인_1":
				저장내각인_1(value);
				break;
			case "내각인_2":
				저장내각인_2(value);
				break;
			case "내각인_3":
				저장내각인_3(value);
				break;
			case "내각인_4":
				저장내각인_4(value);
				break;
			case "내각인_5":
				저장내각인_5(value);
				break;
			case "내각인레벨_1":
				저장내각인레벨_1(value);
				break;
			case "내각인레벨_2":
				저장내각인레벨_2(value);
				break;
			case "내각인레벨_3":
				저장내각인레벨_3(value);
				break;
			case "내각인레벨_4":
				저장내각인레벨_4(value);
				break;
			case "내각인레벨_5":
				저장내각인레벨_5(value);
				break;
			default:
				break;
		}
	}


	useEffect(() => {
		// const config = {
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Authorization': `bearer ${process.env.REACT_APP_LOSTARK_API_KEY}`,
		// 		'Content-Type': 'application/json'
		// 	}
		// }

		// axios.get("https://developer-lostark.game.onstove.com/auctions/options", config).then((res) => {
		// 	console.log(res);
		// }).catch((err) => {
		// 	console.log(err);
		// })

		// const data = {
		// 	"ItemLevelMin": 0, // 아이템 최소렙
		// 	"ItemLevelMax": 0, // 아이템 최대렙
		// 	"ItemGradeQuality": 90, // 아이템 품질
		// 	"SkillOptions": [ //장비 트포
		// 		{
		// 			"FirstOption": null,
		// 			"SecondOption": null,
		// 			"MinValue": null,
		// 			"MaxValue": null
		// 		}
		// 	],
		// 	"EtcOptions": [ // 악세 스킬 및 특성
		// 		{
		// 			"FirstOption": 3, //각인 
		// 			"SecondOption": 118, // 원한
		// 			"MinValue": null,
		// 			"MaxValue": null
		// 		},
		// 		{
		// 			"FirstOption": 3,
		// 			"SecondOption": 255,
		// 			"MinValue": null,
		// 			"MaxValue": null
		// 		},
		// 		{
		// 			"FirstOption": 2, //특성
		// 			"SecondOption": 15,
		// 			"MinValue": 450,
		// 			"MaxValue": 500
		// 		},
		// 		{
		// 			"FirstOption": 2,
		// 			"SecondOption": 16,
		// 			"MinValue": 450,
		// 			"MaxValue": 500
		// 		}
		// 	],
		// 	"Sort": "BIDSTART_PRICE",
		// 	"CategoryCode": 200010, // 장비 코드
		// 	"ItemTier": 3, // 장비 티어
		// 	"ItemGrade": "유물", //장비 등급
		// 	"PageNo": 1, // 거래소 검색 페이지 10개씩나옴
		// 	"SortCondition": "ASC" // 정렬 순서
		// }

		// axios.post("https://developer-lostark.game.onstove.com/auctions/items", data, config).then((res) => {
		// 	console.log(res);
		// }).catch((err) => {
		// 	console.log(err);
		// })
	}, [])

	return (
		<div className="App">
			<input type="text" name="맞출각인_1" placeholder="맞출 각인" onChange={onChange} />
			<input type="text" name="맞출각인_2" placeholder="맞출 각인" onChange={onChange} />
			<input type="text" name="맞출각인_3" placeholder="맞출 각인" onChange={onChange} />
			<input type="text" name="맞출각인_4" placeholder="맞출 각인" onChange={onChange} />
			<input type="text" name="맞출각인_5" placeholder="맞출 각인" onChange={onChange} />
			<br />
			<input type="text" name="맞출각인레벨_1" placeholder="맞출 각인 레벨" onChange={onChange} />
			<input type="text" name="맞출각인레벨_2" placeholder="맞출 각인 레벨" onChange={onChange} />
			<input type="text" name="맞출각인레벨_3" placeholder="맞출 각인 레벨" onChange={onChange} />
			<input type="text" name="맞출각인레벨_4" placeholder="맞출 각인 레벨" onChange={onChange} />
			<input type="text" name="맞출각인레벨_5" placeholder="맞출 각인 레벨" onChange={onChange} />
			<button onClick={() => { 맞출각인저장() }}>저장</button>
			<br />
			<br />
			<input type="text" name="내각인_1" placeholder="내 각인" onChange={onChange} />
			<input type="text" name="내각인_2" placeholder="내 각인" onChange={onChange} />
			<input type="text" name="내각인_3" placeholder="내 각인" onChange={onChange} />
			<input type="text" name="내각인_4" placeholder="내 각인" onChange={onChange} />
			<input type="text" name="내각인_5" placeholder="내 각인" onChange={onChange} />
			<br />
			<input type="text" name="내각인레벨_1" placeholder="내 각인 레벨" onChange={onChange} />
			<input type="text" name="내각인레벨_2" placeholder="내 각인 레벨" onChange={onChange} />
			<input type="text" name="내각인레벨_3" placeholder="내 각인 레벨" onChange={onChange} />
			<input type="text" name="내각인레벨_4" placeholder="내 각인 레벨" onChange={onChange} />
			<input type="text" name="내각인레벨_5" placeholder="내 각인 레벨" onChange={onChange} />
			<button onClick={() => { 내각인저장() }}>저장</button>
			<br />
			<br />
			<button onClick={() => { 각인계산() }}>각인계산</button>
		</div>
	);
}

export default App;
