import React, { Component } from "react";
import PropTypes from "prop-types";

import Tab from "./Tab";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    wrapperClassName: PropTypes.string,
    tabListClassName: PropTypes.string,
    tabContentClassName: PropTypes.string
  };

  constructor(props) {
    super(props);
    const { children } = this.props;

    this.state = {
      activeTab: children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: {
        children,
        wrapperClassName,
        tabListClassName,
        tabContentClassName
      },
      state: { activeTab }
    } = this;

    return (
      <div className={`tabs ${wrapperClassName}`}>
        <ol className={`tab-list ${tabListClassName}`}>
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className={`tab-content ${tabContentClassName}`}>
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  wrapperClassName: "",
  tabListClassName: "",
  tabContentClassName: ""
};

export default Tabs;
