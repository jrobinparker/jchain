import React from 'react';
import faker from 'faker';

export default function MeetTeam() {
  const randomName1 = faker.name.findName()
  const randomImage1 = faker.internet.avatar()

  const randomName2 = faker.name.findName()
  const randomImage2 = faker.internet.avatar()

  const randomName3 = faker.name.findName()
  const randomImage3 = faker.internet.avatar()

  return (
    <div className="meet-team" id="meet-team">
    <div className="meet-team-content">
      <div className="meet-team-header">
        <h1>meet the team</h1>
        <h4>blockchain experts from across the globe</h4>
      </div>
      <div class="meet-team-photos">
        <div class="team-member">
          <img src={`${randomImage1}`} className="avatar"/>
          <div>{randomName1}</div>
          <div>Director, Blockchain Development</div>
        </div>
        <div class="team-member">
          <img src={`${randomImage2}`} className="avatar"/>
          <div>{randomName2}</div>
          <div>Lead Blockchain Developer</div>
        </div>
        <div class="team-member">
          <img src={`${randomImage3}`} className="avatar"/>
          <div>{randomName3}</div>
          <div>Senior Front-end Developer</div>
        </div>
      </div>
      </div>
    </div>
  )
}
