import React from 'react'
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import favicon from '../assets/favicon.png'

export default class MyDocument extends Document {
	public static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	public render(): JSX.Element {
		return (
			<Html lang="pt-br">
				<Head>
					<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=7" />
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<meta name="theme-color" content="#000000" />
					<meta name="msapplication-navbutton-color" content="#000000" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="#000000"
					/>
					<link rel="shortcut icon" href={favicon} type="image/x-icon" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
