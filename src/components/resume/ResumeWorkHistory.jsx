import React, {Fragment} from 'react';
// import PropTypes from 'prop-types'
import { Item, Divider, Header, Icon } from 'semantic-ui-react';

const headerItemStyle = { color: '#333', marginBottom: '5px', fontWeight: '400' }
const descriptionItemStyle = { marginTop: '12px', paddingLeft: '15px' }

const ResumeWorkHistory = () => {
  return (
    <Fragment>
      <Divider horizontal style={{ marginTop: '0px', marginBottom: '0px' }}>
        <Header size='tiny' color='grey'>
          <Icon name='code' color='grey' />
          Work History
        </Header>
      </Divider>
      <Item.Group style={{ padding: '0px 40px' }}>
        {/*** Item ***/}
        <Item style={{ marginBottom: '25px' }}>
          <Item.Image src='/images/bbva-logo.jpeg' avatar size='cv-history-item' />
          <Item.Content>
            <Item.Meta>
              <Item.Header as='h3' style={headerItemStyle}>
                BBVA - Software Engineer
              </Item.Header>
              <span>Jun 2018 - Sep 2020</span>
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item style={descriptionItemStyle}>
          <p>
            As a Software Engineer at BBVA I have been involved in many banking web projects such as
            investment dashboards, bank transfers, services payments, insurance contracting,
            cash movements consulting among others.<br /><br />

            I am most focused on Frontend development and occasionally in backend
            using the following technologies:<br/>
            Webpack, React, Redux, Web Components, NodeJS, CSS, HTML, SASS, Lit Elements, Polymer,
            SQL, Jenkins, Jira, and Agile Methodologies to build scalable, efficient,
            and maintainable Web Apps.
          </p>
        </Item>
        {/*** Item ***/}
        <Item style={{ marginBottom: '25px' }}>
          <Item.Image src='/images/softtek.jpeg' avatar size='cv-history-item' />
          <Item.Content>
            <Item.Meta>
              <Item.Header as='h3' style={headerItemStyle}>
                Softtek - Software Engineer
              </Item.Header>
              <span>Apr 2018 - Sep 2020</span>
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item style={descriptionItemStyle}>
        As a Software Engineer at Softtek, my principal role is as Javascript Expert,
          I have been working most of the time to our client BBVA involved in many banking projects
          and as a teacher at Softtek Academy to give Junior Engineers the knowledge to face big frontend
          developments using modern JS technologies such as Web Components, ES6, Asynchronous,
          Functional Design Patterns, among others.<br /><br />

          The technologies I have used are:
          Webpack, React, Redux, Web Components, NodeJS, CSS, HTML, SASS, Lit Elements, Polymer,
          SQL, Jenkins, Jira, and Agile Methodologies to build scalable, efficient,
          and maintainable Web Apps.
        </Item>
        {/*** Item ***/}
        <Item style={{ marginBottom: '25px' }}>
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
          As I worked at On-target I was involved in market research projects developing
          web-apps focused to collect data from users such as forms, drag and drops, and discussion forums.
          I was focused on full-stack development and data analysis of the information collected.<br /><br />

          The technologies I used were: MySQL, PHP, CodeIgniter, Node, Angular1, JQuery, Bootstrap,
          CSS, Javascript, Python, Linux Servers, Apache Server, SPSS, and HTML.
        </Item>
        {/*** Item ***/}
        <Item style={{ marginBottom: '0px', marginTop: '120px', paddingTop: '40px' }}>
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
            As an IT assistant I was involved on all activities of the IT department
            such as Networks maintenance, Switching and Routing programming, Computers Maintenance,
            Web Developments, and Linux servers adionistration.

            I proposed to build and web app to manage the staff and retail of the company,
            that was my fisrt big project I made, and my gateway to get a Job as a Web Develper.
        </Item>
      </Item.Group>
    </Fragment>
  )
}

// ResumeWorkHistory.propTypes = {}

export default ResumeWorkHistory
