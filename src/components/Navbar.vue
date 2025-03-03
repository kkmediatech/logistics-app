<template>
  <div class="navbar">
    <div class="hamburger-container">
      <i class="el-icon-s-unfold"></i>
    </div>
    <el-breadcrumb class="app-breadcrumb">
      <el-breadcrumb-item>แข่งขันรับงาน</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.hamburger-container {
  cursor: pointer;
  padding: 0 15px;
  font-size: 20px; /* เพิ่มขนาดไอคอนให้ชัดเจน */
}

.right-menu {
  margin-left: auto;
}
</style>