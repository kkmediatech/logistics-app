<template>
  <div class="details">
    <h1>รายละเอียดงาน: {{ route }}</h1>
    <p>ภูมิภาค: {{ region }}</p>
    <p>ชนิดของรถ: {{ vehicleType }}</p>
    <p>ระยะทาง: {{ distance }} KM</p>
    <p>ค่าเที่ยว: {{ fare }} บาท</p>
    <el-button type="primary" @click="$router.push('/')">กลับไปหน้าแรก</el-button>
  </div>
</template>

<script>
export default {
  name: 'Details',
  computed: {
    route() {
      return this.$route.query.route || 'ไม่ระบุ';
    },
    region() {
      return this.$route.query.region || 'ไม่ระบุ';
    },
    vehicleType() {
      return this.$route.query.vehicleType || 'ไม่ระบุ';
    },
    distance() {
      return this.$route.query.distance || 'ไม่ระบุ';
    },
    fare() {
      return this.$route.query.fare || 'ไม่ระบุ';
    },
  },
};
</script>

<style scoped>
.details {
  padding: 20px;
}
</style>