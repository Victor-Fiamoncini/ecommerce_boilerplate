import React from 'react'

import { AuthProvider } from './AuthContext'
import { OrderProvider } from './OrderContext'

const AppProvider: React.FC = ({ children }) => (
	<AuthProvider>
		<OrderProvider>{children}</OrderProvider>
	</AuthProvider>
)

export default AppProvider
