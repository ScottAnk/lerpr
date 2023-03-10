// import Team from '../Team/Team'
import { useNavigate } from 'react-router-dom'

export default function Resources() {
  const navigate = useNavigate()

  function handleNavigateTeam() {
    navigate('/team')
  }

  return (
    <main className="Resources">
      <>
        <h1>Resources</h1>
        {/* link for team page */}
        <footer>
          <p onClick={handleNavigateTeam}>Team</p>
        </footer>
      </>
    </main>
  )
}
