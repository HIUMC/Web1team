interface category {
  food: number;
  finance: number;
}

export default function Donut({ food, finance }: category) {
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const total = food + finance;
  const ratio = finance / total;

  return (
    <svg width="260" height="260" viewBox="0 0 260 260">
      <circle
        cx="130"
        cy="130"
        r={radius}
        fill="none"
        stroke="#42C563"
        strokeWidth="6.22"
      />

      <circle
        cx="130"
        cy="130"
        r={radius}
        fill="none"
        stroke="#FB923C"
        strokeWidth="6.22"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * ratio}
        transform="rotate(-90 130 130)"
      />
    </svg>
  );
}
