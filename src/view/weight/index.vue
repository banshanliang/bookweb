<template>
  <div>
    <el-form
      label-width="130px"
      :inline="true"
      style="padding: 10px 10px 0 10px"
      v-if="this.$store.state.authority == 'admin'"
    >
      <el-form-item label="输入学号：" prop="desc" style="margin-bottom: 1px">
        <el-input
          type="text"
          label="输入学号  ："
          class="resizeNone"
          v-model="sno"
          placeholder="请输入学号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="handleClick"
          >查询</el-button
        >
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="成绩对比图" name="1">
          <el-col :span="17"><div
          id="myChart"
          :style="{
            width: '100%',
            height: '500px',
            display: 'inline-block',
          }"
        ></div></el-col>
        <el-col :span="6">
        <el-divider >风声、雨声、读书声、声声入耳</el-divider>
        <div class="introtext">根据成绩对比图情况，您的综合成绩总体水平低于年级平均水准，并有多门挂科情况。建议您阅读大类课程相关辅导书，结合课本，提升基础能力。</div>
        <div class="introbox"></div></el-col>
        </el-tab-pane>
      <el-tab-pane label="成绩雷达图" name="2">
          <el-col :span="17"><div
          id="myChart2"
          :style="{
            width: '1000px',
            height: '500px',
            display: 'inline-block',
          }"
        ></div></el-col><el-divider direction="vertical"></el-divider>
        <el-col :span="6"><el-divider >读书贵神解，无事守章句</el-divider>
        <div class="introtext">根据成绩雷达图情况，您的信息技术成绩远高于其余们类，建议您发挥优势，阅读相关书籍，取得进一步地提升。同时也请不要落下其余功课。</div>
        <div class="introbox"></div></el-col>
      </el-tab-pane>
      <el-tab-pane label="倾向环形图" name="3"
        > <el-col :span="17"><div
          id="myChart3"
          :style="{
            width: '1000px',
            height: '500px',
            display: 'inline-block',
          }"
        ></div></el-col><el-divider direction="vertical"></el-divider>
        <el-col :span="6"><el-divider >非淡泊无以明志，非宁静无以致远</el-divider>
        <div class="introtext">根据倾向环形图情况，您的综合成绩总体水平低于年级平均水准，并有多门挂科情况。建议您阅读大类课程相关辅导书，结合课本，提升基础能力。</div>
        <div class="introbox"></div></el-col></el-tab-pane>
      <el-tab-pane label="成绩折线图" name="4"><el-col :span="17"><div
          id="myChart4"
          :style="{
            width: '1000px',
            height: '500px',
            display: 'inline-block',
          }"
        ></div></el-col><el-divider direction="vertical"></el-divider>
        <el-col :span="6"><el-divider >读不在三更五鼓，功只怕一曝十寒</el-divider>
        <div class="introtext">根据成绩折线图情况，您的成绩波动起伏较大，建议您泵实基础，勿慌于嬉，抓住时间，不在毕业之际功亏一篑。</div>
        <div class="introbox"></div></el-col></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
//导入echart包制作词云图
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";

export default {
  data() {
    return {
        activeName:'1'
    };
  },
  mounted() {
    this.drawLine1();
    this.drawLine2();
    this.drawLine3();
    this.drawLine4();
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "成绩对比图",
        },
        //提示框组件，专门配置提示框的。
        tooltip: {
          trigger: "axis",
          // 坐标轴指示器配置项。
          axisPointer: {
            type: "cross", //指示器样试
          },
        },
        //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
        toolbox: {
          feature: {
            // 动态类型切换,切换图表
            magicType: {
              type: ["line", "bar"],
            },
            //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
            dataView: {
              show: true, //是否显示 数据示图
              readOnly: false, //是否 直接可以编辑数据。
            },
            //保存为图片的配置
            saveAsImage: {
              show: true,
            },
            //配置项还原
            restore: { show: true },
          },
        },
        //图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
        legend: {
          data: ["实际分数", "平均分数"], //对应的是name
        },
        //配置X轴
        xAxis: {
          //坐标轴类型
          type: "category",
          //配置类目名称。 可以逐一设置，具体看文档
          data: [
            "c程序设计",
            "高等数学",
            "大学英语I",
            "大学体育",
            "新生研讨课",
            "面向对象",
            "a",
            "八月",
            "aa",
            "aaa",
            "aaaa",
            "aaaaa",
          ],
          //配置 鼠标移入时显示的 阴影指示器'line' 直线指示器 'shadow' 阴影指示,器  'none' 无指示器
          axisPointer: {
            show: true, //show 必须写，开关的作用
            type: "shadow",
          },
        },
        //配置Y轴
        yAxis: [
          {
            type: "value", //坐标轴类型
            name: "实际分数", //名称
            min: 0, //最小值
            max: 100, //最大值
            interval: 10, //列数
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              formatter: "{value}", //字符串模板
            },
          },
        ],
        //系列列表。每个系列通过 type 决定自己的图表类型,一个对象表示一个列表
        series: [
          {
            name: "实际分数",
            type: "bar",
            data: [15, 25, 40, 20, 20, 22, 23, 44, 42, 25, 32, 45],
            itemStyle: {
                // '#ca8622',"d8e2dc","fdfcdc","b8b8d1","ffc145","ff6b6c"
                normal: {

　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，

                        color: function(params) {
                            var colorList = [
                              '#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#ca8622',"#ffa69e","#8ecae6","#83c5be","#ffc145","#ff6b6c","cc8b86"
                            ];
                            return colorList[params.dataIndex]
                        },}
            },
          },
          {
            name: "平均分数",
            type: "line",
            data: [45, 54, 66, 50, 40, 32, 43, 76, 65, 55, 87, 75],
          },
        ],
        //图表的颜色
        color: [
          "#c23531","#ef8354"
        ],
      });
      //鼠标事件
      myChart.on("click", function (params) {
        console.log(params);
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart2.setOption({
        title: {
          text: "成绩雷达图",
        },
        tooltip: {},
        legend: {
          data: [
            "方案内成绩（Allocated Budget）",
            "方案外成绩（Actual Spending）",
          ],
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: [
            { name: "英语（sales）", max: 6500 },
            { name: "第二课堂（Administration）", max: 16000 },
            { name: "信息技术（Information Techology）", max: 30000 },
            { name: "法律法制（Customer Support）", max: 38000 },
            { name: "经管（Development）", max: 52000 },
            { name: "大数据（Marketing）", max: 25000 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "方案内成绩（Allocated Budget）",
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "方案外成绩（Actual Spending）",
              },
            ],
          },
        ],
      });
    },
    drawLine3() {
      // 基于准备好的dom，初始化echarts实例
      var myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      myChart3.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: [
            "绘画",
            "前端",
            "游戏制作",
            "文学",
            "英语",
            "算法",
            "考研",
            "创业",
            "考公务员",
            "四六级",
          ],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              position: "inner",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "绘画", selected: true },
              { value: 679, name: "前端" },
              { value: 1548, name: "游戏制作" },
            ],
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center",
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0,
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33,
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2,
                },
              },
            },
            data: [
              { value: 335, name: "文学" },
              { value: 310, name: "英语" },
              { value: 234, name: "算法" },
              { value: 135, name: "考研" },
              { value: 1048, name: "创业" },
              { value: 251, name: "考公务员" },
              { value: 147, name: "四六级" },
              { value: 102, name: "其他" },
            ],
          },
        ],
      });
    },
    drawLine4() {
      // 基于准备好的dom，初始化echarts实例
      var myChart4 = this.$echarts.init(document.getElementById("myChart4"));
      // 绘制图表
      myChart4.setOption({
        title: {
        text: '成绩折线图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['专业课成绩', '大类课成绩', '选修课成绩', '二课成绩', '400公里健身成绩']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['大一上', '大一下', '大二上', '大二下', '大三上', '大三下', '大四上','大四下']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '专业课成绩',
            type: 'line',
            data: [40,56,83,67,94,26,34]
        },
        {
            name: '大类课成绩',
            type: 'line',
            data: [80, 82, 91, 34, 90, 38, 65]
        },
        {
            name: '选修课成绩',
            type: 'line',
            data: [50, 82, 71, 54, 90, 66, 41]
        },
        {
            name: '二课成绩',
            type: 'line',
            data: [32, 72, 51, 94, 50, 83, 73]
        },
        {
            name: '400公里健身成绩',
            type: 'line',
            data: [45, 93, 91, 34, 90, 80, 60]
        }
    ]
      });
    },
  },
};
</script>
<style lang='scss' src='../../../static/css/weight.css'>
</style>
