import { CommandLogPanel } from './components/CommandLogPanel'
import { ConnectionPanel } from './components/ConnectionPanel'
import { ControlPad } from './components/ControlPad'
import { SensorPanel } from './components/SensorPanel'
import { useLegoHubController } from './hooks/useLegoHubController'
import './App.css'

function App() {
  const {
    connected,
    status,
    drivePower,
    commandLog,
    distanceSensor,
    connect,
    disconnect,
    clearCommandLog,
    startSteering,
    stopSteering,
    setDrive,
    stopAll,
  } = useLegoHubController()

  return (
    <main className="app-shell">
      <ConnectionPanel
        connected={connected}
        status={status}
        onConnect={connect}
        onDisconnect={disconnect}
      />
      <ControlPad
        drivePower={drivePower}
        startSteering={startSteering}
        stopSteering={stopSteering}
        setDrive={setDrive}
        stopAll={stopAll}
      />
      <SensorPanel distanceSensor={distanceSensor} />
      <CommandLogPanel entries={commandLog} onClear={clearCommandLog} />
    </main>
  )
}

export default App
