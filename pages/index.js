import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "./components/layout";
export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>DogeBlog, all about Doge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
          <h1 className="title">DogeBlog</h1>
          <p className="subtitle">Wow!</p>
          <Image
            src="/images/dogetitle.jpg" 
            height={144} // Desired size with correct aspect ratio
            width={204} // Desired size with correct aspect ratio
          ></Image>
          <Link href="/posts">
            <a className="subtitle">See posts</a>
          </Link>
       

        <footer className="footer">Powered by pure meme energy</footer>

        <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
            flex-direction: column;
           
            align-items: center;
        }
          .title {
            color: white;
          }
.subtitle {
  color: white;
  font-weight: bolder;
  font-size: 2rem;
  
}
          
.footer {
  text-align:center;
  font-size:1rem;
  font-weight: bolder;
  bottom: 0;
  position: fixed;
}
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
              
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </Layout>
  );
}
