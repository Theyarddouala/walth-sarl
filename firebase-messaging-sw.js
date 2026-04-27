importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDVF_INK63-0XrV5qljqessHeOOQc8afeQ",
  authDomain: "the-yard-caf6f.firebaseapp.com",
  projectId: "the-yard-caf6f",
  storageBucket: "the-yard-caf6f.firebasestorage.app",
  messagingSenderId: "580422335751",
  appId: "1:580422335751:web:7f1c6a26b0f966262099a2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  var n = payload.notification || {};
  var data = payload.data || {};
  self.registration.showNotification(n.title || 'WALTH SARL', {
    body: n.body || '',
    icon: self.location.origin + '/icon-192.png',
    data: data,
    tag: data.code || 'walth-notif'
  });
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  var data = e.notification.data || {};
  var url = self.location.origin + '/';
  e.waitUntil(clients.openWindow(url));
});

self.addEventListener('install', function(e) { self.skipWaiting(); });
self.addEventListener('activate', function(e) { self.clients.claim(); });
