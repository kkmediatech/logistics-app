<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Notification as ElNotification } from "element-ui";

export default {
  name: 'App',
  data() {
    return {
      notificationIntervals: [],
      messages: [
        { title: "ข้อความแจ้งเตือน", message: "มีงานใหม่เข้ามา", type: "info" },
        { title: "ข้อความแจ้งเตือน", message: "มีการอัพเดทสถานะงาน", type: "success" },
        { title: "ข้อความแจ้งเตือน", message: "มีข้อความใหม่จากระบบ", type: "warning" },
        { title: "ข้อความแจ้งเตือน", message: "กรุณาตรวจสอบการแจ้งเตือน", type: "info" }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.setupNotifications();
    }, 1000);
  },
  beforeDestroy() {
    this.clearAllIntervals();
  },
  methods: {
    setupNotifications() {
      const intervals = [5000, 13000, 31000]; // Added 31000 for 31 seconds
      
      intervals.forEach((interval, index) => {
        const intervalId = setInterval(() => {
          const notification = this.messages[index % this.messages.length];
          this.showNotification(notification, interval);
        }, interval);
        
        this.notificationIntervals.push(intervalId);
      });
    },
    showNotification(notification, interval) {
      ElNotification({
        title: notification.title,
        message: `${notification.message} (${interval/1000}s)`,
        type: notification.type,
        position: "top-right",
        duration: interval === 31000 ? 0 : 4000, // Set duration to 0 for 31 seconds notification
        showClose: true,
        offset: 30
      });
    },
    clearAllIntervals() {
      this.notificationIntervals.forEach(interval => {
        clearInterval(interval);
      });
      this.notificationIntervals = [];
    }
  }
};
</script>

<style>
#app {
  height: 100vh; 
  width: 100%;
}
</style>