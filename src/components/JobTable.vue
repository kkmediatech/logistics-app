// src/components/JobTable.vue
<template>
  <el-table :data="tableData" stripe style="width: 100%" class="custom-table">
    <el-table-column type="expand" width="50">
      <template slot-scope="props">
        <p>รายละเอียดเพิ่มเติม: {{ props.row.route }}</p>
      </template>
    </el-table-column>
    <el-table-column prop="id" label="ID" width="60" v-if="false"></el-table-column>
    <el-table-column prop="route" label="เส้นทาง" width="100"></el-table-column>
    <el-table-column prop="region" label="ภูมิภาค" width="70"></el-table-column>
    <el-table-column prop="vehicleType" label="ชนิดรถ" width="80"></el-table-column>
    <el-table-column prop="distance" label="ระยะทาง" width="80"></el-table-column>
    <el-table-column prop="endTime" label="เวลาสิ้นสุด" width="100"></el-table-column>
    <el-table-column prop="remainingTime" label="เวลาที่เหลือ" width="100"></el-table-column>
    <el-table-column prop="expectedArrival" label="เวลาถึง" width="100"></el-table-column>
    <el-table-column prop="fare" label="ค่าเที่ยว" width="80"></el-table-column>
    <el-table-column label="ดำเนินการ" width="110">
      <template slot-scope="scope">
        <el-button class="grab-single" type="text" @click="handleOpenDialog(scope.row)">แข่งขันรับงาน</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleOpenDialog(row) {
      this.$emit('open-dialog', row); // Emit the 'open-dialog' event with the row data
    },
  },
};
</script>

<style scoped>
.el-table {
  flex: 1;
  width: 100% !important;
}

.custom-table .el-table__row td {
  padding: 3px 0; /* ปรับ padding ให้เล็กลง */
}

.custom-table .cell {
  line-height: 8px;
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Add responsive table styles */
.custom-table {
  table-layout: fixed;
  width: 100%;
}

.custom-table .el-table__header-wrapper th {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 8px 0;
  font-size: 12px;
}

.grab-single {
  padding: 0;
  margin: 0;
}

/* Force table to take full width */
:deep(.el-table__inner-wrapper) {
  width: 100% !important;
}

:deep(.el-table__body) {
  width: 100% !important;
}
</style>
