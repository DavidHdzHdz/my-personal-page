import React from 'react';
// import PropTypes from 'prop-types'
import { Item, Divider, Header, Icon } from 'semantic-ui-react';

const headerItemStyle = { color: '#333', marginBottom: '5px', fontWeight: '400' }

const ResumeWorkHistory = () => {
  return (
    <Item.Group>
      <Divider horizontal>
        <Header size='tiny' color='grey'>
          <Icon name='code' color='grey' />
          Work History
        </Header>
      </Divider>
      {/*** Item ***/}
      <Item style={{ marginBottom: '0px' }}>
        <Item.Image src='/images/bbva-logo.jpeg' avatar size='cv-history-item' />
        <Item.Content>
          <Item.Meta>
            <Item.Header as='h3' style={headerItemStyle}>
              BBVA - Software Engineer
            </Item.Header>
            <span>Apr 2016 - Currently</span>
          </Item.Meta>
        </Item.Content>
      </Item>
      <Item style={{ marginTop: '12px', paddingLeft: '15px' }}>
          I've involved in many project related to banking such as invesments dashboards,
          transfers, payments,
      </Item>
      {/*** Item ***/}
      <Item style={{ marginBottom: '0px' }}>
        <Item.Image src='/images/bbva-logo.jpeg' avatar size='cv-history-item' />
        <Item.Content>
          <Item.Meta>
            <Item.Header as='h3' style={headerItemStyle}>
              Softtek - Software Engineer
            </Item.Header>
            <span>Apr 2016 - Currently</span>
          </Item.Meta>
        </Item.Content>
      </Item>
      <Item style={{ marginTop: '12px', paddingLeft: '15px' }}>
          I've involved in many project related to banking such as trtrtr datrt, trttrt
          transfers, payments, rtrtrt
      </Item>
      {/*** Item ***/}
      <Item style={{ marginBottom: '0px' }}>
        <Item.Image src='/images/bbva-logo.jpeg' avatar size='cv-history-item' />
        <Item.Content>
          <Item.Meta>
            <Item.Header as='h3' style={headerItemStyle}>
              On Target - Web Developer
            </Item.Header>
            <span>Apr 2016 - Currently</span>
          </Item.Meta>
        </Item.Content>
      </Item>
      <Item style={{ marginTop: '12px', paddingLeft: '15px' }}>
          I've involved in many project related to banking such as invesments dashboards,
          transfers, payments,
      </Item>
      {/*** Item ***/}
      <Item style={{ marginBottom: '0px' }}>
        <Item.Image src='/images/bbva-logo.jpeg' avatar size='cv-history-item' />
        <Item.Content>
          <Item.Meta>
            <Item.Header as='h3' style={headerItemStyle}>
              COBREC - IT assistant
            </Item.Header>
            <span>Apr 2016 - Currently</span>
          </Item.Meta>
        </Item.Content>
      </Item>
      <Item style={{ marginTop: '12px', paddingLeft: '15px' }}>
          I've involved in many project related to banking such as invesments dashboards,
          transfers, payments,
      </Item>
    </Item.Group>
  )
}

// ResumeWorkHistory.propTypes = {}

export default ResumeWorkHistory
