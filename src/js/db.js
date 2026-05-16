/**
 * 本地数据库管理器 - 模拟后端数据库
 * 使用 localStorage 存储申请记录
 */
(function() {
  'use strict';

  const DB_KEY = 'cduestc_applications';
  const ADMIN_KEY = 'cduestc_admin';

  // 默认管理员账户
  const DEFAULT_ADMIN = {
    username: 'admin',
    password: 'admin123'
  };

  // 简单的哈希函数用于存储（生产环境应使用更强的加密）
  function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(16);
  }

  // 初始化数据库
  function initDB() {
    if (!localStorage.getItem(DB_KEY)) {
      localStorage.setItem(DB_KEY, JSON.stringify([]));
    }
    if (!localStorage.getItem(ADMIN_KEY)) {
      localStorage.setItem(ADMIN_KEY, JSON.stringify(DEFAULT_ADMIN));
    }
  }

  // 获取所有申请记录
  function getAllApplications() {
    initDB();
    const data = localStorage.getItem(DB_KEY);
    return JSON.parse(data || '[]');
  }

  // 根据邮箱查找申请记录
  function findByEmail(email) {
    const apps = getAllApplications();
    return apps.find(app => app.email.toLowerCase() === email.toLowerCase());
  }

  // 添加申请记录
  function addApplication(appData) {
    initDB();
    const apps = getAllApplications();
    const timestamp = Date.now();
    const newApp = {
      id: timestamp,
      ...appData,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    apps.unshift(newApp); // 最新申请在前
    localStorage.setItem(DB_KEY, JSON.stringify(apps));
    return newApp;
  }

  // 更新申请记录
  function updateApplication(id, appData) {
    const apps = getAllApplications();
    const index = apps.findIndex(app => app.id === id);
    if (index !== -1) {
      apps[index] = { ...apps[index], ...appData, updatedAt: Date.now() };
      localStorage.setItem(DB_KEY, JSON.stringify(apps));
      return apps[index];
    }
    return null;
  }

  // 删除申请记录
  function deleteApplication(id) {
    const apps = getAllApplications();
    const filtered = apps.filter(app => app.id !== id);
    localStorage.setItem(DB_KEY, JSON.stringify(filtered));
    return filtered.length < apps.length;
  }

  // 清空所有申请记录
  function clearAllApplications() {
    localStorage.setItem(DB_KEY, JSON.stringify([]));
    return true;
  }

  // 管理员验证
  function verifyAdmin(username, password) {
    const admin = JSON.parse(localStorage.getItem(ADMIN_KEY) || 'null');
    // 如果没有存储的管理员数据，或者数据格式不正确，使用默认值重置
    if (!admin || typeof admin.username !== 'string' || typeof admin.password !== 'string') {
      localStorage.setItem(ADMIN_KEY, JSON.stringify(DEFAULT_ADMIN));
      return username === DEFAULT_ADMIN.username && password === DEFAULT_ADMIN.password;
    }
    return admin.username === username && admin.password === password;
  }

  // 获取统计数据
  function getStats() {
    const apps = getAllApplications();
    const today = new Date().setHours(0, 0, 0, 0);
    return {
      total: apps.length,
      today: apps.filter(app => app.createdAt >= today).length,
      departments: apps.reduce((acc, app) => {
        acc[app.dept] = (acc[app.dept] || 0) + 1;
        return acc;
      }, {})
    };
  }

  // 暴露 API
  window.DB = {
    initDB,
    getAllApplications,
    findByEmail,
    addApplication,
    updateApplication,
    deleteApplication,
    clearAllApplications,
    verifyAdmin,
    getStats
  };
})();