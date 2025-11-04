import { test, expect } from '@playwright/test'
import { generateUser } from '../../src/helpers/user.generator'

test.describe('User Generator', { tag: ['@unit'] }, () => {
  test('should generate user with default options', () => {
    const user = generateUser()

    expect.soft(user).toHaveProperty('firstName')
    expect.soft(user).toHaveProperty('lastName')
    expect.soft(user).toHaveProperty('email')
    expect.soft(user).toHaveProperty('password')
    expect.soft(user.firstName).toBeDefined()
    expect.soft(user.lastName).toBeDefined()
    expect.soft(user.email).toMatch(/@test\.test1$/)
    expect.soft(user.password).toBe('testtest234')
    expect.soft(user).not.toHaveProperty('phone')
    expect.soft(user).not.toHaveProperty('avatar')
  })

  test('should generate user with custom firstName and lastName', () => {
    const user = generateUser({
      firstName: 'Custom',
      lastName: 'User',
    })

    expect.soft(user.firstName).toBe('Custom')
    expect.soft(user.lastName).toBe('User')
    expect.soft(user.email).toMatch(/^custom\.user\d*@test\.test1$/)
  })

  test('should generate user with custom email domain', () => {
    const user = generateUser({
      emailDomain: 'example.com',
    })

    expect.soft(user.email).toMatch(/@example\.com$/)
  })

  test('should generate user with email format name.timestamp', () => {
    const user = generateUser({
      emailFormat: 'name.timestamp',
      includeTimestamp: true,
    })

    expect.soft(user.email).toMatch(/^[a-z]+\.[a-z]+\d+@test\.test1$/)
  })

  test('should generate user with email format timestamp', () => {
    const user = generateUser({
      emailFormat: 'timestamp',
      includeTimestamp: true,
    })

    expect.soft(user.email).toMatch(/^\d+@test\.test1$/)
  })

  test('should generate user with email format name', () => {
    const user = generateUser({
      emailFormat: 'name',
      includeTimestamp: false,
    })

    expect.soft(user.email).toMatch(/^[a-z]+\.[a-z]+@test\.test1$/)
  })

  test('should generate user with custom email prefix', () => {
    const user = generateUser({
      emailFormat: 'custom',
      customEmailPrefix: 'myuser',
    })

    expect.soft(user.email).toBe('myuser@test.test1')
  })

  test('should generate user with custom password', () => {
    const user = generateUser({
      password: 'custompass123',
    })

    expect.soft(user.password).toBe('custompass123')
  })

  test('should generate user with random password', () => {
    const user = generateUser({
      useRandomPassword: true,
      passwordLength: 10,
    })

    expect.soft(user.password).toHaveLength(10)
    expect.soft(user.password).toMatch(/^[A-Za-z0-9!@#$%^&*]+$/)
  })

  test('should generate user with phone', () => {
    const user = generateUser({
      generatePhone: true,
    })

    expect.soft(user.phone).toMatch(/^\+1-\d{3}-\d{3}-\d{4}$/)
  })

  test('should generate user with custom phone', () => {
    const user = generateUser({
      phone: '+48-123-456-789',
    })

    expect.soft(user.phone).toBe('+48-123-456-789')
  })

  test('should generate user with avatar', () => {
    const user = generateUser({
      generateAvatar: true,
    })

    expect.soft(user.avatar).toMatch(/^https:\/\/picsum\.photos\/150\?random=\d+$/)
  })

  test('should generate user with custom avatar', () => {
    const user = generateUser({
      avatar: 'https://example.com/avatar.jpg',
    })

    expect.soft(user.avatar).toBe('https://example.com/avatar.jpg')
  })

  test('should generate user with all options', () => {
    const user = generateUser({
      firstName: 'Test',
      lastName: 'User',
      emailDomain: 'test.com',
      emailFormat: 'custom',
      customEmailPrefix: 'testuser',
      password: 'secure123',
      generatePhone: true,
      generateAvatar: true,
    })

    expect.soft(user.firstName).toBe('Test')
    expect.soft(user.lastName).toBe('User')
    expect.soft(user.email).toBe('testuser@test.com')
    expect.soft(user.password).toBe('secure123')
    expect.soft(user.phone).toMatch(/^\+1-\d{3}-\d{3}-\d{4}$/)
    expect.soft(user.avatar).toMatch(/^https:\/\/picsum\.photos\/150\?random=\d+$/)
  })

  test('should not include timestamp in email when includeTimestamp is false', () => {
    const user = generateUser({
      emailFormat: 'name.timestamp',
      includeTimestamp: false,
    })

    expect.soft(user.email).toMatch(/^[a-z]+\.[a-z]+@test\.test1$/)
    expect.soft(user.email).not.toMatch(/\d+@test\.test1$/)
  })
})
