import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from './components/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
        <title>First Post</title> {/* controls title */}
      </Head><Link href="/" >Back gome</Link> 
      <p className="center">AAAAAAAAAAAAAA</p>
      <br /><Image
    src="/images/doge.jpg" // Route of the image file
    height={500} // Desired size with correct aspect ratio
    width={1000} // Desired size with correct aspect ratio
    alt="Your Name"
  />
  </Layout>
  }
 