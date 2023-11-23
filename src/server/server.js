const express = require("express");
const http = require("http");
const {
  F1TelemetryClient,
  constants,
} = require("@racehub-io/f1-telemetry-client");
const { PACKETS } = constants;
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);

const LOGGING = false;

// Configure CORS for Express
app.use(cors());

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000", // Update with your frontend's origin
    methods: ["GET", "POST"],
  },
});

const port = 3001;

const telemetryClient = new F1TelemetryClient({ port: 20777 });

io.on("connection", (socket) => {
  console.log("Client connected");

  telemetryClient.on(PACKETS.carTelemetry, (data) => {
    handleTelemetryData(socket, data);
  });
  telemetryClient.on(PACKETS.carStatus, (data) => {
    handleStatusData(socket, data);
  });
  telemetryClient.on(PACKETS.session, (data) => {
    handleSessionData(socket, data);
  });
  telemetryClient.on(PACKETS.lapData, (data) => {
    handleLapData(socket, data);
  });
});

telemetryClient.start();

function handleTelemetryData(socket, data) {
  let telemetryData = {};
  let playerCarIndex = data.m_header.m_playerCarIndex;
  //console.log(data);
  try {
    telemetryData = {
      speed: data.m_carTelemetryData[playerCarIndex].m_speed,
      throttle: data.m_carTelemetryData[playerCarIndex].m_throttle,
      brake: data.m_carTelemetryData[playerCarIndex].m_brake,
      gear: data.m_carTelemetryData[playerCarIndex].m_gear,
      engineRPM: data.m_carTelemetryData[playerCarIndex].m_engineRPM,
      tyresSurfaceTemperature:
        data.m_carTelemetryData[playerCarIndex].m_tyresSurfaceTemperature,
      tyresInnerTemperature:
        data.m_carTelemetryData[playerCarIndex].m_tyresInnerTemperature,
      tyresPressure: data.m_carTelemetryData[playerCarIndex].m_tyresPressure,
      drs: data.m_carTelemetryData[playerCarIndex].m_drs,
      revLightsPercent:
        data.m_carTelemetryData[playerCarIndex].m_revLightsPercent,
      revLightsBitValue:
        data.m_carTelemetryData[playerCarIndex].m_revLightsBitValue,
    };
  } catch {}
  LOGGING && console.log(telemetryData);
  socket.emit("telemetryData", telemetryData);
}

function handleStatusData(socket, data) {
  // Add custom logic to handle the telemetry data
  let statusData = {};
  let playerCarIndex = data.m_header.m_playerCarIndex;

  try {
    statusData = {
      fuel: data.m_carStatusData[playerCarIndex].m_fuelInTank,
      drsAllowed: data.m_carStatusData[playerCarIndex].m_drsAllowed,
      maxRPM: data.m_carStatusData[playerCarIndex].m_maxRPM,
      idleRPM: data.m_carStatusData[playerCarIndex].m_idleRPM,
      actualTyreCompound:
        data.m_carStatusData[playerCarIndex].m_actualTyreCompound,
      ersStoreEnergy: data.m_carStatusData[playerCarIndex].m_ersStoreEnergy,
      ersDeployMode: data.m_carStatusData[playerCarIndex].m_ersDeployMode,
    };
  } catch {}
  LOGGING && console.log(statusData);
  socket.emit("statusData", statusData);
}

function handleSessionData(socket, data) {
  let sessionData = {};
  try {
    sessionData = {
      totalLaps: data.m_totalLaps,
      trackId: data.m_trackId,
      sessionTimeLeft: data.m_sessionTimeLeft,
      trackTemperature: data.m_trackTemperature,
      airTemperature: data.m_airTemperature,
      weather: data.m_weather,
      trackLength: data.m_trackLength,
    };
  } catch {}
  LOGGING && console.log(sessionData);
  socket.emit("sessionData", sessionData);
}

function handleLapData(socket, data) {
  let lapData = {};
  let playerCarIndex = data.m_header.m_playerCarIndex;
  try {
    lapData = {
      lastLapTimeInMS: data.m_lapData[playerCarIndex].m_lastLapTimeInMS,
      currentLapTimeInMS: data.m_lapData[playerCarIndex].m_currentLapTimeInMS,
      sector1TimeInMS: data.m_lapData[playerCarIndex].m_sector1TimeInMS,
      sector2TimeInMS: data.m_lapData[playerCarIndex].m_sector2TimeInMS,
      deltaToCarInFrontInMS:
        data.m_lapData[playerCarIndex].m_deltaToCarInFrontInMS,
      carPosition: data.m_lapData[playerCarIndex].m_carPosition,
    };
  } catch {}
  LOGGING && console.log(lapData);
  socket.emit("lapData", lapData);
}

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
