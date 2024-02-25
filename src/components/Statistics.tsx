interface IStatistics {
  heading: string;
  prov1: number;
  prov2: number;
  styleId: string;
}
export function Statistics({ heading, prov1, prov2, styleId }: IStatistics) {
  return (
    <div className="stats-data">
      <h3>{heading}</h3>
      <div className="providers">
        <p>Millah</p>
        <p>Other providers</p>
      </div>
      <div className="providers">
        <h2 className={styleId}>{prov1}</h2>
        <h2 className={styleId}>{prov2}</h2>
      </div>
    </div>
  );
}
