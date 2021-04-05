import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Flight Risk Assesment: Professor Login'
export const siteTitle = 'Flight Risk Assesment Professor Login'

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
		<Head>
		<link rel="icon" href="/favicon.ico" />
		<meta
			name="description"
			content="UNO Professor Login"
		/>

         
			/>
			<meta name="og:title" content={siteTitle} />
			<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
				<>
				
				<h1 className={utilStyles.heading2X1 }>{name}</h1>
				</>
				) : (
				<>
				<Link href="/">
			
				</Link>

			</>
				)}
				</header>
				<main>{children}</main>
					{!home && (
						<div className={styles.backToHome}>
						<Link href="/">
						<a>← Back to home </a>
						</Link>
						</div>
					)}
					</div>
					)
					
}