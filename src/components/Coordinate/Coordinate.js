export default function Coordinate({
  point,
  coordinateIndex,
  modifyCoordinate,
}) {
  function handleChange(event) {
    const newCoordinate = point
    newCoordinate[event.target.name] = event.target.value
    modifyCoordinate(coordinateIndex, newCoordinate)
  }
  return (
    <>
      <input
        type="number"
        name="x"
        value={point.x}
        className="CoordinateX"
        onChange={handleChange}
      />
      <input
        type="number"
        name="y"
        value={point.y}
        className="CoordinateY"
        onChange={handleChange}
      />
    </>
  )
}
