import React, {Component} from 'react'; 
import {InputText} from '../../Components/Form';
import {connect} from 'react-redux';
import {updateCars, submitCarsRequested} from '../../actions/cars';


class Edit extends Component {
    handleChange(obj){ 
        const {car} = this.props;
        Object.assign(car, obj);
        this.props.updateCar(car);
        this.forceUpdate();

    }
    render() {
        const {
            car: {
                brand,
                models
            }
        } = this.props;
        return (
            <div>
                <h1>Edicion de Autos</h1>
                <br/>
                    <InputText
                        key= "brand"
                        label=  "Marca :" 
                        value= {brand}
                        onChange=  {({target: {value}}) => this.handleChange({brand: value})}
                    />
                <br/>
                <br/>
                    <InputText 
                        key= "models"
                        label ='Modelo : '
                        value = {models} 
                        onChange = {({target: {value}}) => this.handleChange({models: value})}

                    />
                <br/>
                <br/>
                <br/>

                    <button 
                    onClick = {()=> this.props.submit()}>
                        Salvar
                    </button>
                <br/>
                <br/>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    car: state.cars.currentCars
});
const mapDispatchToProps = dispatch => ({
    updateCar: car => dispatch (updateCars(car)),
    submit: () => dispatch(submitCarsRequested())

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);
