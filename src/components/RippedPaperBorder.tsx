function RippedPaperBorder({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      className={`fill-${fill}`}
      style={{
        display: 'block',
        width: '100%',
        height: '150px',
      }}
    >
      <path d="M0,80 C40,60 60,100 100,80 C140,60 160,100 200,80 C240,60 260,100 300,80 C340,60 360,100 400,80 C440,60 460,100 500,80 C540,60 560,100 600,80 C640,60 660,100 700,80 C740,60 760,100 800,80 C840,60 860,100 900,80 C940,60 960,100 1000,80 C1040,60 1060,100 1100,80 C1140,60 1160,100 1200,80 C1240,60 1260,100 1300,80 C1340,60 1360,100 1400,80 L1440,60 L1440,150 L0,150 Z" />
    </svg>
  );
}

export default RippedPaperBorder;
