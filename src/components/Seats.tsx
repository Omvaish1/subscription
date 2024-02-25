interface ISeats {
  styleId: string;
  number: number;
  text: string;
}
export function Seats({ styleId, number, text }: ISeats) {
  return (
    <div className="seat">
      <h2 className={styleId}>{number}</h2>
      <p>{text}</p>
    </div>
  );
}
