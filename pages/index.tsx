import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Canvas} from "@react-three/fiber";
import React, {Suspense} from "react";
import Wall from "../features/components/wall";
import {Loader} from "../features/components/loader/loader";
import Camera from "../features/components/camera";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Canvas         shadows className={styles.canvas}  dpr={[1, 1.5]}>
            <Suspense fallback={<Loader />}>
              <pointLight           castShadow = { true }
                                    shadow-mapSize-height={517}
                                    shadow-mapSize-width={517} position={[10, 20, 10]} />
              <ambientLight intensity={0.1} position={[10, 10, 10]} />
              <Wall />
              <Camera />
              <gridHelper args={[10, 10]} />
            </Suspense>
          </Canvas>
      </main>
    </div>
  )
}

export default Home
