interface User {
  firstName: string
  lastName: string
  email: string
  password: string
  phone?: string
  avatar?: string
}

interface GenerateUserOptions {
  firstName?: string
  lastName?: string
  emailDomain?: string
  emailFormat?: 'name.timestamp' | 'timestamp' | 'name' | 'custom'
  customEmailPrefix?: string
  includeTimestamp?: boolean
  password?: string
  useRandomPassword?: boolean
  passwordLength?: number
  generatePhone?: boolean
  phone?: string
  generateAvatar?: boolean
  avatar?: string
}

const firstNames = [
  'Janina',
  'John',
  'Anna',
  'Michael',
  'Sarah',
  'Katarzyna',
  'Piotr',
  'Maria',
  'David',
  'Emma',
  'Aleksandra',
  'Tomasz',
  'Barbara',
  'Robert',
  'Ewa',
  'Andrzej',
  'Magdalena',
  'Marek',
  'Joanna',
  'Pawel',
  'Agnieszka',
  'Krzysztof',
  'Monika',
  'Lukasz',
  'Natalia',
  'Michal',
  'Karolina',
  'Adam',
  'Marta',
  'Grzegorz',
]

const lastNames = [
  'Nowak',
  'Doe',
  'Smith',
  'Johnson',
  'Brown',
  'Kowalski',
  'Wisniewski',
  'Wojcik',
  'Kowalewski',
  'Zielinski',
  'Szymankowski',
  'Wozniak',
  'Kozlowski',
  'Jankowski',
  'Mazur',
  'Wojciechowski',
  'Kwiatkowski',
  'Krawczyk',
  'Piotrowski',
  'Grabowski',
  'Nowakowski',
  'Pawlowski',
  'Michalski',
  'Krol',
  'Zajac',
  'Wieczorek',
  'Jablonski',
  'Kruk',
  'Majewski',
  'Olszewski',
]

function generateRandomPassword(length: number = 12): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

function generateRandomPhone(): string {
  const areaCode = Math.floor(Math.random() * 900) + 100
  const exchange = Math.floor(Math.random() * 900) + 100
  const number = Math.floor(Math.random() * 9000) + 1000
  return `+1-${areaCode}-${exchange}-${number}`
}

function generateRandomAvatar(): string {
  const size = 150
  const id = Math.floor(Math.random() * 1000)
  return `https://picsum.photos/${size}?random=${id}`
}

export function generateUser(options: GenerateUserOptions = {}): User {
  const firstName = options.firstName || firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = options.lastName || lastNames[Math.floor(Math.random() * lastNames.length)]
  const emailDomain = options.emailDomain || 'test.test1'
  const emailFormat = options.emailFormat || 'name.timestamp'
  const includeTimestamp = options.includeTimestamp !== false
  const timestamp = includeTimestamp ? new Date().getTime() : ''
  const timestampStr = timestamp ? `${timestamp}` : ''

  let emailPrefix = ''
  switch (emailFormat) {
    case 'name.timestamp':
      emailPrefix = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${timestampStr}`
      break
    case 'timestamp':
      emailPrefix = timestampStr || 'user'
      break
    case 'name':
      emailPrefix = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`
      break
    case 'custom':
      emailPrefix = options.customEmailPrefix || 'user'
      break
    default:
      emailPrefix = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${timestampStr}`
  }
  const email = `${emailPrefix}@${emailDomain}`

  let password = options.password || 'testtest234'
  if (options.useRandomPassword) {
    password = generateRandomPassword(options.passwordLength || 12)
  }

  const user: User = {
    firstName,
    lastName,
    email,
    password,
  }

  if (options.generatePhone || options.phone) {
    user.phone = options.phone || generateRandomPhone()
  }

  if (options.generateAvatar || options.avatar) {
    user.avatar = options.avatar || generateRandomAvatar()
  }

  return user
}
