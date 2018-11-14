// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {styled} from '../plugins/styled-components';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';

const Center = styled.div`
  font-family: HelveticaNeue-Light, Arial;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const FusionStyle = styled.div`
  font-size: 80px;
  color: rgba(0,0,0,.8);
  padding-right: 30px;
  display: flex;
`;

const FullHeightDiv = styled.div`
  height: 100%;
  background-color: #FFFFFF;
`;

const Circle = styled.div`
  height: 180px;
  width: 180px;
  margin-top: 20px;
  background-color: white;
  &:hover {
    background-color: #f0f8fa;
  }
  border: 10px solid #4db5d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GettingStartedLink = styled.a`
  text-decoration: none;
  color: #4db5d9;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

type PropsT = {
  getUser: Function,
  user: Object,
};

class Home extends Component<PropsT> {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const {user} = this.props;
    return (
      <FullHeightDiv>
        <style>
          {`
            html,body,#root{height:100%;}
            html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
            body{margin:0;}
            button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
            input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
            `}
        </style>
        <Center>
          <FusionStyle>
            Hi {user ? user.name : 'Fusion User'}!
          </FusionStyle>
          <Center>
            <Circle>
              <GettingStartedLink href="https://fusionjs.com/docs/getting-started">
                Let&apos;s Get Started
              </GettingStartedLink>
            </Circle>
          </Center>
        </Center>
      </FullHeightDiv>
    );
  }
}

export default compose(
  connect((state) => ({user: state.user.data})),
  withRPCRedux('getUser')
)(Home);
