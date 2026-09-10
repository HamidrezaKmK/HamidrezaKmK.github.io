/* The header brand mark, which changes with the theme: a terminal with a
   blinking cursor in the dark, a robot head glancing around in the light.
   Both are drawn on a 24-unit grid, in plain geometry with a 1.6 stroke,
   so the two read as the same hand at the same weight. */

export function TerminalIcon({ size = 20 }) {
  return (
    <svg
      className="brand-icon brand-icon--terminal"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.6" y="4.2" width="18.8" height="15.6" rx="2.4" />
      <path d="M6.6 10.1 L9.1 12.3 L6.6 14.5" />
      <rect
        className="terminal-cursor"
        x="11.4"
        y="13.6"
        width="5.8"
        height="1.6"
        rx="0.7"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function RobotIcon({ size = 20 }) {
  return (
    <svg
      className="brand-icon brand-icon--robot"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 5.2 V3.1" />
      <circle cx="12" cy="2.2" r="0.9" fill="currentColor" stroke="none" />
      <rect x="3.7" y="5.2" width="16.6" height="13.1" rx="3.3" />
      <path d="M1.9 10.2 V13.3" />
      <path d="M22.1 10.2 V13.3" />
      {/* Sockets stay put so the pupils have something to glance within. */}
      <circle cx="8.9" cy="10.3" r="1.95" />
      <circle cx="15.1" cy="10.3" r="1.95" />
      <g className="robot-eyes">
        <circle cx="8.9" cy="10.3" r="0.95" fill="currentColor" stroke="none" />
        <circle cx="15.1" cy="10.3" r="0.95" fill="currentColor" stroke="none" />
      </g>
      <rect x="8.6" y="14.1" width="6.8" height="2.2" rx="1.1" />
    </svg>
  );
}
