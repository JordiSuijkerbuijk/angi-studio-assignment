import Head from 'next/head'
import Image from 'next/image'

import Todo from '../sections/todo/Todo'
import UsefulLinks from '../sections/useful_links/UsefulLinks'

import logo from '../public/images/logo.png'
import stockImage from '../public/images/stockImage.png'

import cardLinkArray from '../public/data/cardLinks.json'

import style from '../styles/index.module.scss'

export default function Home() {
  const cardTitle = "ReactJS Development";
  const cardDescription = "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently…";
  const cardLink = "https://www.google.com";

  return (
    <div className={style.container}>
      <Head>
        <title>Angi studio assignment</title>
        <meta name="description" content="Angi studio assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        <div className={style.logo}>
          <Image src={logo} alt="Logo of Angi studio" />
        </div>
        <div className={style.header}>
          <h1 className={style.title}>
            Job application
          </h1>
          <p className={style.description}>
            This to-do list contains the tasks I need to complete so I can apply to a job well prepared.
          </p>
        </div>
        <Todo /> 
        <UsefulLinks image={stockImage} title={cardTitle} description={cardDescription} link={cardLink} linkArray={cardLinkArray}/>
      </main>
    </div>
  )
}
