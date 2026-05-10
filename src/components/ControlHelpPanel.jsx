export function ControlHelpPanel() {
  return (
    <section className="control-help-panel">
      <h2>Keyboard Controls</h2>
      <div className="control-help-grid">
        <div className="control-help-group">
          <h3>Drive</h3>
          <dl>
            <dt>W</dt><dd>Forward (hold)</dd>
            <dt>S</dt><dd>Backward (hold)</dd>
            <dt>↑ / ↓</dt><dd>Forward / Backward (hold, with brake)</dd>
          </dl>
        </div>
        <div className="control-help-group">
          <h3>Steering</h3>
          <dl>
            <dt>← / →</dt><dd>Step steering left / right</dd>
            <dt>7 / 9</dt><dd>Full power left / right (hold)</dd>
            <dt>4 / 6</dt><dd>Pulse left / right (2× pulse duration)</dd>
            <dt>1 / 3</dt><dd>Pulse left / right (1× pulse duration)</dd>
            <dt>5</dt><dd>Force stop steering motor</dd>
          </dl>
        </div>
        <div className="control-help-group">
          <h3>Settings</h3>
          <dl>
            <dt>2 / 8</dt><dd>Decrease / increase pulse duration (±20ms)</dd>
            <dt>PgDn / PgUp</dt><dd>Decrease / increase servo speed (±10%)</dd>
          </dl>
        </div>
        <div className="control-help-group">
          <h3>Test</h3>
          <dl>
            <dt>D</dt><dd>Port D motor forward (hold)</dd>
            <dt>Shift+D</dt><dd>Port D motor reverse (hold)</dd>
          </dl>
        </div>
      </div>
    </section>
  )
}
