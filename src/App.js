import React from 'react';
import { transform } from 'babel-standalone';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: '',
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: transform(code, {
          presets: ["es2015", "stage-0", "react"],
        }).code,
        err: '',
      });
    } catch (err) {
      this.setState({ err: err.message });

    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}
          ></textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    );
  }
};

export default App;
