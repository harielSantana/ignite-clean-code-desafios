// Boleanos

const parkVisitor = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const minimalHeight = 130

const currentHour = new Date().getHours()

const OpeningHours = currentHour > 9 && currentHour < 18

if (!OpeningHours) {
  throw new Error('O parque está fechado!')
}

const parkTicket = parkVisitor.hasTicket

if (!parkTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const verifyUserByMininalHeight = parkVisitor.height > minimalHeight

if (!verifyUserByMininalHeight) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')