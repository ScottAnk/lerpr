export default function Coordinate({ point }) {
  return (
    <>
      <input type="number" value={point.x} className="CoordinateX" />
      <input type="number" value={point.y} className="CoordinateY" />
    </>
  )
}
