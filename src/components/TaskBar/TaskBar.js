import './TaskBar.css'

export default function TaskBar({ setOpenSignIn, user }) {
  function handleSave() {
    console.log('Save')
    if (!user) setOpenSignIn(true)
  }
  return (
    <div className="TaskBar">
      <button>Clear</button>
      <button>New Sandbox</button>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}
