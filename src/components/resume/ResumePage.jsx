import React, { createRef, Fragment } from 'react';
import ReactToPrint from "react-to-print";
import ResumeContainer from './ResumeContainer';
//import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react';

const ResumePage = () => {
  const resumeRef = createRef();

  return (
    <Fragment>
      <div style={{
        display: 'flex', justifyContent: 'flex-end', paddingRight: '12px', float: 'right'
      }}>
        <ReactToPrint
          trigger={() => (
            <Button color='blue' animated='vertical' size='mini'>
              <Button.Content hidden>Download</Button.Content>
              <Button.Content visible>
                <Icon name='download' size='large'/>
              </Button.Content>
            </Button>
          )}
          content={() => resumeRef.current}
        />
      </div>
      <ResumeContainer ref={resumeRef} style={{ marginTop: '30px' }} />
    </Fragment>
  )
}

// ResumePage.propTypes = { }

export default ResumePage;