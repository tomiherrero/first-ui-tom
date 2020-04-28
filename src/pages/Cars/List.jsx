import React, {Component}from 'react';
import Title from '../../Components/Title';
import Table from '../../Components/Table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  fetchCarsRequested
} from '../../actions/cars'

class Cars extends Component {
  async componentDidMount(){
    this.props.requestCars();
  }
  render(){
    const {headers, documents} = this.props;
    return(
      <div className="Car">
        <header className="Car-header">
            <Title title = "Cars" />
            <Link to = '/cars/new'>Agregar auto</Link>
        <div>
          <Table {...{documents, headers, linkTo: '/cars'}} />
        </div>
        </header>
      </div>
    );
    }
  }

  // mapStateToProps <<<< todo el state del store esta aca, tomamos el store y se lo pasamos a nuestro Component
  // como props
  //mapDispatchProps idem caso anterior pero son todas las acciones que vamos a ejecutar o llamar y la pasamos 
  //como comoponente prop 
  //mergeProps <<< funcionar acciones y propiedades onchange 

  // parametro 1 nuestro store/reducer. parametro 2 todas las propiedades que vienen por herencias
  // o por asignacion 

const mapStateToProps =  state  => ({
      headers: state.cars.headers,
      documents: state.cars.car
});

const mapDispatchProps = dispatch => ({
  requestCars: () => dispatch(fetchCarsRequested()),
})
export default connect(mapStateToProps, mapDispatchProps)(Cars);
