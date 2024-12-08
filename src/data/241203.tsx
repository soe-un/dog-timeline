import { LABELS, TLABEL, TLINES } from "@/types/type";

const data: TLINES[] = [
  {
    type: LABELS.GREEN as TLABEL,
    time: "17:00",
    people: "특전사 참수부대·707특임단",
    value: "계엄 선포 5시간 전부터 작전대기",
  },
  {
    type: LABELS.PURPLE as TLABEL,
    time: "20:00",
    value: `국무회의 안건 '비상계엄령' 한덕수(국무총리) 계엄 반대하자 윤 대통령 "내가 책임지겠다" 밀어붙여`,
  },
  {
    type: LABELS.BLUE as TLABEL,
    time: "22:25",
    people: "박선원(더불어민주당 의원)",
    value: "비상계엄 발표 직전 이상한 낌새 느껴 국회로 출발",
  },
  {
    type: LABELS.PURPLE as TLABEL,
    time: "22:25",
    people: "윤석열(대통령)",
    value: "용산 대통령실서 심야 긴급 담화 발표",
  },
  {
    type: LABELS.PURPLE as TLABEL,
    time: "22:30",
    people: "윤석열(대통령)",
    value: "비상계엄 선포",
  },
  {
    type: LABELS.GREEN as TLABEL,
    time: "22:41",
    people: "국방부",
    value: "전군 주요지휘관회의 개최, 경계 강화",
  },
  {
    type: LABELS.RED as TLABEL,
    time: "22:49",
    people: "한동훈(국민의힘 대표)",
    value: `비상계엄 선포 잘못된 것... 국민과 함께 막겠다`,
  },
  {
    type: LABELS.BLUE as TLABEL,
    time: "22:53",
    people: "이재명(더불어민주당 대표)",
    value: "지금 이순간부터 윤석열 대통령은 대통령이 아냐",
  },
  {
    type: LABELS.RED as TLABEL,
    time: "23:00",
    people: "한동훈(국민의힘 대표)",
    value: `"본회의장 가자" VS 추경호(국민의힘 원내대표) "당사에 남자"`,
  },
  {
    type: LABELS.ORANGE as TLABEL,
    time: "23:07",
    people: "우원식(국회의장)",
    value: `의원 모이면 모든 곳이 국회... 본회의 바로 연다`,
  },
  {
    type: LABELS.PINK as TLABEL,
    time: "23:10",
    people: "조지호(경찰청장)",
    value: `자정 긴급 간부회의 소집`,
  },
  {
    type: LABELS.PURPLE as TLABEL,
    time: "23:25",
    people: "윤석열(대통령)",
    value: `계엄사령관에 육군 대장 박안수 임명`,
  },
  {
    type: LABELS.GREEN as TLABEL,
    time: "23:30",
    people: "계엄사령부",
    value: `포고령 포고`,
  },
  {
    type: LABELS.BROWN as TLABEL,
    time: "23:32",
    people: "BBC",
    value: `"코리아의 레임덕 대통령이 핵폭탄을 터트렸다"`,
  },
  {
    type: LABELS.BROWN as TLABEL,
    time: "23:42",
    people: "한국거래소",
    value: `"내일 증시 정상 운영"`,
  },
];

export default data;
