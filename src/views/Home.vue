<template>
  <div class="app-wrapper" :class="{ hideSidebar: !sidebarOpen }">
    <Sidebar :open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Navbar :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
      <div class="app-main">
        <h3 class="title">เริ่มทดสอบ</h3>
        <p class="instruction">1. คลิกที่เมนู <i class="el-icon-s-flag"></i> แข่งขันรับงาน</p>
        <p class="instruction">2. เลือกเส้นทาง และกด "แข่งขันรับงาน" ในหน้าแข่งขันรับงาน</p>
        <p class="instruction">3. รอตรวจสอบ และยืนยันแข่งขันรับงาน</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      sidebarOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style scoped>
.app-wrapper {
  display: flex;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  overflow: hidden;
}

.main-container {
  flex: 1;
  margin-left: 220px;
  transition: margin-left 0.3s;
  padding: 8px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 16px);
  overflow: hidden;
}

.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  overflow-y: auto;
  padding: 20px;
  background-color: #f9f9f9; /* Light background color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.instruction {
  font-size: 16px;
  margin-bottom: 12px;
  color: #555;
}

.hideSidebar .main-container {
  margin-left: 54px;
}
</style>
