<template>
  <div class="app-wrapper" :class="{ hideSidebar: !sidebarOpen }">
    <Sidebar :open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Navbar :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
      <div class="app-main">
        <div class="details">
          <template v-if="job">
            <h1 class="job-title">รายละเอียดงาน: {{ job.route }}</h1>
            <div class="job-info-card">
              <div class="job-info-item">
                <i class="el-icon-location"></i>
                <span class="job-info-label">ภูมิภาค:</span>
                <span class="job-info-value">{{ job.region }}</span>
              </div>
              <div class="job-info-item">
                <i class="el-icon-truck"></i>
                <span class="job-info-label">ชนิดของรถ:</span>
                <span class="job-info-value">{{ job.vehicleType }}</span>
              </div>
              <div class="job-info-item">
                <i class="el-icon-map-location"></i>
                <span class="job-info-label">ระยะทาง:</span>
                <span class="job-info-value">{{ job.distance }} KM</span>
              </div>
              <div class="job-info-item">
                <i class="el-icon-money"></i>
                <span class="job-info-label">ค่าเที่ยว:</span>
                <span class="job-info-value">{{ job.fare }} บาท</span>
              </div>
            </div>
            <div class="action-buttons">
              <el-button type="primary" icon="el-icon-back" @click="$router.push('/')">กลับไปหน้าแรก</el-button>
            </div>
          </template>
          <template v-else>
            <div class="completion-message">
              <i class="el-icon-success completion-icon"></i>
              <h1>สิ้นสุดการทดสอบ</h1>
              <el-button type="primary" @click="$router.push('/grab-single')">เริ่มใหม่</el-button>
            </div>
          </template>
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
      if (!this.job) {
        console.error("Job not found with ID:", this.id);
      }
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
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.details {
  padding: 20px;
  flex: 1;
  overflow: auto;
}

.job-title {
  font-size: 24px;
  color: #303133;
  margin-bottom: 20px;
  border-bottom: 2px solid #409EFF;
  padding-bottom: 10px;
}

.job-info-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.job-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ebeef5;
}

.job-info-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.job-info-item i {
  font-size: 20px;
  color: #409EFF;
  margin-right: 10px;
}

.job-info-label {
  font-weight: bold;
  color: #606266;
  width: 100px;
}

.job-info-value {
  color: #303133;
  font-size: 16px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.completion-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 0;
}

.completion-icon {
  font-size: 60px;
  color: #67C23A;
  margin-bottom: 20px;
}

.completion-message h1 {
  font-size: 28px;
  color: #303133;
  margin-bottom: 10px;
}

.completion-message p {
  font-size: 16px;
  color: #606266;
  margin-bottom: 20px;
}

.hideSidebar .main-container {
  margin-left: 54px;
}
</style>
