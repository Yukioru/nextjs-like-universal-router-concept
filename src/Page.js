import React from 'react';

class Page {
  state = {};

  constructor(...args) {
    this.init(...args);
  }

  async init(props = {}) {
    this.state = {};
    Object.assign(this, props);
  }

  async component(...args) {
    const result = await args[0];
    if (result.default) {
      args[0] = result.default;
    } else {
      args[0] = result;
    }
    if (args.length > 1) {
      this.state.component = args;
    } else {
      this.state.component = args[0];
    }
    return this;
  }

  renderComponent() {
    if (!Array.isArray(this.state.component)) {
      return this.state.component;
    }
    return React.createElement(this.state.component[0], (this.state.component[1] || {}));
  }

  renderLayout(props = {}, layout = null) {
    if (!this.state.layout && !layout) {
      return props.children;
    }
    let Layout;
    if (layout) {
      Layout = layout;
    } else {
      Layout = this.state.layout;
    }

    return <Layout {...props} />;
  }

  renderComponentWithLayout() {
    let children = this.renderComponent();
    if (typeof children === 'undefined') {
      if (process.env.NODE_ENV === 'development') {
        children = '@undefined';
      } else {
        children = '';
      }
    }

    return this.renderLayout({
      children,
    });
  }

  render() {
    const children = this.renderComponentWithLayout();
    return children;
  }
}

export default Page;
