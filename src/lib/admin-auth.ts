"use client"

export function setAdminToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_token', token)
  }
}

export function getAdminToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('admin_token')
  }
  return null
}

export function isAdminAuthenticated(): boolean {
  const token = getAdminToken()
  if (!token) return false
  
  try {
    const payload = JSON.parse(atob(token))
    if (payload.exp && payload.exp > Date.now()) {
      return true
    }
    // Token expired
    logout()
    return false
  } catch {
    return false
  }
}

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_token')
    window.location.href = '/admin'
  }
}