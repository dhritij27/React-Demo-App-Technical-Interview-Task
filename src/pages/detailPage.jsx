import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchUserById } from '../services/api'

const DetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUserById(id).then(setUser)
  }, [id])

  if (!user) return <p>Loading...</p>

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <button onClick={() => navigate('/main')}>
        Back to list
      </button>
    </div>
  )
}

export default DetailPage
