import React from 'react';
// import PropTypes from 'prop-types'
import { Item, Divider, Header, Icon } from 'semantic-ui-react';

const headerItemStyle = { color: '#333', marginBottom: '5px', fontWeight: '400' }
const descriptionItemStyle = { marginTop: '12px', paddingLeft: '15px' }

const ResumeWorkHistory = () => {
  return (
    <Item.Group>
      <Divider horizontal style={{ marginTop: '0px' }}>
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
            <span>Jun 2018 - Currently</span>
          </Item.Meta>
        </Item.Content>
      </Item>
      <Item style={descriptionItemStyle}>
        I have involved in many projects related to banking such as investments,
        transfers, payments, credits, among other services.
      </Item>
      {/*** Item ***/}
      <Item style={{ marginBottom: '0px' }}>
        <Item.Image src='/images/softtek.jpeg' avatar size='cv-history-item' />
        <Item.Content>
          <Item.Meta>
            <Item.Header as='h3' style={headerItemStyle}>
              Softtek - Software Engineer
            </Item.Header>
            <span>Apr 2018 - Currently</span>
          </Item.Meta>
        </Item.Content>
      </Item>
      <Item style={descriptionItemStyle}>
        I have developed many features to our client BBVA and also I have prepared
        new programmers in JS' modern features at the Softtek academy.
      </Item>
      {/*** Item ***/}
      <Item style={{ marginBottom: '0px' }}>
        <Item.Image src='/images/on-target-logo.jpeg' avatar size='cv-history-item' />
        <Item.Content>
          <Item.Meta>
            <Item.Header as='h3' style={headerItemStyle}>
              On Target - Web Developer
            </Item.Header>
            <span>Apr 2017 - Apr 2018</span>
          </Item.Meta>
        </Item.Content>
      </Item>
      <Item style={descriptionItemStyle}>
        As I worked at On-target I was involved in market research projects doing data analysis,
        database administration and web programming.
      </Item>
      {/*** Item ***/}
      <Item style={{ marginBottom: '0px' }}>
        <Item.Image src='/images/cobrec-logo.png' avatar size='cv-history-item' />
        <Item.Content>
          <Item.Meta>
            <Item.Header as='h3' style={headerItemStyle}>
              COBREC - IT assistant
            </Item.Header>
            <span>Dec 2016 - Mar 2017</span>
          </Item.Meta>
        </Item.Content>
      </Item>
      <Item style={descriptionItemStyle}>
          As an IT assistant, I had the responsibility to help in the
          LAN network administration, linux servers administration, and web Development.
      </Item>
    </Item.Group>
  )
}

// ResumeWorkHistory.propTypes = {}

export default ResumeWorkHistory
