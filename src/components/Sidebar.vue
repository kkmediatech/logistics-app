<template>
  <div class="sidebar-container">
    <el-menu :collapse="true" class="el-menu--collapse">
      <el-menu-item index="1" @click="$router.push('/')">
        <i class="el-icon-house"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="2" @click="$router.push('/')">
        <i class="el-icon-document"></i>
        <span slot="title">แข่งขันรับงาน</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.sidebar-container {
  width: 54px; /* คงที่ 54px ตลอด */
  background: #ffffff; /* เปลี่ยนเป็นสีขาว */
  color: #000000; /* เปลี่ยนสีข้อความเป็นสีดำเพื่อให้มองเห็นชัดเจน */
  transition: width 0.3s;
}

.el-menu--collapse {
  width: 54px;
}

/* ปรับสีข้อความในเมนูให้ชัดเจนบนพื้นหลังสีขาว */
.el-menu-item,
.el-submenu__title {
  color: #000000; /* สีข้อความในเมนู */
}

/* ปรับสีเมื่อ hover หรือ active */
.el-menu-item:hover,
.el-menu-item.is-active {
  background-color: #f0f0f0; /* สีพื้นหลังเมื่อ hover หรือเลือก */
  color: #409eff; /* สีข้อความเมื่อ hover หรือเลือก */
}
</style>