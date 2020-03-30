//1.Array中元素是Object
var cities = [
    { id: 'taipei', name: '台北' },
    { id: 'taoyuan', name: '桃園' },
    { id: 'taichung', name: '台中' }
];

//2.Object中屬性值是Array
//確診,死亡,治癒
var virus = {
    Taiwan: [41, 1, 12],
    China: [80134, 2914, 44595],
    America: [9665, 146, 694]
}

//3.Array中元素是Array
//確診,死亡,治癒
var Taiwan = [41, 1, 12];
var China = [80134, 2914, 44595];
var America = [9665, 146, 694];
var Global = [Taiwan, China, America];

var global = [
    [41, 1, 12],
    [80134, 2914, 44595],
    [9665, 146, 694]];

//4.Object中屬性值是Object
var districtObject = {
    taipei: [
        { id: 'taipei01', district: '中正區' },
        { id: 'taipei02', district: '萬華區' },
        { id: 'taipei03', district: '信義區' }],
    taoyuan: [
        { id: 'taoyuan01', district: '桃園市' },
        { id: 'taoyuan02', district: '八德市' },
        { id: 'taoyuan03', district: '中壢市' }],
    taichung: [
        { id: 'taichung01', district: '台中市' },
        { id: 'taichung02', district: '大里市' },
        { id: 'taichung03', district: '清水市' }]
};

//5.Object中屬性值是string, number, array, object混合
var person = {
    name: 'Jane',
    height: 168,
    weight: 52,
    phones: {
        home: "(03)366-4946",
        office: "(03)342-5178",
        mobile: "0922-155342"
    },
    BWH: [36, 24, 36]  
    //Bust、Waist、Hips胸腰臀三圍(吋)
}
