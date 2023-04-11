<template>
  <div class="top-bar">
    <div class="left">
      <span class="iconfont icon-live"></span>
    </div>
    <div class="middle">
      <div class="item" @click="changeTop(0)">
        <span :class="topIndex == 0 ? 'active1' : ''">人才</span>
      </div>
      <div class="item" @click="changeTop(1)">
        <span :class="topIndex == 1 ? 'active1' : ''">雇主</span>
      </div>
      <div class="item yellow" @click="changeTop(2)">
        <span :class="topIndex == 2 ? 'active1' : ''">合伙人</span>
      </div>
      <div class="item" @click="changeTop(3)">
        <span :class="topIndex == 3 ? 'active1' : ''">推荐</span>
      </div>
      <div class="item" @click="changeTop(4)">
        <span :class="topIndex == 4 ? 'active1' : ''">关注</span>
      </div>
    </div>
    <div class="right">
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      value: true,
      topIndex: 1,
    };
  },
  methods: {
    changeTop(index) {
      this.topIndex = index;
    },
  },
};
</script>

<style>
.top-bar {
  position: fixed;
  /* background-color:black; */
  height: 55px;
  width: 100%;
  font-size: 18px;
  color: rgb(246, 246, 244);
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  /* 使用层级关系让被视频盖住的部分显示出来 */
  z-index: 999;
}
.top-bar .yellow {
  color: rgb(239, 223, 30);
}
.left,
.right {
  width: 20%;
}
.iconfont {
  font-size: 24px;
}
.middle {
  width: 60%;
  display: flex;
  justify-items: center;
  align-items: center;
}
.right {
  text-align: center;
}
.middle > .item {
  flex: 1;
  text-align: center;
}
.middle .item span {
  padding: 5px 0;
}
.middle .item .active1 {
  font-size: 24px;
  font-weight: 600;
  transition: all 0.1s;
}
</style>
