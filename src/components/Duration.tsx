export function Duration() {
  return (
    <div className="plan">
      <div className="duration">
        <div className="dates division">
          <p>
            Subscription <span>start date</span>
          </p>
          <p className="date">1 Aug 2023</p>
        </div>
        <div className="dates">
          <p>
            Subscription <span>end date</span>
          </p>
          <p className="date">1 Aug 2024</p>
        </div>
      </div>
      <div className="renew">
        <p>Auto-Renew</p>
        <div>
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle"></label>
        </div>
      </div>
    </div>
  );
}
