const Frame = () => (
  <svg
    width={38}
    height={37}
    viewBox="0 0 38 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_4854_364)">
      <path
        d="M13 27C12.1667 27 11.4583 26.7083 10.875 26.125C10.2917 25.5417 10 24.8333 10 24V15H28V24C28 24.8333 27.7083 25.5417 27.125 26.125C26.5417 26.7083 25.8333 27 25 27H13ZM10 14V12H16V11C16 10.7167 16.0958 10.4792 16.2875 10.2875C16.4792 10.0958 16.7167 10 17 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11V12H28V14H10Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_4854_364"
        x={-100}
        y={-100}
        width={238}
        height={237}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={50} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_4854_364"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_4854_364"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Frame;
