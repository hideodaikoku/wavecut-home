import React, { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import styles from '../../styles/canvas.module.scss';

import { Bloom, EffectComposer, LUT } from '@react-three/postprocessing'

import Layout from '../../components/layout'
import Header from '../../components/header';
import Controls from './orbitcontrols';


import Torus from './torus';
export const siteTitle = "WaveCut Studios | Home";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="flex flex-col h-screen">
            <Header siteTitle={siteTitle} />
            <Layout>
                <div className="w-full h-full">
                    <Canvas className={styles.canvas}
                        shadows
                        camera={{
                            position: [-6, 7, 7],
                        }}
                    >
                        <ambientLight color={"white"} intensity={0.7} />
                        <Controls />
                        <Torus rotateX={0} rotateY={0.2} scale={20} />
                    </Canvas>

                    <div className='absolute bottom-20 right-10'>
                        <p className='text-4xl'>
                            {time.toLocaleTimeString()}
                        </p>
                    </div>
                </div>

            </Layout>
        </div>
    )
}