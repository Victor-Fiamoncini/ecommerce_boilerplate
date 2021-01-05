import React, { useCallback, useContext, useState } from 'react'
import { createContext } from 'react'
import { useRouter } from 'next/router'

import { IAuthContextData, IAuthState } from './types'

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<IAuthState>({} as IAuthState)

	const router = useRouter()

	const loginUser = useCallback(
		async (email: string) => {
			setData({ ...data, user: { email } })

			router.push('/')
		},
		[data, router]
	)

	const logoutUser = useCallback(() => {
		setData({ ...data, user: {} } as IAuthState)

		router.push('/')
	}, [data, router])

	return (
		<AuthContext.Provider value={{ user: data.user, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth(): IAuthContextData {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error(
			'Invalid useAuth/AuthContext call, must be user within AuthProvider component'
		)
	}

	return context
}
