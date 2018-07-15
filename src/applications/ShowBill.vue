<template>
<div>
    <div id="show-bill" class="">
        <x-header :left-options="{backText: ''}" :right-options="{showMore: true}" @on-click-more="showMenus = true">查询单据</x-header>
        <form-preview header-label="单号" :header-value="workflowCode" :body-items="list"></form-preview>
        <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
            <thead>
                <tr style="background-color: #F7F7F7">
                    <th>序号</th>
                    <th>费用类型</th>
                    <th>费用名称</th>
                    <th>费用用途</th>
                    <th>报销金额</th>
                    <th>备注</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{item.line_id}}</td>
                    <td>{{item.feetype_id}}</td>
                    <td>{{item.asset_name}}</td>
                    <td>{{item.fee_use}}</td>
                    <td>{{item.request_fee}}</td>
                    <td>{{item.remark}}</td>
                </tr>
            </tbody>
        </x-table>
        <!-- <form-preview :footer-buttons="buttonGroup"></form-preview> -->
    </div>
    <div v-transfer-dom>
        <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="showDialog" show-cancel></actionsheet>
    </div>
    <div v-transfer-dom>
        <x-dialog v-model="showApproveDialog" class="dialog-demo">
            <p class="dialog-title">审核通过</p>
            <x-textarea title="审核意见" placeholder="请输入审核意见" v-model="approveComment"></x-textarea>
            <x-button type="primary" class="btn-submit" @click.native="approveRequest">提交</x-button>
        </x-dialog>
    </div>
    <div v-transfer-dom>
        <x-dialog v-model="showRejectDialog" class="dialog-demo">
            <p class="dialog-title">驳回</p>
            <x-textarea title="驳回意见" placeholder="请输入驳回意见" v-model="rejectComment"></x-textarea>
            <x-button type="primary" class="btn-submit" @click.native="rejectRequest">提交</x-button>
        </x-dialog>
    </div>
    <div v-transfer-dom>
        <x-dialog v-model="showTransferDialog" class="dialog-demo">
            <p class="dialog-title">转签</p>
            <group>
                <selector title="转签人" v-model="transferUser" placeholder="请选择转签人" name="transfer" :value-map="['user_code', 'username']" :options="transferList"></selector>
            </group>
            <x-textarea title="转签意见" placeholder="请输入转签意见" v-model="transferComment"></x-textarea>
            <x-button type="primary" class="btn-submit" @click.native="transferRequest">提交</x-button>
        </x-dialog>
    </div>
</div>
</template>

<script>
import {
    XHeader,
    Actionsheet,
    TransferDom,
    ButtonTab,
    ButtonTabItem,
    FormPreview,
    XTable,
    XTextarea,
    XButton,
    XDialog,
    Group,
    Cell,
    Selector
} from 'vux'

export default {
    name: 'ShowBill',
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem,
        FormPreview,
        XTable,
        XTextarea,
        XButton,
        XDialog,
        Group,
        Cell,
        Selector
    },
    data() {
        return {
            workflowCode: this.$store.getters.bill.bill_code,
            approveComment: '',
            rejectComment: '',
            transferComment: '',
            transferUser: '',
            transferList: this.$store.getters.transferList,
            list: [{
                    'label': '个人报销单代码',
                    'value': this.$store.getters.bill.bill_code
                },
                {
                    'label': '个人报销单名称',
                    'value': this.$store.getters.bill.bill_name
                },
                {
                    'label': '报销单性质',
                    'value': this.$store.getters.bill.bill_type
                },
                {
                    'label': '审批状态',
                    'value': this.$store.getters.bill.approve_state
                },
                {
                    'label': '申请日期',
                    'value': this.$store.getters.bill.apply_date
                },
                {
                    'label': '录入人',
                    'value': this.$store.getters.bill.checkin_man
                },
                {
                    'label': '审批日期',
                    'value': this.$store.getters.bill.approve_date
                },
                {
                    'label': '申请金额',
                    'value': this.$store.getters.bill.request_fee
                },
                {
                    'label': '审批金额',
                    'value': this.$store.getters.bill.bill_approve
                },
                {
                    'label': '审批人',
                    'value': this.$store.getters.bill.approve_man
                },
                {
                    'label': '部门',
                    'value': this.$store.getters.bill.bill_dept
                },
                {
                    'label': '借款人',
                    'value': this.$store.getters.bill.request_man
                }
            ],
            items: this.$store.getters.billDet,
            buttonGroup: [{
                style: 'primary',
                text: '审批通过'
            }, {
                style: 'default',
                text: '驳回'
            }, {
                style: 'default',
                text: '转签',
                link: '/'
            }],
            menus: [{
                label: '审批通过',
                type: 'primary',
                value: 'approve',
                otherProp: 'hey'
            }, {
                label: '驳回',
                type: 'warn',
                value: 'reject',
                otherProp: 'hey'
            }, {
                label: '转签',
                type: '',
                value: 'transfer',
                otherProp: 'hey'
            }],
            showMenus: false,
            showApproveDialog: false,
            showRejectDialog: false,
            showTransferDialog: false
        }
    },
    created: function () {
        let data = {}
        let successCallback = () => {}
        let errorCallback = () => {}
        this.$store.dispatch('showBill', {
            data: data,
            successCallback: successCallback,
            errorCallback: errorCallback
        })
        this.$store.dispatch('showBillDet', {
            data: data,
            successCallback: successCallback,
            errorCallback: errorCallback
        }),
        this.$store.dispatch('transferList', {
            data: data,
            successCallback: successCallback,
            errorCallback: errorCallback
        })
    },
    mounted: function () {

    },
    methods: {
        showDialog(key) {
            if (key === 'approve') {
                this.showApproveDialog = true
            } else if (key === 'reject') {
                this.showRejectDialog = true
            } else if (key === 'transfer') {
                this.showTransferDialog = true
            }
        },
        approveRequest() {
            let data = {
                'workflow_code': this.$store.getters.workflowCode,
                'user_code': this.$store.getters.username,
                'action': '1',
                'idea_des': this.approveComment,
                'ele_user': ''
            }
            let successCallback = () => {
                this.showApproveDialog = false
            }
            let errorCallback = () => {
                this.showApproveDialog = false
            }
            this.$store.dispatch('commitApproval', {
                data: data,
                successCallback: successCallback,
                errorCallback: errorCallback
            })
        },
        rejectRequest() {
            let data = {
                'workflow_code': this.$store.getters.workflowCode,
                'user_code': this.$store.getters.username,
                'action': '98',
                'idea_des': this.rejectComment,
                'ele_user': ''
            }
            let successCallback = () => {
                this.showRejectDialog = false
            }
            let errorCallback = () => {
                this.showRejectDialog = false
            }
            this.$store.dispatch('commitApproval', {
                data: data,
                successCallback: successCallback,
                errorCallback: errorCallback
            })
        },
        transferRequest() {
            let data = {
                'workflow_code': this.$store.getters.workflowCode,
                'user_code': this.$store.getters.username,
                'action': '2',
                'idea_des': this.transferComment,
                'ele_user': this.transferUser
            }
            let successCallback = () => {
                this.showTransferDialog = false
            }
            let errorCallback = () => {
                this.showTransferDialog = false
            }
            this.$store.dispatch('commitApproval', {
                data: data,
                successCallback: successCallback,
                errorCallback: errorCallback
            })
        }
    }
}
</script>

<style scoped>
.vux-label {
    text-align: left;
}

.btn-submit {
    width: 50%;
    margin-bottom: 20px;
}
</style>
