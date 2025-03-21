<template>
  <div class="sidebar-container" :class="{ 'sidebar-collapsed': !open }">
    <router-link to="/" class="sidebar-logo" @click="$emit('toggle-sidebar')">
      <img src="../assets/logo.png" alt="Logo" />
    </router-link>
    <div class="sidebar-search">
      <el-input
        v-model="searchQuery"
        placeholder="ค้นหา..."
        prefix-icon="el-icon-search"
        size="mini"
        clearable
      />
    </div>
    <el-menu
      :collapse="!open"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      text-color="#000000"
      active-text-color="#409eff"
      :default-active="$route.path"
      mode="vertical"
    >
      <el-menu-item>
        <router-link to="/transport-job" @click="$emit('toggle-sidebar')">
        <i class="el-icon-s-order"></i>
          <span>ตารางจัดการงานขนส่ง</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/abnormality" @click="$emit('toggle-sidebar')">
        <i class="el-icon-warning"></i>
          <span>การจัดการความผิดปกติ</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/account" @click="$emit('toggle-sidebar')">
        <i class="el-icon-user"></i>
          <span>การจัดการบัญชี</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/grab-single" @click="$emit('toggle-sidebar')">
        <i class="el-icon-s-flag"></i>
          <span>แข่งขันรับงาน</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/transport-company" @click="$emit('toggle-sidebar')">
        <i class="el-icon-office-building"></i>
          <span>การจัดการบริษัทขนส่ง</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped>
.sidebar-container {
  width: 220px;
  background: #ffffff;
  color: #000000;
  transition: width 0.3s;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.sidebar-collapsed {
  width: 54px;
}

.sidebar-logo {
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.sidebar-logo img {
  width: 80%;
  max-height: 50px;
}

.sidebar-search {
  padding: 0 10px;
  margin-bottom: 10px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}

.el-menu-item,
.el-submenu__title {
  color: #000000;
  text-decoration: none; /* เพิ่มบรรทัดนี้ */
}

.el-menu-item:hover,
.el-menu-item.is-active {
  background-color: #f0f0f0;
  color: #409eff;
  text-decoration: none; /* เพิ่มบรรทัดนี้ */
}

.el-menu--collapse .el-menu-item span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}

.el-menu-item.is-active {
  background-color: #e1f0ff;
}
</style>
