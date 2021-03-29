import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;
const noop = () => {};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
  onLogin: noop,
  onLogout: noop,
  onCreateAccount: noop,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  onLogin: noop,
  onLogout: noop,
  onCreateAccount: noop,
};
