import React, { useEffect, useState } from "react";

// api
import { getAuctions } from "apis/imprinting/imprintingApi";

// 테스트용
import axios from "axios";

//컴포넌트
import Select from "components/input/Select";

//스타일
import * as Style from "./style";

function Imprinting() {
    const [skillList, setSkillList] = useState([]); // 각인 리스트
    const [totalImprinting, setTotalImprinting] = useState([]); // 각인 계산해서 정리

    const [skillLevel, setSkillLevel] = useState([5, 10, 15]); // 각인 레벨
    const [imprintingLevel, setImprintingLevel] = useState([3, 6, 9, 12]); //각인서 레벨
    const [stoneLevel, setStoneLevel] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //어빌리스톤 레벨
    const [accessoriesLevel, setAccessoriesLevel] = useState([3, 4, 5, 6]); // 악세 각인 레벨

    const [characteristic, setCharacteristic] = useState(["치명", "특화", "신속", "제압", "인내", "숙련"]); // 악세 특성 종류
    const [penaltyStone, setPenaltyStone] = useState(["공격력 감소", "공격속도 감소", "방어력 감소", "이동속도 감소"]); //어빌리스톤 패널티 종류
    const [itemType, setItemType] = useState("유물"); // 아이템 등급

    const [imprinting, setImprinting] = useState([
        { skill: null, skillLevel: null },
        { skill: null, skillLevel: null },
    ]); // 각인서 정보

    const [stone, setStone] = useState([
        { skill: null, skillLevel: null },
        { skill: null, skillLevel: null },
        { penaltySkill: null, penaltySkillLevel: null },
    ]); // 어빌리스톤 정보

    const [goalsSkill, setGoalsSkill] = useState([
        { skill: null, skillLevel: null },
        { skill: null, skillLevel: null },
        { skill: null, skillLevel: null },
        { skill: null, skillLevel: null },
        { skill: null, skillLevel: null },
        { skill: null, skillLevel: null },
        { skill: null, skillLevel: null },
    ]); // 목표각인 정보

    const [accessories, setAccessories] = useState([
        {
            type: "목걸이", // 장신구 타입
            quality: null, //품질
            characteristic: [ // 특성정보 치명,특화,신속 등등
                { name: null, figure: null },
                { name: null, figure: null },
            ],
            imprinting: [ // 각인 정보
                { skill: null, skillLevel: null },
                { skill: null, skillLevel: null },
            ],
            penalty: [ // 패널티 각인 정보
                { skill: null, skillLevel: null },
            ],
        },
        {
            type: "1번 귀걸이",
            quality: null,
            characteristic: [
                { name: null, figure: null },
            ],
            imprinting: [
                { skill: null, skillLevel: null },
                { skill: null, skillLevel: null },
            ],
            penalty: [
                { skill: null, skillLevel: null },
            ],
        },
        {
            type: "2번 귀걸이",
            quality: null,
            characteristic: [
                { name: null, figure: null },
            ],
            imprinting: [
                { skill: null, skillLevel: null },
                { skill: null, skillLevel: null },
            ],
            penalty: [
                { skill: null, skillLevel: null },
            ],
        },
        {
            type: "1번 반지",
            quality: null,
            characteristic: [
                { name: null, figure: null },
            ],
            imprinting: [
                { skill: null, skillLevel: null },
                { skill: null, skillLevel: null },
            ],
            penalty: [
                { skill: null, skillLevel: null },
            ],
        },
        {
            type: "2번 반지",
            quality: null,
            characteristic: [
                { name: null, figure: null },
            ],
            imprinting: [
                { skill: null, skillLevel: null },
                { skill: null, skillLevel: null },
            ],
            penalty: [
                { skill: null, skillLevel: null },
            ],
        },
    ]);

    const getSkill = async () => {
        let copy = [];
        const res = await getAuctions();
        res.EtcOptions[1].EtcSubs.forEach(el => {
            copy.push(el.Text);
        });
        setSkillList(copy);
    }

    const search = () => {
        const total = [[...goalsSkill]];
        const copyImprinting = [...imprinting];
        const copyStone = [...stone];

        for (let i = 0; i < total[0].length; i++) {
            for (let j = 0; j < copyImprinting.length; j++) {
                if (total[0][i].skill === copyImprinting[j].skill) {
                    total[0][i].skillLevel = total[0][i].skillLevel - copyImprinting[j].skillLevel;
                }
            }
            for (let j = 0; j < copyStone.length; j++) {
                if (total[0][i].skill === copyStone[j].skill) {
                    total[0][i].skillLevel = total[0][i].skillLevel - copyStone[j].skillLevel;
                }
            }
        }

        total.push({ penaltySkill: copyStone[2].penaltySkill, penaltySkillLevel: copyStone[2].penaltySkillLevel },);
        total.push({ itemType: itemType });

        setTotalImprinting(total);
    }

    // console.log(totalImprinting);

    const onChange = (e) => {
        const copyGoalsSkill = [...goalsSkill];
        const copyImprinting = [...imprinting];
        const copyStone = [...stone];
        const copyAccessories = [...accessories];
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "skill_1": // 목표각인
                copyGoalsSkill[0].skill = value;
                break;
            case "skill_2":
                copyGoalsSkill[1].skill = value;
                break;
            case "skill_3":
                copyGoalsSkill[2].skill = value;
                break;
            case "skill_4":
                copyGoalsSkill[3].skill = value;
                break;
            case "skill_5":
                copyGoalsSkill[4].skill = value;
                break;
            case "skill_6":
                copyGoalsSkill[5].skill = value;
                break;
            case "skill_7":
                copyGoalsSkill[6].skill = value;
                break;
            case "skillLevel_1": //목표각인 레벨
                copyGoalsSkill[0].skillLevel = Number(value);
                break;
            case "skillLevel_2":
                copyGoalsSkill[1].skillLevel = Number(value);
                break;
            case "skillLevel_3":
                copyGoalsSkill[2].skillLevel = Number(value);
                break;
            case "skillLevel_4":
                copyGoalsSkill[3].skillLevel = Number(value);
                break;
            case "skillLevel_5":
                copyGoalsSkill[4].skillLevel = Number(value);
                break;
            case "skillLevel_6":
                copyGoalsSkill[5].skillLevel = Number(value);
                break;
            case "skillLevel_7":
                copyGoalsSkill[6].skillLevel = Number(value);
                break;
            case "imprinting_1": // 각인서 정보
                copyImprinting[0].skill = value;
                break;
            case "imprintingLevel_1": // 각인서 정보 레벨
                copyImprinting[0].skillLevel = Number(value);
                break;
            case "imprinting_2":
                copyImprinting[1].skill = value;
                break;
            case "imprintingLevel_2":
                copyImprinting[1].skillLevel = Number(value);
                break;
            case "stone_1": // 어빌리스톤 정보
                copyStone[0].skill = value;
                break;
            case "stoneLevel_1":  // 어빌리스톤 정보 레벨
                copyStone[0].skillLevel = Number(value);
                break;
            case "stone_2":
                copyStone[1].skill = value;
                break;
            case "stoneLevel_2":
                copyStone[1].skillLevel = Number(value);
                break;
            case "stone_3":  // 어빌리스톤 패널티
                copyStone[2].penaltySkill = value;
                break;
            case "stoneLevel_3":  // 어빌리스톤 패널티 레벨
                copyStone[2].penaltySkillLevel = Number(value);
                break;
            case "itemType": //아이템 등급 정보
                setItemType(value);
            case "quality_1": //악세 품질
                copyAccessories[0].quality = value;
                break;
            case "quality_2":
                copyAccessories[1].quality = value;
                break;
            case "quality_3":
                copyAccessories[2].quality = value;
                break;
            case "quality_4":
                copyAccessories[3].quality = value;
                break;
            case "quality_5":
                copyAccessories[4].quality = value;
                break;
            case "characteristic_1_1": //악세 특성
                copyAccessories[0].characteristic[0].name = value;
                break;
            case "characteristic_1_2":
                copyAccessories[0].characteristic[1].name = value;
                break;
            case "characteristic_2":
                copyAccessories[1].characteristic[0].name = value;
                break;
            case "characteristic_3":
                copyAccessories[2].characteristic[0].name = value;
                break;
            case "characteristic_4":
                copyAccessories[3].characteristic[0].name = value;
                break;
            case "characteristic_5":
                copyAccessories[4].characteristic[0].name = value;
                break;
            case "accessoriesImprinting_1_1": // 악세 각인
                copyAccessories[0].imprinting[0].skill = value;
                break;
            case "accessoriesImprinting_1_2":
                copyAccessories[0].imprinting[1].skill = value;
                break;
            case "accessoriesImprinting_2_1":
                copyAccessories[1].imprinting[0].skill = value;
                break;
            case "accessoriesImprinting_2_2":
                copyAccessories[1].imprinting[1].skill = value;
                break;
            case "accessoriesImprinting_3_1":
                copyAccessories[2].imprinting[0].skill = value;
                break;
            case "accessoriesImprinting_3_2":
                copyAccessories[2].imprinting[1].skill = value;
                break;
            case "accessoriesImprinting_4_1":
                copyAccessories[3].imprinting[0].skill = value;
                break;
            case "accessoriesImprinting_4_2":
                copyAccessories[3].imprinting[1].skill = value;
                break;
            case "accessoriesImprinting_5_1":
                copyAccessories[4].imprinting[0].skill = value;
                break;
            case "accessoriesImprinting_5_2":
                copyAccessories[4].imprinting[1].skill = value;
                break;
            case "accessoriesImprintingLevel_1_1": //악세 각인 레벨
                copyAccessories[0].imprinting[0].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_1_2":
                copyAccessories[0].imprinting[1].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_2_1":
                copyAccessories[1].imprinting[0].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_2_2":
                copyAccessories[1].imprinting[1].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_3_1":
                copyAccessories[2].imprinting[0].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_3_2":
                copyAccessories[2].imprinting[1].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_4_1":
                copyAccessories[3].imprinting[0].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_4_2":
                copyAccessories[3].imprinting[1].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_5_1":
                copyAccessories[4].imprinting[0].skillLevel = value;
                break;
            case "accessoriesImprintingLevel_5_2":
                copyAccessories[4].imprinting[1].skillLevel = value;
                break;
            case "accessoriesPenalty_1": // 악세 패널티
                copyAccessories[0].penalty[0].skill = value;
                break;
            case "accessoriesPenalty_2":
                copyAccessories[1].penalty[0].skill = value;
                break;
            case "accessoriesPenalty_3":
                copyAccessories[2].penalty[0].skill = value;
                break;
            case "accessoriesPenalty_4":
                copyAccessories[3].penalty[0].skill = value;
                break;
            case "accessoriesPenalty_5":
                copyAccessories[4].penalty[0].skill = value;
                break;
            case "accessoriesPenaltyLevel_1": // 악세 패널티 레벨
                copyAccessories[0].penalty[0].skillLevel = value;
                break;
            case "accessoriesPenaltyLevel_2":
                copyAccessories[1].penalty[0].skillLevel = value;
                break;
            case "accessoriesPenaltyLevel_3":
                copyAccessories[2].penalty[0].skillLevel = value;
                break;
            case "accessoriesPenaltyLevel_4":
                copyAccessories[3].penalty[0].skillLevel = value;
                break;
            case "accessoriesPenaltyLevel_5":
                copyAccessories[4].penalty[0].skillLevel = value;
                break;

            default:
                break;
        }
        setGoalsSkill([...copyGoalsSkill]);
        setImprinting([...copyImprinting]);
        setStone([...copyStone]);
        setAccessories([...copyAccessories]);
    }

    // console.log(accessories);

    const test = () => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `bearer ${process.env.REACT_APP_LOSTARK_API_KEY}`,
                'Content-Type': 'application/json'
            }
        }

        const data = {
            "ItemLevelMin": null,
            "ItemLevelMax": null,
            "ItemGradeQuality": null,
            "SkillOptions": [
                {
                    "FirstOption": null,
                    "SecondOption": null,
                    "MinValue": null,
                    "MaxValue": null
                }
            ],
            "EtcOptions": [
                {
                    "FirstOption": 3,
                    "SecondOption": null, // 각 코드
                    "MinValue": null,
                    "MaxValue": null
                },
                {
                    "FirstOption": 3,
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

        const 각인리스트 = [240, 242, 243];
        const Acc리스트 = [200010, 200020, 200030];
        const 리스트 = [];

        for (let i = 0; i < 각인리스트.length; i++) {
            for (let j = i + 1; j < 각인리스트.length; j++) {
                // console.log(`[${각인리스트[i]}, ${각인리스트[j]}]`);
                data.EtcOptions[0].SecondOption = 각인리스트[i];
                data.EtcOptions[1].SecondOption = 각인리스트[j];
                Acc리스트.forEach(el => {
                    data.CategoryCode = el;
                    axios.post("https://developer-lostark.game.onstove.com/auctions/items", data, config).then((res) => {
                        // console.log(data.EtcOptions);
                        // console.log(res.data.Items);

                        if (res.data.Items) {
                            res.data.Items.forEach(el => {
                                // console.log(el);
                                리스트.push(el);
                            });
                        }

                        for (let i = 2; i < Math.ceil(res.data.TotalCount / 10) + 1; i++) {

                            data.PageNo = i;

                            axios.post("https://developer-lostark.game.onstove.com/auctions/items", data, config).then((res) => {

                                if (res.data.Items) {
                                    res.data.Items.forEach(el => {
                                        // console.log(el);
                                        리스트.push(el);
                                    });
                                }

                            }).catch((err) => {
                                console.log(err);
                            })


                            if (res.data.Items) {
                                res.data.Items.forEach(el => {
                                    리스트.push(el);
                                });
                            }
                        }


                        리스트.sort(function (a, b) {
                            if (a.AuctionInfo.BuyPrice > b.AuctionInfo.BuyPrice) return 1;
                            if (a.AuctionInfo.BuyPrice === b.AuctionInfo.BuyPrice) return 0;
                            if (a.AuctionInfo.BuyPrice < b.AuctionInfo.BuyPrice) return -1;
                        });
                        console.log(리스트);
                    }).catch((err) => {
                        console.log(err);
                    })
                });

            }

        }
    }

    useEffect(() => {
        getSkill();
        test();
    }, [])
    return (
        <>
            <Style.Container>
                <Style.Title>목표각인</Style.Title>
                <Style.Selects>
                    {
                        goalsSkill.map((a, i) => {
                            return (
                                <li key={i}>
                                    <h3>{i + 1} 번 각인</h3>
                                    <Select name={`skill_${i + 1}`} onChange={onChange} options={skillList} defaultOption={"각인"} />
                                    <Select name={`skillLevel_${i + 1}`} onChange={onChange} options={skillLevel} defaultOption={"각인레벨"} />
                                </li>
                            )
                        })
                    }
                </Style.Selects>
            </Style.Container>

            <Style.Container>
                <Style.Title>장착 각인서</Style.Title>
                <Style.Selects>
                    <li>
                        <h3>1번 각인서</h3>
                        <Select name="imprinting_1" onChange={onChange} options={goalsSkill} defaultOption={"각인서"} type="각인서" />
                        <Select name="imprintingLevel_1" onChange={onChange} options={imprintingLevel} defaultOption={"각인서 레벨"} />
                    </li>
                    <li>
                        <h3>2번 각인서</h3>
                        <Select name="imprinting_2" onChange={onChange} options={goalsSkill} defaultOption={"각인서"} type="각인서" />
                        <Select name="imprintingLevel_2" onChange={onChange} options={imprintingLevel} defaultOption={"각인서 레벨"} />
                    </li>
                </Style.Selects>
            </Style.Container>

            <Style.Container>
                <Style.Title>어빌리스톤</Style.Title>
                <Style.Selects>
                    <li>
                        <h3>1번 각인</h3>
                        <Select name="stone_1" onChange={onChange} options={goalsSkill} defaultOption={"어빌리스톤"} type="각인서" />
                        <Select name="stoneLevel_1" onChange={onChange} options={stoneLevel} defaultOption={"어빌리스톤 레벨"} />
                    </li>
                    <li>
                        <h3>2번 각인</h3>
                        <Select name="stone_2" onChange={onChange} options={goalsSkill} defaultOption={"어빌리스톤"} type="각인서" />
                        <Select name="stoneLevel_2" onChange={onChange} options={stoneLevel} defaultOption={"어빌리스톤 레벨"} />
                    </li>
                    <li>
                        <h3>패널티 각인</h3>
                        <Select name="stone_3" onChange={onChange} options={penaltyStone} defaultOption={"어빌리스톤"} />
                        <Select name="stoneLevel_3" onChange={onChange} options={stoneLevel} defaultOption={"패널티 레벨"} />
                    </li>
                </Style.Selects>
            </Style.Container>

            <Style.Container>
                <Style.Title>장신구<span>(특성 선택 후 보유중인 악세가 있다면 각인,패널티 각인 선택해주시면됩니다 없으면 놔두시면됩니다.)</span></Style.Title>
                <Style.Selects_2>
                    <li>
                        <h3>목걸이</h3>
                        <div>
                            <Select name="quality_1" onChange={onChange} options={characteristic} defaultOption={"품질"} />
                            <Select name="characteristic_1_1" onChange={onChange} options={characteristic} defaultOption={"특성"} />
                            <Select name="characteristic_1_2" onChange={onChange} options={characteristic} defaultOption={"특성"} />
                            <Select name="accessoriesImprinting_1_1" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_1_1" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesImprinting_1_2" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_1_2" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesPenalty_1" onChange={onChange} options={penaltyStone} defaultOption={"패널티각인"} />
                            <Select name="accessoriesPenaltyLevel_1" onChange={onChange} options={stoneLevel} defaultOption={"패널티각인 레벨"} />
                        </div>
                    </li>
                    <li>
                        <h3>귀걸이</h3>
                        <div>
                            <Select name="quality_2" onChange={onChange} options={characteristic} defaultOption={"품질"} />
                            <Select name="characteristic_2" onChange={onChange} options={characteristic} defaultOption={"특성"} />
                            <Select name="accessoriesImprinting_2_1" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_2_1" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesImprinting_2_2" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_2_2" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesPenalty_2" onChange={onChange} options={penaltyStone} defaultOption={"패널티각인"} />
                            <Select name="accessoriesPenaltyLevel_2" onChange={onChange} options={stoneLevel} defaultOption={"패널티각인 레벨"} />
                        </div>
                    </li>
                    <li>
                        <h3>귀걸이</h3>
                        <div>
                            <Select name="quality_3" onChange={onChange} options={characteristic} defaultOption={"품질"} />
                            <Select name="characteristic_3" onChange={onChange} options={characteristic} defaultOption={"특성"} />
                            <Select name="accessoriesImprinting_3_1" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_3_1" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesImprinting_3_2" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_3_2" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesPenalty_3" onChange={onChange} options={penaltyStone} defaultOption={"패널티각인"} />
                            <Select name="accessoriesPenaltyLevel_3" onChange={onChange} options={stoneLevel} defaultOption={"패널티각인 레벨"} />
                        </div>
                    </li>
                    <li>
                        <h3>반지</h3>
                        <div>
                            <Select name="quality_4" onChange={onChange} options={characteristic} defaultOption={"품질"} />
                            <Select name="characteristic_4" onChange={onChange} options={characteristic} defaultOption={"특성"} />
                            <Select name="accessoriesImprinting_4_1" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_4_1" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesImprinting_4_2" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_4_2" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesPenalty_4" onChange={onChange} options={penaltyStone} defaultOption={"패널티각인"} />
                            <Select name="accessoriesPenaltyLevel_4" onChange={onChange} options={stoneLevel} defaultOption={"패널티각인 레벨"} />
                        </div>
                    </li>
                    <li>
                        <h3>반지</h3>
                        <div>
                            <Select name="quality_5" onChange={onChange} options={characteristic} defaultOption={"품질"} />
                            <Select name="characteristic_5" onChange={onChange} options={characteristic} defaultOption={"특성"} />
                            <Select name="accessoriesImprinting_5_1" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_5_1" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesImprinting_5_2" onChange={onChange} options={skillList} defaultOption={"각인"} />
                            <Select name="accessoriesImprintingLevel_5_2" onChange={onChange} options={accessoriesLevel} defaultOption={"각인 레벨"} />
                            <Select name="accessoriesPenalty_5" onChange={onChange} options={penaltyStone} defaultOption={"패널티각인"} />
                            <Select name="accessoriesPenaltyLevel_5" onChange={onChange} options={penaltyStone} defaultOption={"패널티각인 레벨"} />
                        </div>
                    </li>
                </Style.Selects_2>
            </Style.Container>

            <Style.Container>
                <Style.Title>경매장 검색</Style.Title>
                <Style.Radio>
                    <li>
                        <label>
                            <input checked type="radio" name="itemType" onChange={onChange} />
                            <span>유물</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="itemType" onChange={onChange} />
                            <span>고대</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="itemType" onChange={onChange} />
                            <span>전체</span>
                        </label>
                    </li>
                </Style.Radio>
                <Style.Searching onClick={search}>검색</Style.Searching>
            </Style.Container>

        </>
    );
}

export default Imprinting;
