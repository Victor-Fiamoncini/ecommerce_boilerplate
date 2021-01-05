export interface IUser {
	email: string
}

export interface IAuthState {
	user: IUser
}

export interface IAuthContextData {
	user: IUser
	loginUser: (email: string) => Promise<void>
	logoutUser: () => void
}
