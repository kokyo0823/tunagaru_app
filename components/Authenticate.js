import { Component } from "react";
import Router, { useRouter } from 'next/router'
import { auth } from '../utils/firebase'

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: ""
    }
  };
  // const router = useRouter()

  render() {
    const { isLogin } = this.state;
    if (isLogin === "") {
      return (
        <>
          <p>kokyo</p>
        </>
      )
    } else {
      return (
        <>
          {this.props.children}
        </>
      )
    }
  }
}

export default Authenticate
