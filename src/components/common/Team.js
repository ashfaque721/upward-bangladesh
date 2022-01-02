import React, { Component } from 'react'
import TeamMembers from './TeamMembers'
import ushan from '../assets/img/team/ushan.jpg'
import nishat from '../assets/img/team/nishat.jpg'
import ritovash from '../assets/img/team/ritovash.jpg'
import shemonti from '../assets/img/team/rodoshi.jpg'
import chittra from '../assets/img/team/chittra.jpg'
import eshan from '../assets/img/team/eshan.jpg'
import ahanaf from '../assets/img/team/ahanaf.jpg'
import zunayed from '../assets/img/team/zunayed.jpg'
import shoshi from '../assets/img/team/shoshi.jpg'
import safa from '../assets/img/team/safa.jpg'
import junayna from '../assets/img/team/junayna.jpg'
import ekush from '../assets/img/team/ekush.jpg'

const teamMembers = [
  {
    name: 'Tanzim Islam Ushan',
    designation: 'Team Leader',
    image: ushan,
    fb: 'https://www.facebook.com/TanzimIslamUshan',
    linked: 'https://www.linkedin.com/in/ushanislam/',
  },
  {
    name: 'Nishat Rahman',
    designation: 'Chief of Communications',
    image: nishat,
    fb: 'https://www.facebook.com/profile.php?id=100025980212172',
    linked: '',
  },
  {
    name: 'Shuhaiba Sharif Shoshi',
    designation: 'Chief of Content Development',
    image: shoshi,
    fb: 'https://www.facebook.com/shuhaibasharif.shoshi',
    linked: 'https://www.linkedin.com/in/shuhaiba-shoshi-270467211',
  },
  {
    name: 'Ahanaful Alam',
    designation: 'Chief of Operations',
    image: ahanaf,
    fb: 'https://www.facebook.com/ahanaful.alam',
    linked: 'https://www.linkedin.com/in/md-ahanaful-alam-84697421a/',
  },
  {
    name: 'Ritovash Chanda',
    designation: 'Chief of Creations',
    image: ritovash,
    fb: 'https://www.facebook.com/ritovashch',
    linked: 'https://www.linkedin.com/in/ritovash-chanda-4a7765219',
  },
  {
    name: 'Shemonti Rodosi',
    designation: 'Chief of Content Creations',
    image: shemonti,
    fb: 'https://www.facebook.com/shemonti.rodosi.5',
    linked: '',
  },
  {
    name: 'Amatul Hakim Safa',
    designation: 'Public Relations Co-Ordinator',
    image: safa,
    fb: 'https://www.facebook.com/amatul.hakim.safa',
    linked: '',
  },
  {
    name: 'Tasfia Hoque Chittra',
    designation: 'Chief of Public Relations',
    image: chittra,
    fb: 'https://www.facebook.com/hoque.chittu',
    linked: '',
  },
  {
    name: 'Ashfaque Amin Eshan',
    designation: 'Networking Operations Co-Ordinator',
    image: eshan,
    fb: 'https://www.facebook.com/ashfaqueamin.eshan',
    linked:
      'https://www.linkedin.com/in/ashfaque-amin-eshan-b1683921a/',
  },
  {
    name: 'MD Zunayed Howladar',
    designation: 'Video Creations Co-Ordinator',
    image: zunayed,
    fb: 'https://facebook.com/md.zunayedhowlader.9',
    linked:
      'https://www.linkedin.com/in/md-zunayed-howlader-7bb035211/',
  },
  {
    name: 'Junayna Tahseen',
    designation: 'Administrations Co-Ordinator',
    image: junayna,
    fb: 'https://www.facebook.com/junayna.tahseen',
    linked: '',
  },
  {
    name: 'Tahsan Ekush',
    designation: 'E-Creations Co-Ordinator',
    image: ekush,
    fb: 'https://www.facebook.com/tanzintahsanekush',
    linked: '',
  },
]

class Team extends Component {
  render() {
    return (
      <section className='page-section bg-light' id='team'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>
              Our Team
            </h2>
            <h3 className='section-subheading text-muted'>
              Team Members
            </h3>
          </div>
          <div className='row'>
            {teamMembers.map((member, index) => {
              return <TeamMembers {...member} key={index} />
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Team
