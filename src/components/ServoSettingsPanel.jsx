export function ServoSettingsPanel({
  servoPulseMs,
  setServoPulseMs,
  servoSpeedPct,
  setServoSpeedPct,
  servoPosition,
  forceStopSteering,
}) {
  return (
    <section className="servo-settings-panel">
      <h2>Servo Settings</h2>
      <div className="servo-settings-grid">
        <div className="servo-setting">
          <label>
            Pulse Duration: <strong>{servoPulseMs}ms</strong>
          </label>
          <div className="servo-setting-controls">
            <button className="servo-btn" onClick={() => setServoPulseMs((s) => Math.max(30, s - 20))}>
              −20
            </button>
            <input
              type="range"
              min={30}
              max={1000}
              step={10}
              value={servoPulseMs}
              onChange={(e) => setServoPulseMs(Number(e.target.value))}
            />
            <button className="servo-btn" onClick={() => setServoPulseMs((s) => Math.min(1000, s + 20))}>
              +20
            </button>
          </div>
        </div>

        <div className="servo-setting">
          <label>
            Servo Speed: <strong>{servoSpeedPct}%</strong>
          </label>
          <div className="servo-setting-controls">
            <button className="servo-btn" onClick={() => setServoSpeedPct((s) => Math.max(10, s - 10))}>
              −10
            </button>
            <input
              type="range"
              min={10}
              max={100}
              step={10}
              value={servoSpeedPct}
              onChange={(e) => setServoSpeedPct(Number(e.target.value))}
            />
            <button className="servo-btn" onClick={() => setServoSpeedPct((s) => Math.min(100, s + 10))}>
              +10
            </button>
          </div>
        </div>

        <div className="servo-setting">
          <label>
            Position: <strong>{servoPosition}°</strong>
          </label>
          <button className="servo-btn servo-btn-stop" onClick={forceStopSteering}>
            Force Stop (5)
          </button>
        </div>
      </div>
    </section>
  )
}
