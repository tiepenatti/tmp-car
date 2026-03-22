export function ConnectionPanel({ connected, status, onConnect, onDisconnect }) {
  return (
    <header className="connection-panel">
      <h1>LEGO 88012 Controller</h1>
      <div className="connection-actions">
        <button type="button" className="connect-button" onClick={onConnect}>
          {connected ? 'Reconnect Hub' : 'Connect to LEGO Hub'}
        </button>
        <button
          type="button"
          className="disconnect-button"
          onClick={onDisconnect}
          disabled={!connected}
        >
          Disconnect Hub
        </button>
      </div>
      <p className="status">Status: {status}</p>
      <p className="hint">Disconnect stops the motors and closes the Bluetooth session from this page.</p>
      <p className="hint">Keyboard: Arrow keys (hold to move, release to stop)</p>
    </header>
  )
}
