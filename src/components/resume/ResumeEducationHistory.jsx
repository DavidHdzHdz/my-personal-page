import React from 'react';
// import PropTypes from 'prop-types'
import { Item, Label, Divider, Header, Icon } from 'semantic-ui-react';

const ResumeEducationHistory = () => {
  return (
    <Item.Group>
      <Divider horizontal>
        <Header size='tiny' color='grey'>
          <Icon name='graduation cap' color='grey' />
          Educations History
        </Header>
      </Divider>
      <Item>
        <Item.Image src='/images/bbva-logo.jpeg' avatar size='tiny' />
        <Item.Content>
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          <Item.Meta>
            <span className='cinema'>Union Square 14</span>
          </Item.Meta>
          <Item.Description>
            rferfreferferferfrefrefeferfefre
          </Item.Description>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon='globe' content='Additional Languages' />
          </Item.Extra>
        </Item.Content>
      </Item>
      <Item>
        <Item.Image src='/images/bbva-logo.jpeg' avatar size='tiny' />
        <Item.Content>
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          <Item.Meta>
            <span className='cinema'>Union Square 14</span>
          </Item.Meta>
          <Item.Description>
            rferfreferferferfrefrefeferfefre
          </Item.Description>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon='globe' content='Additional Languages' />
          </Item.Extra>
        </Item.Content>
      </Item>
      <Divider horizontal>
        <Header size='tiny' color='grey'>
          Certifications {'&'} Courses
        </Header>
      </Divider>
      <Item style={{ textAlign: 'center' }}>
        <Item.Content>
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          <Item.Meta>
            <span className='cinema'>Union Square 14</span>
          </Item.Meta>
          <Item.Description>
            rferfreferferferfrefrefeferfefre
          </Item.Description>
        </Item.Content>
      </Item>
      <Item style={{ textAlign: 'center' }}>
        <Item.Content>
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          <Item.Meta>
            <span className='cinema'>Union Square 14</span>
          </Item.Meta>
          <Item.Description>
            rferfreferferferfrefrefeferfefre
          </Item.Description>
        </Item.Content>
      </Item>
      <Item style={{ textAlign: 'center' }}>
        <Item.Content>
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          <Item.Meta>
            <span className='cinema'>Union Square 14</span>
          </Item.Meta>
          <Item.Description>
            rferfreferferferfrefrefeferfefre
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

// ResumeEducationHistory.propTypes = {}

export default ResumeEducationHistory
