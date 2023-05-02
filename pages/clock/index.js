import React, { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import styles from '../../styles/canvas.module.scss';
import Layout from '../../components/layout'
import Header from '../../components/header';
import Controls from './orbitcontrols';
import Clock from 'react-live-clock'

import Torus from './torus';
export const siteTitle = "WaveCut Studios | Home";

export default function WaveClock() {
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
                </div>
            </Layout>
        </div>
    )
}