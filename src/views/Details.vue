// src/views/Details.vue
<template>
  <div class="app-wrapper" :class="{ hideSidebar: !sidebarOpen }">
    <Sidebar :open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Navbar :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
      <div class="app-main">
        <div class="details">
          <h1>รายละเอียดงาน: {{ route }}</h1>
          <p>ภูมิภาค: {{ region }}</p>
          <p>ชนิดของรถ: {{ vehicleType }}</p>
          <p>ระยะทาง: {{ distance }} KM</p>
          <p>ค่าเที่ยว: {{ fare }} บาท</p>
          <el-button type="primary" @click="$router.push('/')">กลับไปหน้าแรก</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Details",
  components: { Sidebar, Navbar },
  data() {
    return {
      sidebarOpen: true,
    };
  },
  computed: {
    route() {
      return this.$route.query.route || "ไม่ระบุ";
    },
    region() {
      return this.$route.query.region || "ไม่ระบุ";
    },
    vehicleType() {
      return this.$route.query.vehicleType || "ไม่ระบุ";
    },
    distance() {
      return this.$route.query.distance || "ไม่ระบุ";
    },
    fare() {
      return this.$route.query.fare || "ไม่ระบุ";
    },
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
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 15px 15px;
  overflow: hidden;
  background: #f0f2f5;
}

.details {
  padding: 20px;
  flex: 1;
  overflow: auto;
}
</style>
