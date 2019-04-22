import React, { Component } from "react";
import fetchCalendar from "../src/services/api/calendar";
import kbvApiUrls from "../src/config/api/kbvb_graphql";

// Alle kalenderpaginas zullen deze pagina gebruiken

class componentName extends Component {
  componentDidMount() {}

  render() {
    fetchCalendar(kbvApiUrls[this.props.query.team].ranking.url).then(data => {
      console.log(data);
    });
    console.log(this.props.query);
    // JSON data aan CalendarComponent geven
    return <div />;
  }
}

componentName.getInitialProps = ({ query }) => {
  return { query };
};

export default componentName;
