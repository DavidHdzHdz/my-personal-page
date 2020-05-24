import React from 'react';
//import PropTypes from 'prop-types'
import { Segment, Item, Label, Divider, Icon, Header, List, Button } from 'semantic-ui-react';

const ResumeHeader = () => {
  return (
    <Segment raised>
      <Item.Group>
        <Item style={{ marginBottom: '0px', padding: '0% 3%' }}>
          <Item.Image  src='/images/cv-avatar-image.png' size='cv-photo' />
          <Item.Content>
            <Item.Extra>
              <Header as='h3' style={{ color: '#333' }}>David Hernandez Hernandez</Header>
              <Item.Meta>
                <Label style={{background: '#FAF46A', fontStyle: 'italic'}}>
                  Web Developer - JS<span style={{ color: '#FAF46A' }}>_</span>specialist
                </Label>
              </Item.Meta>
            </Item.Extra>
          </Item.Content>
          <Item.Content>
            <Item.Extra>
              <List horizontal >
                <List.Item><Label size='small' icon='mail' content='davidhhw24@gmail.com' /></List.Item>
                <List.Item><Label size='small' icon='phone' content='5571222205' /></List.Item>
              </List>
              <div/>
              <List horizontal>
                <List.Item>
                  <Button
                    as='a'
                    href='https://www.linkedin.com/in/developer-david/'
                    target='_blank'
                    circular color='linkedin'
                    icon='linkedin'
                    size='small'
                  />
                </List.Item>
                <List.Item>
                  <Button
                    as='a'
                    href='https://github.com/DavidHdzHdz'
                    target='_blank'
                    circular
                    color='black'
                    icon='github'
                    size='small'
                  />
                </List.Item>
                <List.Item>
                  <Button
                    as='a'
                    href='https://www.google.com/maps/place/Mariano+Escobedo,+Ciudad+de+M%C3%A9xico,+CDMX/@19.445075,-99.1826692,16.62z/data=!4m5!3m4!1s0x85d1f8a51eb014a9:0x9f841265c4ecb5c4!8m2!3d19.4446183!4d-99.1812529'
                    target='_blank'
                    circular
                    color='red'
                    icon='map marker alternate'
                    size='small'
                  />
                </List.Item>
              </List>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item style={{ marginTop: '0px', padding: '0% 3%' }}>
          <Item.Content>
            <Item.Description style={{ marginTop: '0px', color: '#345' }}>
              <Divider horizontal>
                <Header size='tiny' color='grey'>
                  <Icon name='pencil alternate' color='grey' />
                  About Me
                </Header>
              </Divider>
              I am a Programmer specialized in web development,
              I am focused on how things should be built
              by analyzing the best patterns and tools to solve a problem,
              lover of quality and performance,
              I am Javascript specialist proficient
              in technologies such as React, Redux, WebComponents, NodeJS,
              MongoDB, CSS, HTML, CSS frameworks {'&'} precompilers among others,
              I  am positive, motivated, self-taught, passionate,
              creative and with a huge willingness to improve and build amazing things.
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  )
}

// ResumeHeader.propTypes = {}

export default ResumeHeader;
