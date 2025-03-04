// src/components/JobTable.vue
<template>
  <el-table :data="tableData" stripe style="width: 100%" class="custom-table">
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
}
/* เพิ่ม CSS style ตรงนี้ */
.custom-table .el-table__row td {
  padding: 3px 0; /* ปรับ padding ให้เล็กลง */
}
.custom-table .cell{
  line-height: 8px;
}
</style>
