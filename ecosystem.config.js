module.exports = {
  apps: [{
    name: "frontend",
    script: "./dist/index.js",
    env: {
      PORT: 9090
    }
  }]
}