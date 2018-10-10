import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'argon-m2/assets/scss/argon.scss';
import "./layout.scss";

library.add(fab, fas)


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" />
        </Helmet>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet"/>
        {children}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" />
        <script src="./assets/js/argon.min.js"/>
      </div>
    );
  }
}