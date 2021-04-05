import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
	
  return (
  
    <Layout home>
	
	<Head>
	<title>{siteTitle}</title>
	</Head>

	<section className={utilStyles.headingMd}>
	

<form method="post" action= "login">
  <label>
  Username:
  <br />
    <input type="text" name="username" />
  </label>
  <br />
  <label>
  Password:
  </label>
  <br />
  <input type="password" name="password" />
  <br />
  <input type="submit" value="Login" />
</form>

<p>
	{' '}
<a href="https://github.com/mfreilly98/capstone-flight-risk-assesment/tree/master">Back to Homepage</a>
</p>
</section>
</Layout>
)
}