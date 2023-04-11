<template>
  <div class="info-bar">
    <div class="infobar-item">人大人青年同学会</div>
    <div class="infobar-item"><span>人大人校友</span></div>
    <div class="infobar-item music-item"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.info-bar {
  color: #ffffff;
  font-size: 16px;
  padding-left: 10px;
}
.infobar-item {
  padding: 6px 0;
}
.infobar-item > .icon-yinfu {
  margin-right: 5px;
}
.music-item {
  /* width:200px; */
  /* border:1px solid red; */
  display: flex;
}
.music-name {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
}
.music-name > span {
  display: inline-block;
  animation: scroll 5s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 20px));
  }
}
</style>
