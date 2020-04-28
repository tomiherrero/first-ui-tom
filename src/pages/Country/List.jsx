import React, {Component}from 'react';
import Title from '../../Components/Title';
import Table from '../../Components/Table';
import {connect} from 'react-redux';
import {Link} from  'react-router-dom';
import {
  fetchCountryRequested
} from '../../actions/country'

class Country extends Component {
  async componentDidMount(){
    this.props.requestCountry();
  }
  render(){
    const {headers, documents} = this.props;
    return(
      <div className="Country">
        <header className="Country-header">
            <Title title = "Countries" />
            <Link to = "./country/new">Agregar Pais</Link>

        <div>
          <Table {...{documents, headers, linkTo: '/country'}} />
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
      headers: state.country.headers,
      documents: state.country.countries
});

const mapDispatchProps = dispatch => ({
  requestCountry: () => dispatch(fetchCountryRequested()),
})
export default connect(mapStateToProps, mapDispatchProps)(Country);
