import React from 'react';
import Particles from 'react-particles-js';
import particleConfig2 from './particles-config-2';
import '../assets/css/particle.css';

export default function ParticleBackground2() {
    return (
        <Particles className="example" params={particleConfig2} height="125vh" width="100vw"></Particles>
    );
}