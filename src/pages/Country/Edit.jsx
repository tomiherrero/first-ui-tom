import React, {Component} from 'react'; 
import {InputText} from '../../Components/Form';
import {connect} from 'react-redux';
import { updateCountry, submitCountryRequested} from '../../actions/country'

class Edit extends Component {
    handleChange(obj){
        const {countries} = this.props;
        Object.assign(countries, obj);
        this.props.updateCountries(countries);
        this.forceUpdate();

    }

    render() {
        const {
            countries: {        
                name,
                code
            }
        } = this.props;
        return (
            <div>
                <h1>Edicion de Paises</h1>
                <br/>
                    <InputText 
                        key = "name"
                        label="Nombre :"
                        value= {name}
                        onChange=  {({target: {value}}) => this.handleChange({name: value})}

                    />
                <br/>
                    <InputText 
                        key = "code"
                        label= "Codigo: "
                        value= {code}
                        onChange=  {({target: {value}}) => this.handleChange({code: value})}

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
    countries: state.country.currentCountry
});
const mapDispatchToProps = dispatch => ({
    updateCountries: countries => dispatch (updateCountry(countries)),
    submit: () => dispatch(submitCountryRequested())

});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);

