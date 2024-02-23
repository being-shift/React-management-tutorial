import React from 'react';
//import TableRow from '@m


class Customer extends React.Component{
    render() {
        return (
            <div>
				<Customerprofile id={this.props.id} image={this.props.image} name={this.props.name}/>	
				<Customerinfo name={this.props.name} birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} /> 
            </div>
        );
    }
}
// customer profile
class Customerprofile extends React.Component{
    render() {
        return (
            <div>
                <img src={this.props.image} alt='profile' />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}
class Customerinfo extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
                <p>수정됨</p>
			</div>
	);
    }
}
export default Customer;
