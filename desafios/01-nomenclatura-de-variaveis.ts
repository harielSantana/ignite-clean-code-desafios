// Nomenclatura de variáveis

const categories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function findGithubUsernameAndGetCategory(req, res) {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const searchGithubUsernameResponse = await fetch(`https://api.github.com/users/${username}`);

  if (searchGithubUsernameResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const findedUserData = await searchGithubUsernameResponse.json()

  const orderCategoriesByFollowers = categories.sort((a, b) =>  b.followers - a.followers);

  const findCategoryWithMostFollowers = orderCategoriesByFollowers.find(i => findedUserData.followers > i.followers)

  const result = {
    username,
    category: findCategoryWithMostFollowers.title
  }

  return result
}

findGithubUsernameAndGetCategory({ query: {
  username: 'josepholiveira'
}}, {})