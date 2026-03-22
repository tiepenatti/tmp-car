# LEGO 88012 Car Controller

React + Vite page for controlling a LEGO hub over Web Bluetooth.

Current port mapping:

- Port A: steering motor
- Port B: rear traction motor
- Port D: front traction motor

Keyboard controls:

- Up: drive forward while held
- Down: drive backward while held
- Left: steer left while held
- Right: steer right while held
- Key release: send stop for that axis

## Run on localhost

Web Bluetooth requires a secure context. `localhost` is allowed, so run the app locally with Vite.

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run start
```

This command:

- serves the app on localhost
- watches files for changes
- rebuilds automatically
- hot refreshes the page in the browser

3. Open:

```text
http://localhost:5173/
```

You can still use `npm run dev` if you want the default Vite command, but `npm run start` is the intended local workflow.

## Production preview

To test the production build locally:

```bash
npm run build
npm run preview
```

## Disconnect / unpair note

The Disconnect button stops the motors and closes the active GATT connection from the page.

Browsers do not expose a reliable way for a webpage to force a full OS-level Bluetooth unpair or “forget device” action. If you need to fully remove the remembered pairing, do that from the operating system Bluetooth settings.
