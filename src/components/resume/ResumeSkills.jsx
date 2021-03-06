import React, { Fragment } from 'react';
// import PropTypes from 'prop-types'
import { Grid, Divider, Header, Progress } from 'semantic-ui-react';

const ResumeSkills = () => {
  return (
    <Fragment>
      <Divider horizontal style={{paddingTop: '10px'}}>
        <Header size='tiny' color='grey'>
          Skills
        </Header>
      </Divider>
      <Grid stackable columns={3} style={{ padding: '35px 40px 75px 40px' }}>
        <Grid.Column>
          Frontend
          <Progress percent={90} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Backend
          <Progress percent={50} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Problem Solving
          <Progress percent={80} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Software Architecture
          <Progress percent={75} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Soft skills
          <Progress percent={75} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Creativity
          <Progress percent={100} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Team Working
          <Progress percent={80} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          LeaderShip
          <Progress percent={70} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Self-taught learning
          <Progress percent={85} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
      </Grid>
    </Fragment>
  )
}

// ResumeSkills.propTypes = {}

export default ResumeSkills
