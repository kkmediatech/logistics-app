<template>
  <div class="app-wrapper" :class="{ hideSidebar: !sidebarOpen }">
    <Sidebar :open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Navbar :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
      <div class="app-main">
        <div class="details">
          <template v-if="job">
            <h1>รายละเอียดงาน: {{ job.route }}</h1>
            <p>ภูมิภาค: {{ job.region }}</p>
            <p>ชนิดของรถ: {{ job.vehicleType }}</p>
            <p>ระยะทาง: {{ job.distance }} KM</p>
            <p>ค่าเที่ยว: {{ job.fare }} บาท</p>
          </template>
          <template v-else>
            <h1>ไม่พบข้อมูลงาน</h1>
          </template>
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
  props: {
    id: {
      type: Number,
      required: true,
    },
    jobs: {
      type: Array,
      required: true,
    }
  },
  components: { Sidebar, Navbar },
  data() {
    return {
      sidebarOpen: true,
      job: null,
    };
  },
  created() {
    this.findJob();
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    findJob() {
      this.job = this.jobs.find(job => job.id === this.id);
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
