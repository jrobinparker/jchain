import React from 'react';
import faker from 'faker';
import VisibilitySensor from 'react-visibility-sensor';

class MeetTeam extends React.Component {
  state = {
    visible: false
  }

  render() {
  const randomName1 = faker.name.findName()
  const randomImage1 = faker.internet.avatar()

  const randomName2 = faker.name.findName()
  const randomImage2 = faker.internet.avatar()

  const randomName3 = faker.name.findName()
  const randomImage3 = faker.internet.avatar()

  if (this.state.visible) {
    const meetTeam = document.querySelector('.meet-team-photos')
    meetTeam.classList.remove('hidden');
    meetTeam.classList.add('fade-in-up');
  }

  return (
    <div className="meet-team" id="meet-team">
    <div className="meet-team-content">
      <div className="meet-team-header">
        <h1>meet the team</h1>
        <h4>blockchain experts from across the globe</h4>
      </div>
      <VisibilitySensor
        partialVisibility
        onChange={isVisible => {
          this.setState({
            visible: isVisible
          })
        }}>
      <div className="meet-team-photos hidden">
        <div className="team-member">
          <img src={`${randomImage1}`} className="avatar" alt="team-member-1" />
          <div>{randomName1}</div>
          <div>Director, Blockchain Development</div>
        </div>
        <div className="team-member">
          <img src={`${randomImage2}`} className="avatar" alt="team-member-2" />
          <div>{randomName2}</div>
          <div>Lead Blockchain Developer</div>
        </div>
        <div className="team-member">
          <img src={`${randomImage3}`} className="avatar" alt="team-member-3" />
          <div>{randomName3}</div>
          <div>Senior Front-end Developer</div>
        </div>
      </div>
      </VisibilitySensor>
      </div>
    </div>
  )
}}

export default MeetTeam
