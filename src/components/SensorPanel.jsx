function formatSensorValue(value, decimals) {
  if (value === null || value === undefined) {
    return 'Waiting for data'
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === 'number' && decimals > 0 ? item.toFixed(decimals) : String(item)))
      .join(', ')
  }

  if (typeof value === 'number' && decimals > 0) {
    return value.toFixed(decimals)
  }

  return String(value)
}

export function SensorPanel({ distanceSensor }) {
  return (
    <section className="sensor-panel">
      <div className="sensor-panel-header">
        <h2>Distance Sensor</h2>
        <span className={`sensor-badge ${distanceSensor.notifyEnabled ? 'sensor-badge-live' : ''}`}>
          {distanceSensor.notifyEnabled ? 'Live' : 'Idle'}
        </span>
      </div>

      <div className="sensor-reading">{formatSensorValue(distanceSensor.value, distanceSensor.decimals)}</div>

      <div className="sensor-meta">
        <span>Port C</span>
        <span>Mode {distanceSensor.mode}</span>
        <span>{distanceSensor.format}</span>
        <span>{distanceSensor.datasets} dataset{distanceSensor.datasets === 1 ? '' : 's'}</span>
      </div>

      <p className="sensor-raw">Raw: {distanceSensor.raw || 'No value frame yet'}</p>
    </section>
  )
}