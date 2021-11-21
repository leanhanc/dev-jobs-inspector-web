import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDoc extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preload" href="/fonts/Lato-Regular.ttf" as="font" crossOrigin="" />
					<link rel="preload" href="/fonts/Lato-Light.ttf" as="font" crossOrigin="" />
					<link rel="preload" href="/fonts/Lato-Bold.ttf" as="font" crossOrigin="" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDoc;
