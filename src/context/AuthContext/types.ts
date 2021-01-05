import { Magic } from 'magic-sdk'

export interface IUser {
	email: string
	isAuthenticated: boolean
}

export interface IAuthState {
	user: IUser
	magic: Magic | null
}

export interface IAuthContextData {
	user: IUser
	loginUser: (email: string) => Promise<void>
	logoutUser: () => void
}
