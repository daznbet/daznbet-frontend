export const getPlayers = async () => {
  const response = await fetch('https://9m3cfgkg69.execute-api.sa-east-1.amazonaws.com/dev/games/live', {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    }
  })

  if (!response.ok) 
    throw Error('something got wrong! try another name or give up...')

  const players = await response.json()

  return players
}