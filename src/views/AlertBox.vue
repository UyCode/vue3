<template>
  <div class="demo demo-alert-box">
    <strong>Error!</strong>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
  width: 100px;
  height: 100px;
  align-content: center;
}

.demo-alert-box {
  padding: 10px 20px;
  background: #fa376c;
  border: 1px solid #fa376c;
  opacity: 90%;
}
</style>