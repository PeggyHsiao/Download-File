const ExcelJs = require("exceljs");

const workbook = new ExcelJs.Workbook();

const sheet = workbook.addWorksheet('工作表名稱');
const sheet2 = workbook.addWorksheet('工作表AAAA');

sheet.addTable({
    name: 'table',
    ref: 'A1', // 從A1開始
    headerRow: false,
    columns: [{name:'欄位1'},{name:'欄位2'},{name:'欄位3'}],
    rows: [['小明','20','0987654321'],['小美','23','0912345678']]
});

sheet2.addTable({
    name: 'table2', 
    ref: 'A1', // 從A1開始
    headerRow: false,
    columns: [{name: 'header'}],
    rows: []
});



const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    workbook.xlsx.writeBuffer().then((content) => {
        const link = document.createElement("a");
      const blobData = new Blob([content], {
        type: "application/vnd.ms-excel;charset=utf-8;"
      });
      link.download = '測試的試算表.xlsx';
      link.href = URL.createObjectURL(blobData);
      link.click();
    });
})