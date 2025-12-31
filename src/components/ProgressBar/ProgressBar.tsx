interface Props {
  value: number;
}

export default function ProgressBar({ value }: Props) {
  return (
    <div
      className="progress is-primary"
      role="progressbar"
      style={{ height: "10px" }}
    >
      <div className="progress-bar" style={{ width: `${value}%` }}></div>
    </div>
  );
}
