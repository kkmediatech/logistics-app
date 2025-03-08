// src/views/Home.vue
<template>
  <div class="app-wrapper" :class="{ hideSidebar: !sidebarOpen }">
    <Sidebar :open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Navbar :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
      <div class="app-main">
        <el-tabs v-model="activeTab" v-if="$route.path === '/'">
          <el-tab-pane label="แข่งขันรับงาน" name="grab">
            <el-form :inline="true" class="query-form">
              <el-form-item label="ภูมิภาค">
                <el-select v-model="region" placeholder="กรุณาเลือก" size="mini">
                  <el-option label="B" value="B"></el-option>
                  <el-option label="C" value="C"></el-option>
                  <el-option label="NE" value="NE"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="ชนิดของรถ">
                <el-select v-model="vehicleType" placeholder="กรุณาเลือก" size="mini">
                  <el-option label="4W" value="4W"></el-option>
                  <el-option label="4WJ" value="4WJ"></el-option>
                  <el-option label="6W7.2" value="6W7.2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button 
                  type="primary" 
                  size="mini" 
                  @click="handleSearch"
                  :class="{ 'button-clicked': isSearching }"
                >ค้นหา</el-button>
              </el-form-item>
            </el-form>
            <JobTable :tableData="tableData" @open-dialog="openDialog" />

            <el-dialog
              title="ยืนยันแข่งขันรับงาน"
              :visible.sync="dialogVisible"
              width="30%"
              @open="initTurnstile"
              @close="destroyTurnstile"
            >
              <p>เส้นทาง: {{ selectedRow.route }}</p>
              <p>ภูมิภาค: {{ selectedRow.region }}</p>
              <p>ชนิดของรถ: {{ selectedRow.vehicleType }}</p>

              <!-- Cloudflare Turnstile Widget -->
              <div id="turnstile-container"></div>

              <span slot="footer" class="dialog-footer">
                <el-button
                  type="primary"
                  :disabled="!isCaptchaSolved"
                  @click="goToDetails"
                  >แข่งขันรับงาน</el-button
                >
              </span>
            </el-dialog>
          </el-tab-pane>
          <el-tab-pane label="รายการของฉัน" name="my-list">
            <p>ยังไม่มีข้อมูล</p>
          </el-tab-pane>
        </el-tabs>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import JobTable from "@/components/JobTable.vue";
import { Notification as ElNotification } from "element-ui"; // Rename imported Notification

// ข้อมูลเริ่มต้น (แยกออกมาเป็นตัวแปร)
const initialTableData = [
  {
    id: 1,
    route: "2BKI-LAS",
    region: "B",
    vehicleType: "4W",
    distance: 30,
    endTime: "03-03-2025 19:00",
    remainingTime: "4h 7m",
    expectedArrival: "03-03-2025 20:00",
    fare: 790,
  },
  {
    id: 2,
    route: "2NGA-EA1",
    region: "C",
    vehicleType: "4WJ",
    distance: 74,
    endTime: "03-03-2025 19:00",
    remainingTime: "4h 7m",
    expectedArrival: "03-03-2025 20:00",
    fare: 1620,
  },
  {
    id: 3,
    route: "NMD-BPLL",
    region: "B",
    vehicleType: "4WJ",
    distance: 29,
    endTime: "03-03-2025 18:30",
    remainingTime: "3h 37m",
    expectedArrival: "03-03-2025 19:30",
    fare: 1210,
  },
  {
    id: 4,
    route: "TCG-CT1",
    region: "B",
    vehicleType: "4WJ",
    distance: 17,
    endTime: "03-03-2025 19:10",
    remainingTime: "4h 17m",
    expectedArrival: "03-03-2025 20:10",
    fare: 1010,
  },
  {
    id: 5,
    route: "NE6-NE2",
    region: "NE",
    vehicleType: "4WJ",
    distance: 203,
    endTime: "03-03-2025 20:00",
    remainingTime: "5h 7m",
    expectedArrival: "03-03-2025 21:00",
    fare: 3030,
  },
];

export default {
  components: { Sidebar, Navbar, JobTable },
  data() {
    return {
      sidebarOpen: true,
      activeTab: "grab",
      region: "",
      vehicleType: "",
      tableData: [...initialTableData], // กำหนด tableData เริ่มต้นด้วยข้อมูลชุดนี้
      dialogVisible: false,
      selectedRow: {},
      turnstileWidgetId: null,
      isCaptchaSolved: false,
      isSearching: false,
    };
  },
  created() {
    this.generateInitialData(); // Call this function to generate initial data
  },
  methods: {
    openDialog(row) {
      //This will get the row from the event
      this.selectedRow = row;
      this.dialogVisible = true;
    },
    initTurnstile() {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.turnstile) {
          this.turnstileWidgetId = window.turnstile.render(
            "#turnstile-container",
            {
              sitekey: "0x4AAAAAAA7SN9BgICU6k8R5",
              callback: (token) => {
                this.isCaptchaSolved = true;
              },
            }
          );
        }
      };
    },
    destroyTurnstile() {
      if (this.turnstileWidgetId && window.turnstile) {
        window.turnstile.remove(this.turnstileWidgetId);
        this.turnstileWidgetId = null;
        this.isCaptchaSolved = false;
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    handleSearch() {
      this.isSearching = true;
      this.fetchData();
      setTimeout(() => {
        this.isSearching = false;
      }, 500);
    },
    // Method ใหม่สำหรับดึงข้อมูล
    fetchData() {
      console.log("ค้นหาด้วย:", this.region, this.vehicleType);
      // จำลองการดึงข้อมูลใหม่จาก API
      // ในการใช้งานจริง คุณจะทำการเรียก API ที่นี่
      setTimeout(() => {
        const newData = this.generateNewData(); // ใช้ฟังก์ชันจำลองการสร้างข้อมูลใหม่
        this.tableData = [...initialTableData, ...newData];
        this.showRandomNotification(); // เรียกใช้ฟังก์ชันแสดง Notification หลังจากอัปเดตข้อมูล
      }, 500); // หน่วงเวลา 500ms เพื่อจำลองการดึงข้อมูลจาก API
    },
    showRandomNotification() {
      // ฟังก์ชันสำหรับแสดง Notification แบบสุ่มเวลา
      const randomTime = Math.floor(Math.random() * 2000) + 1000; // สุ่มเวลา 1000-5000ms (1-3 วินาที)
      setTimeout(() => {
        ElNotification({ // Use ElNotification here
          title: "ข้อมูล",
          message: "อัพเดตแข่งขันรับงาน",
          type: "info",
          duration: 2000,
        });
      }, randomTime);
    },

    generateInitialData() {
      this.tableData = this.generateNewData(5); // Generate 5 initial rows
    },

    generateNewData(numRows) {
      // ฟังก์ชันจำลองการสร้างข้อมูลใหม่
      const newTableData = [];
      const maxId = 5 + numRows; //start from 6
      const prefixRoute = this.generateRoutePrefix();

      for (let i = 6; i <= maxId; i++) {
        // ข้อมูลเริ่มต้นมี id 1-5 และสร้างข้อมูลใหม่เริ่มต้น 6
        newTableData.push({
          id: i,
          route: `${prefixRoute}-${this.generateRouteSuffix(i)}`, // สร้างรูปแบบ ROUTE1-ROUTE7
          region: this.getRandomRegion(),
          vehicleType: this.getRandomVehicleType(),
          distance: this.getRandomDistance(),
          endTime: this.getRandomEndTime(),
          remainingTime: this.getRandomRemainingTime(),
          expectedArrival: this.getRandomExpectedArrival(),
          fare: this.getRandomFare(),
        });
      }
      return newTableData;
    },
    //สร้าง prefixRoute
    generateRoutePrefix() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let prefix = "";
      for (let i = 0; i < 2; i++) {
        prefix += letters[Math.floor(Math.random() * letters.length)];
      }
      return prefix;
    },
    //สร้าง suffixRoute
    generateRouteSuffix(id) {
      const suffixId = id;
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let suffix = "";
      for (let i = 0; i < 2; i++) {
        suffix += letters[Math.floor(Math.random() * letters.length)];
      }
      return `${suffixId}${suffix}`;
    },
    // สุ่มภูมิภาค
    getRandomRegion() {
      const regions = ["B", "C", "NE"];
      return regions[Math.floor(Math.random() * regions.length)];
    },
    // สุ่มประเภทของรถ
    getRandomVehicleType() {
      const vehicleTypes = ["4W", "4WJ", "6W7.2"];
      return vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
    },
    // สุ่มระยะทาง
    getRandomDistance() {
      return Math.floor(Math.random() * 200) + 10; // สุ่ม 10-210
    },
    // สุ่มเวลาสิ้นสุดการแข่งขัน
    getRandomEndTime() {
      const time = new Date();
      time.setDate(time.getDate() + Math.floor(Math.random() * 7) + 1);
      time.setHours(this.getRandomHours());
      time.setMinutes(this.getRandomMinutes());
      return time.toLocaleString("en-GB");
    },
    //สุ่มเวลาที่เหลือ
    getRandomRemainingTime() {
      return `${this.getRandomHours()}h ${this.getRandomMinutes()}m`;
    },
    // สุ่มเวลาคาดว่าที่จะถึง
    getRandomExpectedArrival() {
      const time = new Date();
      time.setDate(time.getDate() + Math.random() * 7 + 1);
      time.setHours(this.getRandomHours());
      time.setMinutes(this.getRandomMinutes());
      return time.toLocaleString("en-GB");
    },
    //สุ่มค่าโดยสาร
    getRandomFare() {
      return Math.floor(Math.random() * 2000) + 500; // สุ่ม 500-2500
    },
    //สุ่มชั่วโมง
    getRandomHours() {
      return Math.floor(Math.random() * 24);
    },
    //สุ่มนาที
    getRandomMinutes() {
      return Math.floor(Math.random() * 60);
    },
    goToDetails() {
      if (window.turnstile) {
        const token = window.turnstile.getResponse(this.turnstileWidgetId);
        if (token) {
          //alert(`Turnstile Token: ${token}`);
          ElNotification({ // Use ElNotification here
            title: "สำเร็จ", // หัวข้อ (ภาษาไทย)
            message: `ยืนยันการแข่งขันรับงานสำเร็จ. Turnstile Token: ${token}`, // ข้อความ (ภาษาไทย)
            type: "success", // ประเภท: success, warning, info, error
          });
          this.dialogVisible = false;
          this.$router.push({
            name: "Details",
            params: { id: this.selectedRow.id },
          });
        } else {
          //alert("Please complete the Turnstile challenge.");
          ElNotification({ // Use ElNotification here
            title: "คำเตือน", // หัวข้อ (ภาษาไทย)
            message: `กรุณาทำ turnstile ให้สำเร็จ`, // ข้อความ (ภาษาไทย)
            type: "warning", // ประเภท: success, warning, info, error
          });
        }
      }
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

.el-tabs {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.el-tab-pane {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.query-form {
  margin-bottom: 20px;
}

.sidebar-container {
  width: 54px;
}

.button-clicked {
  background-color: #409EFF !important;
  opacity: 0.8;
}
</style>
