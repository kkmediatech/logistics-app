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
                <el-button type="primary" size="mini" @click="search">ค้นหา</el-button>
              </el-form-item>
            </el-form>
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <p>รายละเอียดเพิ่มเติม: {{ props.row.route }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="id" label="ID" width="180" v-if="false"></el-table-column>
              <el-table-column prop="route" label="เส้นทาง" width="220" min-width="120"></el-table-column>
              <el-table-column prop="region" label="ภูมิภาค" width="150" min-width="80"></el-table-column>
              <el-table-column prop="vehicleType" label="ชนิดของรถ" width="150" min-width="100"></el-table-column>
              <el-table-column prop="distance" label="ระยะทางรวม (KM)" width="150" min-width="100"></el-table-column>
              <el-table-column prop="endTime" label="เวลาสิ้นสุดการแข่งขันรับงาน" width="240" min-width="150"></el-table-column>
              <el-table-column prop="remainingTime" label="เหลือเวลาสิ้นสุดแข่งขันรับงาน" width="240" min-width="130"></el-table-column>
              <el-table-column prop="expectedArrival" label="เวลาคาดว่าที่จะถึง" width="200" min-width="130"></el-table-column>
              <el-table-column prop="fare" label="ค่าเที่ยว" width="120" min-width="100"></el-table-column>
              <el-table-column label="ดำเนินการ" width="120" min-width="100">
                <template slot-scope="scope">
                  <el-button class="grab-single" type="text" @click="openDialog(scope.row)">แข่งขันรับงาน</el-button>
                </template>
              </el-table-column>
            </el-table>

            <el-dialog title="ยืนยันแข่งขันรับงาน" :visible.sync="dialogVisible" width="30%" @open="initTurnstile" @close="destroyTurnstile">
            <!-- <p>ID: {{ selectedRow.id }}</p> -->
            <p>เส้นทาง: {{ selectedRow.route }}</p>
            <p>ภูมิภาค: {{ selectedRow.region }}</p>
            <p>ชนิดของรถ: {{ selectedRow.vehicleType }}</p>

            <!-- Cloudflare Turnstile Widget -->
            <div id="turnstile-container"></div>

            <span slot="footer" class="dialog-footer">
              <el-button type="primary" :disabled="!isCaptchaSolved" @click="goToDetails">แข่งขันรับงาน</el-button>
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
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Sidebar, Navbar },
  data() {
    return {
      sidebarOpen: true,
      activeTab: 'grab',
      region: '',
      vehicleType: '',
      tableData: [
        { id: 1, route: '2BKI-LAS', region: 'B', vehicleType: '4W', distance: 30, endTime: '03-03-2025 19:00', remainingTime: '4h 7m', expectedArrival: '03-03-2025 20:00', fare: 790 },
        { id: 2, route: '2NGA-EA1', region: 'C', vehicleType: '4WJ', distance: 74, endTime: '03-03-2025 19:00', remainingTime: '4h 7m', expectedArrival: '03-03-2025 20:00', fare: 1620 },
        { id: 3, route: 'NMD-BPLL', region: 'B', vehicleType: '4WJ', distance: 29, endTime: '03-03-2025 18:30', remainingTime: '3h 37m', expectedArrival: '03-03-2025 19:30', fare: 1210 },
        { id: 4, route: 'TCG-CT1', region: 'B', vehicleType: '4WJ', distance: 17, endTime: '03-03-2025 19:10', remainingTime: '4h 17m', expectedArrival: '03-03-2025 20:10', fare: 1010 },
        { id: 5, route: 'NE6-NE2', region: 'NE', vehicleType: '4WJ', distance: 203, endTime: '03-03-2025 20:00', remainingTime: '5h 7m', expectedArrival: '03-03-2025 21:00', fare: 3030 },
        { id: 6, route: 'TCGEA1', region: 'B', vehicleType: '4W', distance: 29, endTime: '03-03-2025 19:00', remainingTime: '4h 7m', expectedArrival: '03-03-2025 20:00', fare: 700 },
      ],
      dialogVisible: false,
      selectedRow: {},
      turnstileWidgetId: null, // Store the Turnstile widget ID
      isCaptchaSolved: false // Track if CAPTCHA is solved
    };
  },
  methods: {
    openDialog(row) {
      this.selectedRow = row; // Set the selected row data
      this.dialogVisible = true; // Open the dialog
    },
    initTurnstile() {
      // Load Cloudflare Turnstile script dynamically
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Initialize Turnstile widget after script is loaded
      script.onload = () => {
        if (window.turnstile) {
          this.turnstileWidgetId = window.turnstile.render('#turnstile-container', {
            sitekey: '0x4AAAAAAA7SN9BgICU6k8R5', // Your Cloudflare Turnstile site key
            callback: (token) => {
              this.isCaptchaSolved = true; // Enable the confirm button when CAPTCHA is solved
            }
          });
        }
      };
    },
    destroyTurnstile() {
      // Destroy the Turnstile widget when dialog is closed
      if (this.turnstileWidgetId && window.turnstile) {
        window.turnstile.remove(this.turnstileWidgetId);
        this.turnstileWidgetId = null;
        this.isCaptchaSolved = false; // Reset CAPTCHA state when dialog is closed
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    search() {
      console.log('ค้นหาด้วย:', this.region, this.vehicleType);
    },
    goToDetails() {
      // Get the Turnstile response token
      if (window.turnstile) {
        const token = window.turnstile.getResponse(this.turnstileWidgetId);
        if (token) {
          alert(`Turnstile Token: ${token}`); // You can send this token to your server for verification
          this.dialogVisible = false; // Close the dialog after submission
          this.$router.push({ name: 'Details', params: { id: this.selectedRow.id } });
        } else {
          alert('Please complete the Turnstile challenge.');
        }
      }
      // this.dialogVisible = false;
      // this.$router.push({ name: 'Details', params: { id: this.selectedRow.id } });
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

.el-table {
  flex: 1;
}

.query-form {
  margin-bottom: 20px;
}

.sidebar-container {
  width: 54px;
}
</style>