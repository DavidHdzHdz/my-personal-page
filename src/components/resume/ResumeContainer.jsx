import React, { Fragment } from 'react';
//import { PropTypes } from 'prop-types';
import ResumeHeader from './ResumeHeader';
import { Grid } from 'semantic-ui-react';
import ResumeWorkHistory from './ResumeWorkHistory';
import ResumeEducationHistory from './ResumeEducationHistory';
import ResumeSkills from './ResumeSkills';

const Resume = () => {
  return (
    <Fragment>
      <ResumeHeader />
      <Grid style={{marginTop: '10px'}} stackable columns={1} >
        <Grid.Column>
            <ResumeWorkHistory />
        </Grid.Column>
        <Grid.Column>
          <ResumeEducationHistory />
        </Grid.Column>
      </Grid>
      <ResumeSkills />
    </Fragment>
  )
}

class ResumeContainer extends React.Component {
  render() {
    return (
      <div className='resume-container'>
        <Resume />
      </div>
    )
  }
}

//ResumeContainer.propTypes = {}

export default ResumeContainer;
