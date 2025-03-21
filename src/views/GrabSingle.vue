<template>
  <div class="app-wrapper" :class="{ hideSidebar: !sidebarOpen }">
    <Sidebar :open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Navbar :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
      <div class="app-main" v-loading="isSearching">
        <el-tabs v-model="activeTab">
          <el-tab-pane label="แข่งขันรับงาน" name="grab">
            <el-form :inline="true" class="query-form">
              <el-form-item label="ภูมิภาค" prop="region">
                <el-select v-model="region" placeholder="กรุณาเลือก" size="mini">
                  <el-option label="B" value="B"></el-option>
                  <el-option label="C" value="C" ></el-option>
                  <el-option label="NE" value="NE"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="ชนิดของรถ">
                <el-select v-model="vehicleType" placeholder="กรุณาเลือก" size="mini" prop="vehicleType">
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
            
            <div class="table-container">
              <JobTable 
                :tableData="paginatedTableData"
                @open-dialog="openDialog"
              />
            </div>
            
            <div class="pagination-container">
              <el-pagination
                @current-change="handlePageChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="tableData.length">
              </el-pagination>
            </div>

            <!-- Add dialog component -->
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
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import JobTable from "@/components/JobTable.vue";
import routeData from "@/route.json";

export default {
  components: {
    Navbar,
    Sidebar,
    JobTable
  },
  data() {
    return {
      sidebarOpen: true,
      activeTab: "grab",
      region: "",
      vehicleType: "",
      tableData: [],
      currentPage: 1,
      pageSize: 8,
      isSearching: false,
      dialogVisible: false,
      selectedRow: {},
      turnstileWidgetId: null,
      isCaptchaSolved: false,
    };
  },
  computed: {
    paginatedTableData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.tableData.slice(start, end);
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    handleSearch() {
      this.isSearching = true;
      this.currentPage = 1;
      this.fetchData(); // Fetch data to refresh the table
      setTimeout(() => {
        this.isSearching = false;
      }, 500);
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    fetchData() {
      console.log("ค้นหาด้วย:", this.region, this.vehicleType);
      this.tableData = routeData.routes.filter(route => {
        if (this.region && this.vehicleType) {
          return route.region === this.region && route.vehicleType === this.vehicleType;
        } else if (this.region) {
          return route.region === this.region;
        } else if (this.vehicleType) {
          return route.vehicleType === this.vehicleType;
        }
        return true;
      });
    },
    openDialog(row) {
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
    
    goToDetails() {
      if (window.turnstile) {
        const token = window.turnstile.getResponse(this.turnstileWidgetId);
        if (token) {
          this.dialogVisible = false;
          this.$router.push({
            name: "Details",
            params: {
              route: this.selectedRow.route,
              region: this.selectedRow.region,
              vehicleType: this.selectedRow.vehicleType
            },
          });
        } else {
          alert("กรุณาทำ turnstile ให้สำเร็จ");
        }
      }
    }
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
  overflow-y: hidden;
  padding: 10px;
}

.hideSidebar .main-container {
  margin-left: 54px;
}

.table-container {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px; /* Space for pagination */
}

.query-form {
  margin-bottom: 10px;
}

.pagination-container {
  position: fixed;
  bottom: 0;
  left: 220px;
  right: 0;
  padding: 8px 20px;
  background: #fff;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
}

.hideSidebar .pagination-container {
  left: 54px;
}

.button-clicked {
  background-color: #409EFF !important;
  opacity: 0.8;
}

/* Remove fixed column widths to let the table be more responsive */
:deep(.el-table) {
  width: 100% !important;
  font-size: 12px;
}

:deep(.el-table__header-wrapper),
:deep(.el-table__body-wrapper) {
  width: 100% !important;
}

:deep(.el-table .cell) {
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.el-table th) {
  padding: 5px 0;
  background-color: #f5f7fa;
}

:deep(.el-table td) {
  padding: 3px 0;
}

/* Adjust tab padding */
:deep(.el-tabs__header) {
  margin-bottom: 10px;
}

:deep(.el-tabs__item) {
  padding: 0 15px;
}
</style>
