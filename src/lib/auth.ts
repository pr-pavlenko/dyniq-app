export const TEST_USER = {
  name: "Dyniq Operator",
  email: "demo@dyniq.ai",
  password: "dyniq123",
  company: "Dyniq Pilot Lab",
}

export type DyniqUser = {
  name: string
  email: string
  company: string
}

const AUTH_KEY = "dyniq_auth_user"

export const getCurrentUser = (): DyniqUser | null => {
  try {
    const savedUser = localStorage.getItem(AUTH_KEY)
    return savedUser ? JSON.parse(savedUser) : null
  } catch {
    return null
  }
}

export const loginWithDemoUser = (email: string, password: string): DyniqUser | null => {
  const normalizedEmail = email.trim().toLowerCase()

  if (normalizedEmail === TEST_USER.email && password === TEST_USER.password) {
    const user = {
      name: TEST_USER.name,
      email: TEST_USER.email,
      company: TEST_USER.company,
    }

    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
    return user
  }

  return null
}

export const logout = () => {
  localStorage.removeItem(AUTH_KEY)
}
