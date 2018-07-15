<template>
<div id="home" class="">
    <x-header :left-options="{showBack: false}">首页</x-header>
    <swiper loop auto>
        <swiper-item class="black">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" width="100%"></img>
        </swiper-item>
        <swiper-item class="black">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg" width="100%"></img>
        </swiper-item>
        <swiper-item class="black">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" width="100%"></img>
        </swiper-item>
    </swiper>
    <grid :show-lr-borders="true" :show-vertical-dividers="true" :cols="3">
        <grid-item :link="item.link" :label="item.label" v-for="item in items">
            <i :class="item.class" aria-hidden="true" slot="icon"></i>
        </grid-item>
    </grid>
</div>
</template>

<script>
import {
    XHeader,
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    GroupTitle
} from 'vux'

export default {
    name: 'Home',
    components: {
        XHeader,
        Swiper,
        SwiperItem,
        Grid,
        GridItem,
        GroupTitle
    },
    data() {
        return {
            items: [{
                    label: '查询待审批列表',
                    class: 'fa fa-2x fa-icon fa-list',
                    link: 'query-approval-list'
                },
                {
                    label: '修改密码',
                    class: 'fa fa-2x fa-icon fa-key',
                    link: 'update-password'
                },
                {
                    label: '登出',
                    class: 'fa fa-2x fa-icon fa-sign-out',
                    link: 'login'
                }
            ]
        }
    }
}
</script>

<style scoped>
.grid-center {
    display: block;
    text-align: center;
    color: #666;
}

.weui-grids {
    background-color: #fff;
}

.weui-grid__label span {
    color: #fff;
}

.fa-icon {
    color: #1AAD19;
}
</style>
