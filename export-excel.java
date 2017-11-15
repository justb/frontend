public class WriteExcel {
	public static Map<String,Object> WriteExcel(List<String> headerList,List<Map<String,Object>> dataList,String filePath){
		Map<String, Object> result = new HashMap<String, Object>();
		HSSFWorkbook workbook = new HSSFWorkbook();                        
		FileOutputStream excelFos=null;
		//excel样式
		HSSFCellStyle cellStyle = workbook.createCellStyle();
		cellStyle.setAlignment(cellStyle.ALIGN_CENTER);//水平居中  
		cellStyle.setVerticalAlignment(cellStyle.VERTICAL_CENTER);//垂直居中  
		cellStyle.setWrapText(true);//设置自动换行
		
		try {
			HSSFSheet sheet = workbook.createSheet();
			HSSFRow headerRow = sheet.createRow(0);
			headerRow.setHeightInPoints(30);
			for (int i = 0; i < headerList.size(); i++) {  
				HSSFCell  header = headerRow.createCell(i);                		//创建列头对应个数的单元格
				header.setCellType(HSSFCell.CELL_TYPE_STRING);                	//设置列头单元格的数据类型
				HSSFCellStyle cellStyle1=workbook.createCellStyle();    
				cellStyle1.setWrapText(true);    
				header.setCellStyle(cellStyle); 
				HSSFRichTextString text = new HSSFRichTextString(headerList.get(i));
                header.setCellValue(text);                                    	//设置列头单元格的值
			}
			int rowNumCount = sheet.getLastRowNum();
			for (int j = 0; j < dataList.size(); j++) {  
				HSSFRow newRow = sheet.createRow(rowNumCount+j + 1);  
				newRow.setHeightInPoints(20);
				sheet.autoSizeColumn(j+1, true);
				
                Map<String, Object> dataMap = dataList.get(j);
                
        		List<String> mapList=manageMap(dataMap);
        		
        		for(int i=0;i<mapList.size();i++){
        			HSSFCell hssfCell = newRow.createCell(i);
        			hssfCell.setCellStyle(cellStyle);
        			hssfCell.setCellValue(mapList.get(i)); 
        		} 
            }  
			
			
			excelFos= new FileOutputStream(filePath);
			workbook.write(excelFos);	
			result.put("result", "success");
			result.put("message", "数据导出成功");
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.put("result", "error");
			result.put("message", "数据导出失败");
			return result;
		}
	}
}
