<script setup lang="ts">
import * as Cesium from 'cesium';

onMounted(() => {
  const viewer = new Cesium.Viewer('cesiumContainer');
})

</script>

<template>
  <div id="cesiumContainer">123
  </div>
</template>
<style>
#cesiumContainer{
  width: 100%;
  height: 100%;
}
</style>
