// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Button = styled.button`
  background-color: red;
  color:white;
  border: 1px solid #000;
  padding:8px;
  margin-top:15px;
`

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 style={{ color: 'red' }}>Hello World</h1>

      <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in cumque blanditiis harum unde rerum temporibus a minima, voluptatum eos quos iure adipisci dolore laudantium sequi molestias. Ipsam, voluptatibus et?</p>
      <style jsx>
        {`
        .desc{
          background-color:yellow;
        }
        `}
      </style>
      <img src="/images/img.jpg" alt="" width="200" />

      <Button>Submit</Button>
    </div>
  )
}
