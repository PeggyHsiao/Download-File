const ExportJsonExcel = require("js-export-excel");

var option = {};

option.fileName = "excel";

option.datas = [
  {
    sheetData: [
     ['aaaaa', 'bbbbbb', 'cccccc'],
     ['AAAAA', 'BBBBB', 'CCCCC'],
    ],
    sheetName: "我是第一張工作表",
    sheetHeader: ["第一列", "第二列"],
  },
  {
    sheetData: [
      ['111'],
    ],
  },
];

var toExcel = new ExportJsonExcel(option); 

const btn = document.getElementById('mybtn');
btn.addEventListener('click', () => {
    toExcel.saveExcel();
})