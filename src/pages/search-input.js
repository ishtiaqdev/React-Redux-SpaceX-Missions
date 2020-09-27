import React from 'react';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';


export class SearchInput extends React.Component {

  componentDidMount() {
    this.ref.value = this.props.value || '';

    Observable.fromEvent(this.ref, 'keyup')
      .map((e) => e.target.value)
      .debounceTime(500)
      .subscribe((value) => {
        this.props.onSearch(value);
      });
  }

  render() {
    return (
      <input
        type="test"
        className="textbox"
        ref={ref => this.ref = ref}
        placeholder={this.props.placeholder} />
    )
  }
}
