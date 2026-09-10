/* Icons for the header theme toggle. Dark mode gets a terminal with a
   blinking cursor; light mode gets a sketched monkey having a dance.
   Both are drawn on a 24-unit grid and inherit the button's colour.
   They have to survive being 20px wide, so the monkey carries only the
   marks that still say "monkey" at that size: big ears, two eyes, a
   grin, and four swinging limbs. */

export function TerminalIcon({ size = 20 }) {
  return (
    <svg
      className="toggle-icon toggle-icon--terminal"
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

export function MonkeyIcon({ size = 21 }) {
  return (
    <svg
      className="toggle-icon toggle-icon--monkey"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <g className="monkey">
        <circle cx="6.2" cy="7.9" r="2.1" />
        <circle cx="17.8" cy="7.9" r="2.1" />
        {/* The head outline stops just short of closing, so the line
            reads as drawn by hand rather than struck by a compass. */}
        <path d="M7.79 10.72 A5 5 0 1 1 9.99 13.55" />
        <circle cx="10.1" cy="7.8" r="0.65" fill="currentColor" stroke="none" />
        <circle cx="13.9" cy="7.8" r="0.65" fill="currentColor" stroke="none" />
        <path d="M10.1 10.6 Q12 12.5 13.9 10.6" />
        <path d="M12 14.2 L12 17.1" />
        <path className="monkey-limb monkey-arm--l" d="M11.6 14.7 Q9.8 14.4 9.1 12.9" />
        <path className="monkey-limb monkey-arm--r" d="M12.4 14.7 Q14.2 14.4 14.9 12.9" />
        <path className="monkey-limb monkey-leg--l" d="M12 17.1 Q11.1 18.6 10.1 19.7" />
        <path className="monkey-limb monkey-leg--r" d="M12 17.1 Q12.9 18.6 13.9 19.7" />
      </g>
    </svg>
  );
}
