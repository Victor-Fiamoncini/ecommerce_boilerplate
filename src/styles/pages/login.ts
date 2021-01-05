import styled from 'styled-components'
import { rem } from 'polished'

export const LoginContainer = styled.section`
	text-align: center;
	h2 {
		font-size: ${rem(28)};
		margin-bottom: 22px;
	}
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		input,
		button {
			margin-bottom: 22px;
			border-radius: 22px;
			padding: 16px;
			width: 300px;
			margin-bottom: 12px;
			font-weight: 600;
		}
		button {
			color: ${props => props.theme.colors.white};
			background: ${props => props.theme.colors.primary};
			width: 128px;
			transition: transform 0.3s;
			&:hover {
				transform: translateY(-2px);
			}
		}
	}
`
