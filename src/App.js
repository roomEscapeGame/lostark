import axios from "axios";
import React, { useEffect } from "react";
function App() {
	useEffect(() => {
		const config = {
			headers: {
				'Accept': 'application/json',
				'Authorization': `bearer ${process.env.REACT_APP_LOSTARK_API_KEY}`,
				'Content-Type': 'application/json'
			}
		}

		axios.get("https://developer-lostark.game.onstove.com/auctions/options", config).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		})

		const data = {
			"ItemLevelMin": 0, // 아이템 최소렙
			"ItemLevelMax": 0, // 아이템 최대렙
			"ItemGradeQuality": 90, // 아이템 품질
			"SkillOptions": [ //장비 트포
				{
					"FirstOption": null,
					"SecondOption": null,
					"MinValue": null,
					"MaxValue": null
				}
			],
			"EtcOptions": [ // 악세 스킬 및 특성
				{
					"FirstOption": 3, //각인 
					"SecondOption": 118, // 원한
					"MinValue": null,
					"MaxValue": null
				},
				{
					"FirstOption": null,
					"SecondOption": null,
					"MinValue": null,
					"MaxValue": null
				},
				{
					"FirstOption": 2, //특성
					"SecondOption": 15,
					"MinValue": 450,
					"MaxValue": 500
				},
				{
					"FirstOption": 2,
					"SecondOption": 16,
					"MinValue": 450,
					"MaxValue": 500
				}
			],
			"Sort": "BIDSTART_PRICE",
			"CategoryCode": 200010, // 장비 코드
			"ItemTier": 3, // 장비 티어
			"ItemGrade": "유물", //장비 등급
			"PageNo": 1, // 거래소 검색 페이지 10개씩나옴
			"SortCondition": "ASC" // 정렬 순서
		}

		axios.post("https://developer-lostark.game.onstove.com/auctions/items", data, config).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		})
	}, [])

	return (
		<div className="App">
		</div>
	);
}

export default App;
