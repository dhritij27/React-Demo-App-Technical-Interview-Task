import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../services/api'
import SearchBar from '../components/SearchBar'

const MainPage = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => setError('Error loading users'))
      .finally(() => setLoading(false))
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Users</h2>
      <SearchBar value={search} onChange={setSearch} />

      <ul>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => navigate(`/detail/${user.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainPage
