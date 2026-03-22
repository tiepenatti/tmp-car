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
            <article key={entry.id} className={`command-log-entry command-log-entry-${entry.direction.toLowerCase()}`}>
              <div className="command-log-row">
                <span className="command-log-direction">{entry.direction}</span>
                <span className="command-log-time">{entry.time}</span>
                <span>{entry.typeLabel}</span>
                <span>{entry.portLabel}</span>
                <span className="command-log-summary">{entry.label}</span>
              </div>
              {entry.detail ? <p className="command-log-detail">{entry.detail}</p> : null}
              {entry.note ? <p className="command-log-note">{entry.note}</p> : null}
              <code className="command-log-bytes">{entry.bytes}</code>
            </article>
          ))
        )}
      </div>
    </section>
  )
}