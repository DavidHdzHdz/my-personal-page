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
      <Grid stackable columns={3}>
        <Grid.Column>
          Skill 1 <Progress percent={65} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Skill 2 <Progress percent={80} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Skill 2 <Progress percent={90} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Skill 4 <Progress percent={60} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Skill 5 <Progress percent={50} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
        <Grid.Column>
          Skill 6 <Progress percent={100} color='cv-progres-color' size='tiny'/>
        </Grid.Column>
      </Grid>
    </Fragment>
  )
}

// ResumeSkills.propTypes = {}

export default ResumeSkills
