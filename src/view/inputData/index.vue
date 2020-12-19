<template>
<div>
	<el-row style="padding:10px; border-top: 2px dashed #dddddd;text-align:center;box-sizing:border-box">
  <el-divider>书痴者文必工，艺痴者技必良</el-divider>
		<el-col :span="17"><el-scrollbar style="height: 500px; width: 100%" class="totop">
		<el-row style="width: 100%"
              ><el-table
          :data="listData"
          style="width: 100%;"
          ref="treeTable"
		  stripe
		  border
		  height="500"
          highlight-current-row
		  :header-cell-style="tableHeaderColor"
          >
		  <el-table-column type="index" width="80" label="序号"></el-table-column>
          <el-table-column prop="姓名" label="姓名" ></el-table-column>
          <el-table-column prop="专业" label="专业"  ></el-table-column>
          <el-table-column prop="学号" label="学号" ></el-table-column>
          <el-table-column prop="操作" label="操作" width="180" ><div>
                    <el-popconfirm
                      confirm-button-text="确认"
                      cancel-button-text="取消"
                      icon="el-icon-info"
                      title="确定删除该学生？"
                    >
                      <div slot="reference">
                        <div class="icon_menu3">
                          <span
                            class="iconfont bookdelete"
                            rel="nofollow"
                          ></span>
                        </div>

                        <div
                          style="
                            float: left;
                            margin-left: 20px;
                            line-height: 40px;
                          "
                        >
                          删除
                        </div>
                      </div>
                    </el-popconfirm>
                  </div></el-table-column>
        </el-table></el-row>
		</el-scrollbar></el-col>
		<el-col :span="7"><el-form label-width="130px" :inline="true">
	<el-form-item style="width:100%;margin-top:30px">
        <el-button icon="el-icon-download" @click="downloadFile" style="width:200px;background-color:#bee9e8" round>下载模板</el-button>&nbsp;&nbsp;
	</el-form-item>
	<el-form-item style="width:100%">
		<el-upload
        ref="upload"
		action=""
        :on-change="submitUpload"
        :show-file-list="false"
        :auto-upload="false">
        <el-button icon="el-icon-upload" style="width:200px;background-color:#62b6cb" round>上传文件</el-button>
    </el-upload>
	</el-form-item>
	<el-form-item style="width:100%">
        <el-button  icon="bookadd1 iconfont" color="white" @click="addstudent" style="width:200px;background-color:#fefee3" round> 确认录入</el-button>
	</el-form-item>
    </el-form></el-col>
	 </el-row>
    
</div>
</template>
<script>
import{inputData}from'../../url.js'
import XLSX from 'xlsx';
export default {
   name:'inputData_index',
   data(){
       return{
		   listData:[]
	   }
   },
   methods:{
       downloadFile(){
		   var option = {};
		   window.location.href="../../../static/学生信息.xlsx"
		   },
       submitUpload(file){ 
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
	   addstudent(){
		   inputData(this.listData).then(res=>{
			   console.log(res)
		   })
		   .catch(err=>{
			   console.log(err)
		   })
	   }
   
   
   }
}
</script>
<style lang="scss" src='../../../static/css/inputData.css'>

</style>
