/**
 * All page rendering
 * 
 * Form the page structure
 * 
 * Just execute on server
 * 
 */

import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class CustomDocument extends Document {
    render() {
        return ( 
            <Html>
                <Head>
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }

}