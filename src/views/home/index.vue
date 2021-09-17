<template>
    <div class="home-container">
        <h1>首页</h1>
        <div ref="home" style="width: 600px;height:400px;"></div>

            <div class="pro-rule">
                <h2>预期评价标准</h2>
                <div class="rule-top">
                    <el-row>
                        <el-col :span="2">序号</el-col>
                        <el-col :span="6">维度</el-col>
                        <el-col :span="8">目标</el-col>
                        <el-col :span="4">占比</el-col>
                        <el-col :span="4">操作</el-col>
                    </el-row>
                </div>
                <div class="rule-main">
                    <el-form :model="formRule" align="center" class="rule-main">
                        <el-form-item>
                            <el-row>
                                <el-col :span="2"><div>1</div></el-col>
                                <el-col :span="6"><div>审计周期</div></el-col>
                                <el-col :span="8"><div><el-input v-model="formRule.name" placeholder="请输入内容" class="input_big"></el-input></div></el-col>
                                <el-col :span="4"><div><el-input v-model="formRule.number" placeholder="请输入内容" class="input_small"></el-input></div></el-col>
                                <el-col :span="1"><div>%</div></el-col>
                                <el-col :span="3"></el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item>
                            <el-row v-for="(item,bindex) in ruleData" :key="bindex">
                                <el-col :span="2"><div>2</div></el-col>
                                <el-col :span="6">
                                    <div>
                                        <span style="display: block">可货币计量的审计成果</span>
                                        <el-select v-model="formRule.team" placeholder="增收节支">
                                            <el-option label="增收节支" value="" />
                                        </el-select>
                                    </div>
                                </el-col>
                                <el-col :span="8"><div><el-input v-model="formRule.name" placeholder="请输入内容" class="input_big"></el-input></div></el-col>
                                <el-col :span="4"><div><el-input v-model="formRule.number" placeholder="请输入内容" class="input_small"></el-input></div></el-col>
                                <el-col :span="1"><div>%</div></el-col>
                                <el-col :span="3">
                                    <div>
                                        <el-button icon="el-icon-plus" circle @click="addRule"></el-button>
                                        <el-button icon="el-icon-minus" circle @click="deleteRule"></el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item>
                            <el-row>
                                <el-col :span="2"><div>3</div></el-col>
                                <el-col :span="6"><div>整改达成率</div></el-col>
                                <el-col :span="8"><div><el-input v-model="formRule.name" placeholder="请输入内容" class="input_big"></el-input></div></el-col>
                                <el-col :span="4"><div><el-input v-model="formRule.number" placeholder="请输入内容" class="input_small"></el-input></div></el-col>
                                <el-col :span="1"><div>%</div></el-col>
                                <el-col :span="3"></el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item>
                            <el-row>
                                <el-col :span="2"><div>4</div></el-col>
                                <el-col :span="6"><div>出具正式审计报告</div></el-col>
                                <el-col :span="8"><div><el-input v-model="formRule.name" placeholder="请输入内容" class="input_big"></el-input></div></el-col>
                                <el-col :span="4"><div><el-input v-model="formRule.number" placeholder="请输入内容" class="input_small"></el-input></div></el-col>
                                <el-col :span="1"><div>%</div></el-col>
                                <el-col :span="3"></el-col>
                            </el-row>
                        </el-form-item>


                        <el-form-item>
                            <el-row>
                                <el-col :span="2"><div>5</div></el-col>
                                <el-col :span="6"><div>培训宣贯</div></el-col>
                                <el-col :span="8"><div><el-input v-model="formRule.name" placeholder="请输入内容" class="input_big"></el-input></div></el-col>
                                <el-col :span="4"><div><el-input v-model="formRule.number" placeholder="请输入内容" class="input_small"></el-input></div></el-col>
                                <el-col :span="1"><div>%</div></el-col>
                                <el-col :span="3"></el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item>
                            <el-row v-for="(item,aindex) in ruleList" :key="aindex">
                                <el-col :span="2"><div>6</div></el-col>
                                <el-col :span="6">
                                    <div>
                                        <span style="display: block">追责处罚</span>
                                        <el-select v-model="formRule.team" placeholder="增收节支">
                                            <el-option label="增收节支" value="" />
                                        </el-select>
                                    </div>
                                </el-col>
                                <el-col :span="8"><div><el-input v-model="formRule.name" placeholder="请输入内容" class="input_big"></el-input></div></el-col>
                                <el-col :span="4"><div><el-input v-model="formRule.number" placeholder="请输入内容" class="input_small"></el-input></div></el-col>
                                <el-col :span="1"><div>%</div></el-col>
                                <el-col :span="3">
                                    <div>
                                        <el-button icon="el-icon-plus" circle @click="addList"></el-button>
                                        <el-button icon="el-icon-minus" circle @click="deleteList" v-show="onShow"></el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item>
                            <el-row>
                                <el-col :span="2"><div>7</div></el-col>
                                <el-col :span="6"><div>舞弊线索移交</div></el-col>
                                <el-col :span="8"><div><el-input v-model="formRule.name" placeholder="请输入内容" class="input_big"></el-input></div></el-col>
                                <el-col :span="4"><div><el-input v-model="formRule.number" placeholder="请输入内容" class="input_small"></el-input></div></el-col>
                                <el-col :span="1"><div>%</div></el-col>
                                <el-col :span="3"></el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item>
                            <el-row>
                                <el-col :span="2"><div>8</div></el-col>
                                <el-col :span="6"><div>其他</div></el-col>
                                <el-col :span="8"><div><el-input v-model="formRule.name" placeholder="请输入内容" class="input_big"></el-input></div></el-col>
                                <el-col :span="4"><div><el-input v-model="formRule.number" placeholder="请输入内容" class="input_small"></el-input></div></el-col>
                                <el-col :span="1"><div>%</div></el-col>
                                <el-col :span="3"></el-col>
                            </el-row>
                        </el-form-item>


                    </el-form>

                </div>
                <el-divider></el-divider>
            </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts'
    export default {
        // 指定 name 选项的另一个好处是便于调试。
        // 有名字的组件有更友好的警告信息。
        // 另外，当在有 vue-devtools，未命名组件将显示成 <AnonymousComponent>，这很没有语义。通过提供 name 选项，可以获得更有语义信息的组件树。
        // 结论：给一个组件起个名字是非常有意义的，尽量不要让组件的名字重复
        name: 'HomeIndex',
        components: {},
        props: {},
        data () {
            return {
                formRule: {
                    name:'',
                    number:'',
                    team:''

                },
                ruleData:[{
                    name:'11',
                    number:'22',
                    team:'33'
                }],
                ruleList:[{
                    name:'11',
                    number:'22',
                    team:'33'
                }],
                onShow:true

            }
        },
        computed: {},
        watch: {},
        created () {},
        mounted () {
            var myChart = echarts.init(this.$refs.home)
            var option

            option = {
                title: {
                    text: '文章用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: 1048, name: '搜索引擎'},
                            {value: 735, name: '直接访问'},
                            {value: 580, name: '邮件营销'},
                            {value: 484, name: '联盟广告'},
                            {value: 300, name: '视频广告'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };


            option && myChart.setOption(option)
        },
        methods: {
            addRule(){
                var newruleData = {
                    team:'',
                    name:'',
                    number:''
                }
                this.ruleData.push(this.newruleData)
            },
            deleteRule(index){

                this.ruleData.splice(index,1)
            },


            addList(){
                var newruleList = {
                    team:'',
                    name:'',
                    number:''
                }
                this.ruleList.push(this.newruleList)
            },

            deleteList(index){
                // if(index >= 1){
                //     this.onShow = true
                // }
                this.ruleList.splice(index,1)
            }


        }
    }
</script>

<style scoped lang="less"></style>
