export const create = async (userName) => {
  const response = await fetch('https://suk62wjydj.execute-api.sa-east-1.amazonaws.com/dev/users', {
  // await fetch('https://suk62wjydj.execute-api.sa-east-1.amazonaws.com/dev/users', {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify({ userName }),
    method: 'post'
  })

  if (!response.ok) {
    throw Error('name repeated!')
    return
  }

  const user = await response.json()

  return user
}
