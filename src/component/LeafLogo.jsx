
const LeafLogo = ({ size = 30 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#35251f"
      aria-label="Three-leaf logo"
      role="img"
    >
      {/* Left leaf */}
      <path
        d="M30 39C15 39 8 28 10 13C24 13 33 22 30 39Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 17L28 35"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Right leaf */}
      <path
        d="M34 39C49 39 56 28 54 13C40 13 31 22 34 39Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 17L36 35"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Center leaf */}
      <path
        d="M32 31C20 22 23 9 32 4C41 9 44 22 32 31Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 8V29"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Stem */}
      <path
        d="M32 29V57"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LeafLogo;

