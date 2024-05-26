// Causa vs Efeito
import { useEffect, useState } from "react"

interface UserGithubProps {
  name: string;
  github: string;
}

function findUserGithubData() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserGithubProfile() {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<UserGithubProps>()

  useEffect(() => {
    function findUserDetails() {
      setIsLoading(true)

      const fetchUserResponse = findUserGithubData()

      setUserData(fetchUserResponse.data.user)

      setIsLoading(false)
    }

    findUserDetails()
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}


