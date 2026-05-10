export function CommandLogPanel({ entries, onClear }) {
  return (
    <section className="command-log-panel">
      <div className="command-log-header">
        <div>
          <h2>Bluetooth Command Log</h2>
          <p>Human-readable Bluetooth traffic. Hex stays last for debugging only.</p>
        </div>
        <button type="button" className="clear-log-button" onClick={onClear}>
          Clear log
        </button>
      </div>

      <div className="command-log-columns" aria-hidden="true">
        <span>Dir</span>
        <span>Time</span>
        <span>Type</span>
        <span>Port</span>
        <span>Meaning</span>
      </div>

      <div className="command-log-list">
        {entries.length === 0 ? (
          <p className="command-log-empty">No Bluetooth traffic yet.</p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className={`command-log-entry command-log-entry-${entry.direction.toLowerCase()}`}>
              <span className="command-log-direction">{entry.direction}</span>
              <span className="command-log-time">{entry.time}</span>
              <span className="command-log-type">{entry.typeLabel}</span>
              <span className="command-log-port">{entry.portLabel}</span>
              <span className="command-log-summary">{entry.label}</span>
              {entry.detail ? <span className="command-log-detail">{entry.detail}</span> : null}
              {entry.note ? <span className="command-log-note">{entry.note}</span> : null}
              <code className="command-log-bytes">{entry.bytes}</code>
            </div>
          ))
        )}
      </div>
    </section>
  )
}