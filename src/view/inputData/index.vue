<template>
<div>
	<el-form label-width="130px" :inline="true" style="padding:10px 10px 0 10px">
	<el-form-item>
        <el-button icon="el-icon-download" type="warning" @click="downloadFile">下载模板</el-button>&nbsp;&nbsp;
	</el-form-item>
	<el-form-item>
		<el-upload
        ref="upload"
        :on-success="submitUpload"
        action="/"
        :show-file-list="false"
        :auto-upload="false"
		accept=".excel, .xls, .xlsx">
        <el-button icon="el-icon-upload" type="success">上传文件</el-button>
    </el-upload>
	</el-form-item>
	<el-form-item style="float:right">
        <el-button  type="primary" color="white" @click="addstudent">确认录入</el-button>
	</el-form-item>
    </el-form>

	<el-row style="padding:10px; border-top: 2px dashed #dddddd;text-align:center;box-sizing:border-box">
		<el-table
          :data="listData"
          style="width: 100%;"
          ref="treeTable"
		  stripe
		  border
          height="500"
          highlight-current-row
          @cell-click="handleCellClick"
		  :header-cell-style="tableHeaderColor"
          >
		  <el-table-column type="index" width="80" label="序号"></el-table-column>
          <el-table-column prop="姓名" label="姓名" ></el-table-column>
          <el-table-column prop="专业" label="专业"  ></el-table-column>
          <el-table-column prop="学号" label="学号" ></el-table-column>
        </el-table>
	 </el-row>
    
</div>
</template>
<script>
import XLSX from 'xlsx';
export default {
   name:'inputData_index',
   data(){
       return{
		   listData:[],
		   attach:''
	   }
   },
   methods:{
       downloadFile(){
		   var option = {};
		   window.location.href="../../../static/学生信息.xlsx"
		   },
       submitUpload(file){ 
		//    console.log('啊什么东西',res)
		//    if (res.code === 1000){ //当后台判断格式正确
					// this.attach = res.data;//保存atatch
					const types = file.name.split('.')[1]
	    			const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
	    			if (!fileType) {
	    			this.$message('格式错误！请重新选择')
	    			return
	    			}
	    			this.file2Xce(file).then(tabJson => {
	    			if (tabJson && tabJson.length > 0) {
					this.listData=tabJson[0]
		   			console.log('数据', this.listData)
	      			}
	    			})
                // }
	   },
	   file2Xce(file) {  
	      return new Promise(function(resolve, reject) {
	      const reader = new FileReader()
	      reader.onload = function(e) {
	      const data = e.target.result
	      this.wb = XLSX.read(data, {
	        type: 'binary'
	      })
	      const result = []
	      this.wb.SheetNames.forEach((sheetName) => {
	        result.push(XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
	        )
	      })
	      resolve(result)
	      }
	      reader.readAsBinaryString(file.raw)
	      })
	   },
	   tableHeaderColor({row,column,rowIndex,columnIndex}){
                return 'background-color:lightblue;color:#fff;font-wight:500;font-size:18px;text-align:center'

            },
	   handleCellClick(){},
	   addstudent(){//确认录入

	   }
	   
   
   
   }
}
</script>
<style lang="scss">

</style>
