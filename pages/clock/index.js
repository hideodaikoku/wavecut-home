import Header from '../../components/header';
import { Canvas } from "@react-three/fiber";
import Layout from '../../components/layout'

export const siteTitle = "WaveCut Studios | Home";

export default function Clock() {
    return (
        <div className="flex flex-col h-screen">
            <Header siteTitle={siteTitle} />
            <Layout>
                <div className="w-full h-full">
                <Canvas
                    shadows
                    camera={{
                        position: [-6, 7, 7],
                    }}
                >

                </Canvas>
                </div>
                
            </Layout>
        </div>
    )
}