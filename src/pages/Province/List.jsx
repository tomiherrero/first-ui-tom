import React, {Component}from 'react';
import Title from '../../Components/Title';
import Table from '../../Components/Table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'; 
import {
  fetchProvinceRequested
} from '../../actions/province'

class Province extends Component {
  async componentDidMount(){
    this.props.requestProvince();
  }
  render(){
    const {headers, documents} = this.props;
    return(
      <div className="Province">
        <header className="Province-header">
            <Title title = "Province" />
            <Link to = "./province/new">Agregar provincia</Link>

        <div>
          <Table {...{documents, headers, linkTo: '/province'}} />
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
      headers: state.province.headers,
      documents: state.province.provinces
});

const mapDispatchProps = dispatch => ({
  requestProvince: () => dispatch(fetchProvinceRequested()),
})
export default connect(mapStateToProps, mapDispatchProps )(Province);
