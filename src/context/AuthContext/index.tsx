import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'

import { MAGIC_PUBLIC_KEY } from '../../config/urls'

import { IAuthContextData, IAuthState } from './types'

let magic: Magic | null

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<IAuthState>({
		user: {
			email: '',
			isAuthenticated: false,
		},
	} as IAuthState)

	const router = useRouter()

	const loginUser = useCallback(
		async (email: string) => {
			try {
				await magic?.auth.loginWithMagicLink({ email })

				setData({ ...data, user: { email, isAuthenticated: true } })

				router.push('/')
			} catch {
				setData({ ...data, user: { email: '', isAuthenticated: false } })
			}
		},
		[data, router]
	)

	const logoutUser = useCallback(async () => {
		try {
			await magic?.user.logout()
		} finally {
			setData({ ...data, user: { email: '', isAuthenticated: false } })

			router.push('/')
		}
	}, [data, router])

	const getToken = useCallback(async () => {
		try {
			const token = await magic?.user.getIdToken()

			return token
		} catch {
			setData({ ...data, user: { email: '', isAuthenticated: false } })

			router.push('/')
		}
	}, [data, router])

	useEffect(() => {
		magic = new Magic(MAGIC_PUBLIC_KEY)
	}, []) // eslint-disable-line

	return (
		<AuthContext.Provider
			value={{
				user: data.user,
				loginUser,
				logoutUser,
				getToken,
			}}
		>
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
