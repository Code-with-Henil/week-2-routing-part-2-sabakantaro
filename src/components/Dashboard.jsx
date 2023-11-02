import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Dashboard() {
  const { user } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/log-in')
    }
  }, [user, navigate])

  return (
    <h1>
      Dashboard
      {user && `: ${user}`
      }
    </h1>
  )
}

export default Dashboard
