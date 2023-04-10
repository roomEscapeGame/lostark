import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
	const [내가맞출상품, 저장내가맞출상품] = useState([]);
	const [내상품, 저장내상품] = useState([]);
	const [필요상품옵션, 저장필요상품옵션] = useState([]);

	// 저장맞출상품_1(3);
	// 저장맞출상품옵션_1(240);
	// 저장맞출상품_2(3);
	// 저장맞출상품옵션_2(253);
	const [내상품_1, 저장내상품_1] = useState();
	const [내상품_2, 저장내상품_2] = useState();
	const [내상품_3, 저장내상품_3] = useState();
	const [내상품_4, 저장내상품_4] = useState();
	const [내상품_5, 저장내상품_5] = useState();
	const [내상품옵션_1, 저장내상품옵션_1] = useState();
	const [내상품옵션_2, 저장내상품옵션_2] = useState();
	const [내상품옵션_3, 저장내상품옵션_3] = useState();
	const [내상품옵션_4, 저장내상품옵션_4] = useState();
	const [내상품옵션_5, 저장내상품옵션_5] = useState();

	const [맞출상품_1, 저장맞출상품_1] = useState();
	const [맞출상품_2, 저장맞출상품_2] = useState();
	const [맞출상품_3, 저장맞출상품_3] = useState();
	const [맞출상품_4, 저장맞출상품_4] = useState();
	const [맞출상품_5, 저장맞출상품_5] = useState();
	const [맞출상품옵션_1, 저장맞출상품옵션_1] = useState();
	const [맞출상품옵션_2, 저장맞출상품옵션_2] = useState();
	const [맞출상품옵션_3, 저장맞출상품옵션_3] = useState();
	const [맞출상품옵션_4, 저장맞출상품옵션_4] = useState();
	const [맞출상품옵션_5, 저장맞출상품옵션_5] = useState();

	const [skillList, setSkillList] = useState();

	const 맞출상품저장 = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(e);
		switch (name) {

			case "맞출상품_1":
				저장맞출상품_1(value);
				break;
			case "맞출상품_2":
				저장맞출상품_2(value);
				break;
			case "맞출상품_3":
				저장맞출상품_3(value);
				break;
			case "맞출상품_4":
				저장맞출상품_4(value);
				break;
			case "맞출상품_5":
				저장맞출상품_5(value);
				break;
			case "맞출상품옵션_1":
				저장맞출상품옵션_1(value);
				break;
			case "맞출상품옵션_2":
				저장맞출상품옵션_2(value);
				break;
			case "맞출상품옵션_3":
				저장맞출상품옵션_3(value);
				break;
			case "맞출상품옵션_4":
				저장맞출상품옵션_4(value);
				break;
			case "맞출상품옵션_5":
				저장맞출상품옵션_5(value);
				break;
			default:
				break;
		}

		저장내가맞출상품([
			{ 상품: 맞출상품_1, 옵션: Number(맞출상품옵션_1) },
			{ 상품: 맞출상품_2, 옵션: Number(맞출상품옵션_2) },
			{ 상품: 맞출상품_3, 옵션: Number(맞출상품옵션_3) },
			{ 상품: 맞출상품_4, 옵션: Number(맞출상품옵션_4) },
			{ 상품: 맞출상품_5, 옵션: Number(맞출상품옵션_5) },
		]);
	}

	const 내상품저장 = () => {
		저장내상품([
			{ 상품: 내상품_1, 옵션: Number(내상품옵션_1) },
			{ 상품: 내상품_2, 옵션: Number(내상품옵션_2) },
			{ 상품: 내상품_3, 옵션: Number(내상품옵션_3) },
			{ 상품: 내상품_4, 옵션: Number(내상품옵션_4) },
			{ 상품: 내상품_5, 옵션: Number(내상품옵션_5) },
		]);
	}

	const 상품계산 = () => {
		let 복사내상품 = [...내상품];
		let 복사맞출상품 = [...내가맞출상품];
		let 계산된상품 = [];
		for (let i = 0; i < 내가맞출상품.length; i++) {
			for (let j = 0; j < 내상품.length; j++) {
				if (복사맞출상품[i].상품 === 복사내상품[j].상품) {
					계산된상품.push({
						상품: 내가맞출상품[i].상품,
						필요옵션: 내가맞출상품[i].옵션 - 내상품[i].옵션
					})
					break;
				}
			}
		}
		저장필요상품옵션([...계산된상품]);
	}
	const data = {
		"ItemLevelMin": null, // 아이템 최소렙
		"ItemLevelMax": null, // 아이템 최대렙
		"ItemGradeQuality": null, // 아이템 품질
		"SkillOptions": [ //장비 트포고독한 기사
			{
				"FirstOption": null,
				"SecondOption": null,
				"MinValue": null,
				"MaxValue": null
			}
		],
		"EtcOptions": [ // 악세 스킬 및 특성
			{
				"FirstOption": null, //상품 
				"SecondOption": null, // 원한
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
				"FirstOption": null, //특성
				"SecondOption": null,
				"MinValue": null,
				"MaxValue": null
			},
			{
				"FirstOption": null,
				"SecondOption": null,
				"MinValue": null,
				"MaxValue": null
			}
		],
		"Sort": "BuyPrice",
		"CategoryCode": 200000, // 장비 코드(악세)
		"ItemTier": null, // 장비 티어
		"ItemGrade": null, //장비 등급
		"PageNo": 1, // 거래소 검색 페이지 10개씩나옴
		"SortCondition": "ASC" // 정렬 순서
	}


	const pkd계산 = () => {

		let 목표상품 = [맞출상품_1, 맞출상품_2, 맞출상품_3, 맞출상품_4, 맞출상품_5];
		let 목표옵션 = [맞출상품옵션_1, 맞출상품옵션_2, 맞출상품옵션_3, 맞출상품옵션_4, 맞출상품옵션_5];




		// console.log('상품1 : ' + 맞출상품_1 + ' 옵션 : ' + 맞출상품옵션_1);
		// console.log('상품2 : ' + 맞출상품_2 + ' 옵션 : ' + 맞출상품옵션_2);
		// console.log('상품3 : ' + 맞출상품_3 + ' 옵션 : ' + 맞출상품옵션_3);
		// console.log('상품4 : ' + 맞출상품_4 + ' 옵션 : ' + 맞출상품옵션_4);
		// console.log('상품5 : ' + 맞출상품_5 + ' 옵션 : ' + 맞출상품옵션_5);
		const test = [];
		for (let i = 0; i < 5; i++) {
			if (목표상품[i]) {
				test[`${목표상품[i]}`] = 목표옵션[i];
			}

		}



	}

	useEffect(() => {
		// console.log(내가맞출상품);
		// console.log(내상품);
		// console.log(필요상품옵션);
	}, [필요상품옵션, skillList])
	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		switch (name) {

			case "내상품_1":
				저장내상품_1(value);
				break;
			case "내상품_2":
				저장내상품_2(value);
				break;
			case "내상품_3":
				저장내상품_3(value);
				break;
			case "내상품_4":
				저장내상품_4(value);
				break;
			case "내상품_5":
				저장내상품_5(value);
				break;
			case "내상품옵션_1":
				저장내상품옵션_1(value);
				break;
			case "내상품옵션_2":
				저장내상품옵션_2(value);
				break;
			case "내상품옵션_3":
				저장내상품옵션_3(value);
				break;
			case "내상품옵션_4":
				저장내상품옵션_4(value);
				break;
			case "내상품옵션_5":
				저장내상품옵션_5(value);
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		const config = {
			headers: {
				'Accept': 'application/json',
				'Authorization': `bearer ${process.env.REACT_APP_LOSTARK_API_KEY}`,
				'Content-Type': 'application/json'
			}
		}

		axios.get("https://developer-lostark.game.onstove.com/auctions/options", config).then((res) => {
			setSkillList(res.data.EtcOptions[1].EtcSubs);
			res.data.EtcOptions[1].EtcSubs.forEach(el => {
			});
			console.log(res);

		}).catch((err) => {
			console.log(err);
		})



		axios.post("https://developer-lostark.game.onstove.com/auctions/items", data, config).then((res) => {
			res.data.Items.forEach(el => {

			});

			for (let i = 2; i < 1 + res.TotalCount * 0.1; i++) {
				data.PageNo = i;

			}
			// res.Items
		}).catch((err) => {
			console.log(err);
		})
	}, [])
	console.log(내가맞출상품);
	return (
		<div className="App">
			{/* <input type="text" name="맞출상품_1" placeholder="상품1" onChange={onChange} /> */}
			<form action=''>
				<select name="맞출상품_1" id="" >
					<option value="" label="상품1"></option>
					{
						skillList?.map((a, i) => {
							return <option value={a.Value}>{a.Text}</option>


						})
					}
				</select>
				<select name="맞출상품_2" id="" >
					<option value="" label="상품2"></option>
					{
						skillList?.map((a, i) => {
							return <option value={a.Value}>{a.Text}</option>


						})
					}
				</select>
				<select name="맞출상품_3" id="" >
					<option value="" label="상품3"></option>
					{
						skillList?.map((a, i) => {
							return <option value={a.Value}>{a.Text}</option>


						})
					}
				</select>
				<select name="맞출상품_4" id="" >
					<option value="" label="상품4"></option>
					{
						skillList?.map((a, i) => {
							return <option value={a.Value}>{a.Text}</option>


						})
					}
				</select>
				<select name="맞출상품_5" id="" >
					<option value="" label="상품5"></option>
					{
						skillList?.map((a, i) => {
							return <option value={a.Value}>{a.Text}</option>


						})
					}
				</select>

				<br />
				<input type="text" name="맞출상품옵션_1" placeholder="맞출 상품 옵션" onChange={onChange} />
				<input type="text" name="맞출상품옵션_2" placeholder="맞출 상품 옵션" onChange={onChange} />
				<input type="text" name="맞출상품옵션_3" placeholder="맞출 상품 옵션" onChange={onChange} />
				<input type="text" name="맞출상품옵션_4" placeholder="맞출 상품 옵션" onChange={onChange} />
				<input type="text" name="맞출상품옵션_5" placeholder="맞출 상품 옵션" onChange={onChange} />
				<button type="submit" onClick={() => { 맞춤상품저장() }}>저장</button>
			</form>
			<br />
			<br />
			<input type="text" name="내상품_1" placeholder="내 상품" onChange={onChange} />
			<input type="text" name="내상품_2" placeholder="내 상품" onChange={onChange} />
			<input type="text" name="내상품_3" placeholder="내 상품" onChange={onChange} />
			<input type="text" name="내상품_4" placeholder="내 상품" onChange={onChange} />
			<input type="text" name="내상품_5" placeholder="내 상품" onChange={onChange} />
			<br />
			<input type="text" name="내상품옵션_1" placeholder="내 상품 옵션" onChange={onChange} />
			<input type="text" name="내상품옵션_2" placeholder="내 상품 옵션" onChange={onChange} />
			<input type="text" name="내상품옵션_3" placeholder="내 상품 옵션" onChange={onChange} />
			<input type="text" name="내상품옵션_4" placeholder="내 상품 옵션" onChange={onChange} />
			<input type="text" name="내상품옵션_5" placeholder="내 상품 옵션" onChange={onChange} />
			<button onClick={() => { 내상품저장() }}>저장</button>
			<br />
			<br />
			<button onClick={() => { pkd계산() }}>상품계산</button>
		</div>
	);
}

export default App;
