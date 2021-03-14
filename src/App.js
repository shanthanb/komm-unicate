import React from 'react';
import './App.scss';
import Pagination from './components/Pagination';
import SearchBox from './components/SearchBox';
import _,{ debounce } from "lodash";
import Form from './components/Form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      per_page: 4,current_page: 1,masterUsersData: [],usersData: [],searchValue: '',total_pages: 0,
    }
  }

  componentDidMount() {
    this.makeAPIReq();
  }

  
  makeAPIReq = () => {
    const { current_page, per_page } = this.state;
    fetch(`https://reqres.in/api/users?page=${current_page}&per_page=${per_page}`)
      .then(res => res.json())
      .then(result => this.setState({ usersData: result.data, masterUsersData: result.data, total_pages: result.total_pages }));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.current_page !== this.state.current_page) {
      this.makeAPIReq();
    }
  }

  filterUsers = debounce(val => {
    console.log(val)
    const { masterUsersData } = this.state;
    const localUsersData = [...masterUsersData];
    const filteredArray = localUsersData.filter(user => (user.first_name).toLowerCase().includes(val.toLowerCase()) || (user.last_name).toLowerCase().includes(val.toLowerCase()));
    this.setState({ usersData: filteredArray });
    
    if (val === '') {
      this.makeAPIReq();
    }
  }, 10)

  onSearch = value => {
    this.filterUsers(value);
  }

  render() {
    const { usersData, current_page, total_pages } = this.state;

    if (usersData) {
      return (
        <div className="container">
          <div className="formtable">
            <div className="table">
              <div className="filters">
                <SearchBox ChangeValue={searchValue => this.onSearch(searchValue)} />
                <Pagination
                  total_pages={total_pages}
                  current_page={current_page}
                  changePage={current_page => this.setState({ current_page })}
                />
              </div>
              <Form usersData={usersData} />
            </div>
          </div>
        </div>
      )
    }
    return <div>loading</div>
  }
}

export default App;
