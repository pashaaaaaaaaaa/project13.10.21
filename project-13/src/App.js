import React from 'react';
import Button from './Button';

import './App.css';

class App extends React.Component {
  state = {
    user:[],
    users:[],
    id:0,
    inputName: '',
    inputAge: '',
    selectGender: 'male',
    
  }
  
  click=()=>{
    const cloneSA = Object.assign({}, this.state)
    // cloneSA.user = cloneSA.users
    cloneSA.user.push({id: cloneSA.id++, name: cloneSA.inputName, age:cloneSA.inputAge, gender: cloneSA.selectGender})
    cloneSA.users = cloneSA.user
    this.setState(cloneSA)
  }

  // ======filter version-------///////
  clickFilter=(event)=>{
    console.log(event)

    
    const newArray = Object.assign({}, this.state);
    // newArray.sort((a,b) => {
    //   return a.gender.man < b.gender.woman;
    // });
    newArray.user = newArray.users.filter((item) => {
      return  item.gender === event.target.value;
    });

    this.setState(newArray)
    // this.setState({ gender: +event.target.value });
  }
    
 
  
  changeInputNameHandler=(event)=>{
    const cloneSA = Object.assign({}, this.state)
    cloneSA.inputName = event.target.value
    this.setState(cloneSA)
  }
  changeInputAgeHandler=(event)=>{
    const cloneSA = Object.assign({}, this.state)
    cloneSA.inputAge = event.target.value
    this.setState(cloneSA)
  }
  changeselectGenderHandler=(event)=>{
    const cloneSA = Object.assign({}, this.state)
    cloneSA.selectGender = event.target.value
    this.setState(cloneSA)
  }
  changesSearchHandler=(event)=>{
  //   const cloneSA = Object.assign({}, this.state)
  //   cloneSA.selectGender = event.target.value
  //   this.setState({cloneSA})
  }
  // changeSearchHandler = user => this.setState({name: value})
  onRemoveClick = (element) => {
    const array = Object.assign({}, this.state);
    array.user.splice(element, 1);
    array.users = array.user
    this.setState(array);

  };
  

 
  render(){
    const {user} = this.state;
    console.log(this.state)
    return (
  <div className="container">
    <div className="App">
        <h3>Введите ваши данные </h3>
        <input onChange={(event) => this.changeInputNameHandler(event)} type="text" placeholder="ваши ФИО" />
        <input onChange={(event) => this.changeInputAgeHandler(event)} type="number" placeholder="ваши возраст" />
        <select onChange={(event) => this.changeselectGenderHandler(event)}>{this.state.user.gender}<option value="male">Мужской</option><option value="female">Женский</option></select>
        <Button text="Добавить" clickBtn={this.click}/>
        <hr></hr>
        <select id="gender" onChange={(event) => this.clickFilter(event)}>{this.state.user.gender}<option value="All">Все</option><option value="male">Мужской</option><option value="female">Женский</option></select>
        <Button text="Сортировать" clickBtn={this.clickFilter}/>
        <input onChange={(event) => this.changeSearchHandler(event)} type="text" placeholder="поиск" />
        <Button text="Поиск" clickBtn={this.changesSearchHandler} />
        

     
     {/* {this.state.user
         .filter((element) => gender==man)
         .map((element) => (
           
         ))} */}

    </div>
     <div>
     {this.state.user.map((item,index) => {
       return(
         <div className="answer">
           <div>Имя:{item.name}</div>
           <div>Возраст:{item.age}</div>
           <div>Пол:{item.gender}</div>
           <Button key={user.name}  text="Удалить" clickBtn={() => this.onRemoveClick(index)}/>
         </div>
       )
     })}
   </div>

  </div>
  );
 }
}

export default App;
