import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from './particles-config';
import '../assets/css/particle.css';

export default function ParticleBackground() {
    return (
        <Particles className="example" params={particleConfig}></Particles>
    );
}