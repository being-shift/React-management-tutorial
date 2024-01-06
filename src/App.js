import React,{Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers=[
	{
	  name:'홍길동',
	  id: 1,
	  birthday: '2023-02-15',
	  gender: '남자',
	  job: '대학생',
	  image: 'http://unsplash.it/100/100/?random'
	},
	{
	  name:'김철수',
	  id: 2,
	  birthday: '2023-04-21',
	  gender: '남자',
	  job: '군인',
	  image: 'http://unsplash.it/100/100/?random'
	},
	{
	  name:'김얌샘',
	  id: 3,
	  birthday: '2022-08-15',
	  gender: '여자',
	  job: '경리',
	  image: 'http://unsplash.it/100/100/?random'
	}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                name={c.name}
                id={c.id}
                birthday={c.birthday}
                gender={c.gender }
                job={c.job}
                image={c.image}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
