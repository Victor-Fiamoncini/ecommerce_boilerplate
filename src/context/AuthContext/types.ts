export interface IUser {
	email: string
	isAuthenticated: boolean
}

export interface IAuthState {
	user?: IUser
}

export interface IAuthContextData {
	user?: IUser
	loginUser: (email: string) => Promise<void>
	logoutUser: () => Promise<void>
	getToken: () => Promise<string | undefined>
	loadSession: () => Promise<void>
}
