<template>
<div>
    <div id="query-approval-list" class="">
        <x-header :left-options="{backText: ''}">查询待审批列表</x-header>
        <group>
            <cell v-for="item in items" :title="item.description" :link="{'path':'show-bill',query:{workflow_code:item.workflow_code}}" :inline-desc="item.workflow_code"></cell>
        </group>
    </div>
</div>
</template>

<script>
import {
    XHeader,
    Group,
    Cell,
    XTable
} from 'vux'

export default {
    name: 'QueryApprovalList',
    components: {
        XHeader,
        Group,
        Cell,
        XTable
    },
    data() {
        return {
            items: this.$store.getters.approvalList
        }
    },
    mounted: function () {
        let isLogin = this.$store.getters.isLogin;
        console.log('isLogin' + isLogin)
        if (!isLogin) {
            this.$router.push({
                path: '/login'
            })
        }
        let userId = this.$store.getters.username;
        let data = {
            userId: userId,
            OffSet: 0,
            QueryNum: 10
        }
        let successCallback = (res) => {
            if (res.data.resultCode === '200') {
                let approvalList = res.data.data
                this.$store.commit('updateApprovalList', approvalList)
            }
        }
        let errorCallback = (err) => {}
        this.$store.dispatch('queryApprovalList', {
            data: data,
            successCallback: successCallback,
            errorCallback: errorCallback
        })
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
