import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { FaLongArrowAltLeft } from 'react-icons/fa'

import { HeaderContainer, GoBackToHomeLink } from '../styles/components/header'

const Header: React.FC = () => {
	const { pathname } = useRouter()

	return (
		<HeaderContainer>
			{pathname !== '/' && (
				<Link href="/">
					<GoBackToHomeLink>
						<FaLongArrowAltLeft size={26} />
					</GoBackToHomeLink>
				</Link>
			)}
			<Link href="/">
				<a>
					<h1>Ecommerce Boilerplate</h1>
				</a>
			</Link>
		</HeaderContainer>
	)
}

export default Header
