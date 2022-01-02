import React, { Component } from 'react'

class TeamMembers extends Component {
  render() {
    return (
      <div className='col-lg-4'>
        <div className='team-member'>
          <img
            className='mx-auto rounded-circle'
            style={{
              height: '250px',
              width: '250px',
              border: '5px solid gray',
            }}
            src={this.props.image}
            alt={this.props.name}
          />
          <h4>{this.props.name}</h4>
          <p className='text-muted'>{this.props.designation}</p>
          {this.props.fb ? (
            <a
              className='btn btn-dark btn-social mx-2'
              href={this.props.fb}
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-facebook-f'></i>
            </a>
          ) : (
            ''
          )}
          {this.props.linked ? (
            <a
              className='btn btn-dark btn-social mx-2'
              href={this.props.linked}
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default TeamMembers
