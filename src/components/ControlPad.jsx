function HoldButton({ label, className, onPress, onRelease }) {
  const release = () => {
    onRelease()
  }

  return (
    <button
      type="button"
      className={className}
      onPointerDown={(event) => {
        event.preventDefault()
        onPress()
      }}
      onPointerUp={release}
      onPointerLeave={release}
      onPointerCancel={release}
    >
      {label}
    </button>
  )
}

export function ControlPad({
  drivePower,
  startSteering,
  stopSteering,
  setDrive,
  stopAll,
}) {
  return (
    <section className="controller-layout">
      <div className="grid">
        <div></div>
        <HoldButton
          className="control-button"
          label="FWD"
          onPress={() => setDrive(drivePower)}
          onRelease={() => setDrive(0)}
        />
        <div></div>

        <HoldButton
          className="control-button"
          label="LEFT"
          onPress={() => startSteering(-1)}
          onRelease={() => stopSteering()}
        />

        <button type="button" className="control-button stop-button" onClick={stopAll}>
          STOP
        </button>

        <HoldButton
          className="control-button"
          label="RIGHT"
          onPress={() => startSteering(1)}
          onRelease={() => stopSteering()}
        />

        <div></div>
        <HoldButton
          className="control-button"
          label="BWD"
          onPress={() => setDrive(-drivePower)}
          onRelease={() => setDrive(0)}
        />
        <div></div>
      </div>
    </section>
  )
}
