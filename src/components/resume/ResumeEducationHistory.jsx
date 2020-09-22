import React, { Fragment } from 'react';
// import PropTypes from 'prop-types'
import { Item, Label, Divider, Header, Icon } from 'semantic-ui-react';

const headerItemStyle = { color: '#333', marginBottom: '5px', fontWeight: '400' }

const ResumeEducationHistory = () => {
  return (
    <Fragment>
      <Divider horizontal style={{ marginTop: '0px' }}>
        <Header size='tiny' color='grey'>
          <Icon name='graduation cap' color='grey' />
          Educations History
        </Header>
      </Divider>
      <Item.Group style={{ padding: '0px 40px' }}>
        {/*Education Item*/}
        <Item style={{ marginBottom: '0px' }}>
          <Item.Image src='/images/uopeople-logo.jpg' avatar size='cv-history-item' />
          <Item.Content>
            <Item.Meta>
              <Item.Header as='h3' style={headerItemStyle}>
                University of the People, Computer Science
              </Item.Header>
              <span>May 2020 - Currently</span>
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item style={{ marginTop: '12px', paddingLeft: '15px' }}>
          I am currently a student at UoPeople an online accredited American university.
          This Computer Science degree is providing me solid fundamentals of computing in areas
          such as algorithms, mathematics, data structures, networks, web programming, databases,
          artificial intelligence, data mining, software engineering, and cybersecurity.
        </Item>
        {/*Education Item*/}
        <Item style={{ marginBottom: '0px' }}>
          <Item.Image src='/images/unam-logo.jpg' avatar size='cv-history-item' />
          <Item.Content>
            <Item.Meta>
              <Item.Header as='h3' style={headerItemStyle}>
                UNAM, Electrical and Electronic Engineering
              </Item.Header>
              <span>Aug 2010 - Jul 2016</span>
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item style={{ marginTop: '12px', paddingLeft: '15px' }}>
          As an Engineering student, I learned how to design and analyze electrical and electronic systems,
          the topics covered by were digital systems, analogic systems, telecommunications circuits,
          microcontrollers programming, and systems programming basis.
        </Item>
        {/*Certifications Section*/}
        <Divider horizontal>
          <Header size='tiny' color='grey'>
            Languages
          </Header>
        </Divider>
        <Item style={{ textAlign: 'center' }}>
          <Item.Content>
            <Label size='medium' content='Spanish' detail='Native speaker'  style={{ margin: '3px' }} />
            <Label size='medium' content='English' detail='Upper-intermediate level'  style={{ margin: '3px' }} />
          </Item.Content>
        </Item>
        {/*Technologies Section*/}
        <Divider horizontal>
          <Header size='tiny' color='grey'>
            Technologies
          </Header>
        </Divider>
        <Item style={{ textAlign: 'center' }}>
          <Item.Content>
            <Label size='small' content='React'  style={{ margin: '3px' }} />
            <Label size='small' content='Redux'  style={{ margin: '3px' }} />
            <Label size='small' content='RxJS'  style={{ margin: '3px' }} />
            <Label size='small' content='WebPack'  style={{ margin: '3px' }} />
            <Label size='small' content='Web Components'  style={{ margin: '3px' }} />
            <Label size='small' content='CSS'  style={{ margin: '3px' }} />
            <Label size='small' content='SASS'  style={{ margin: '3px' }} />
            <Label size='small' content='NodeJS'  style={{ margin: '3px' }} />
            <Label size='small' content='ExpressJS'  style={{ margin: '3px' }} />
            <Label size='small' content='MongoDB'  style={{ margin: '3px' }} />
            <Label size='small' content='Django'  style={{ margin: '3px' }} />
            <Label size='small' content='MySQL'  style={{ margin: '3px' }} />
            <Label size='small' content='Jenkins'  style={{ margin: '3px' }} />
            <Label size='small' content='Agile Methodologies'  style={{ margin: '3px' }} />
            <Label size='small' content='Lit Elements'  style={{ margin: '3px' }} />
            <Label size='small' content='Polymer'  style={{ margin: '3px' }} />
            <Label size='small' content='HTML'  style={{ margin: '3px' }} />
            <Label size='small' content='CSS frameworks'  style={{ margin: '3px' }} />
          </Item.Content>
        </Item>
      </Item.Group>
    </Fragment>
  )
}

// ResumeEducationHistory.propTypes = {}

export default ResumeEducationHistory
