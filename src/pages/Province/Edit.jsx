import React, {Component} from 'react'; 
import {InputText} from '../../Components/Form';
import {connect} from 'react-redux';
import {updateProvince, submitProvinceRequested} from '../../actions/province'

class Edit extends Component {
    handleChange(obj){
        const {provinces} = this.props;
        Object.assign(provinces, obj);
        this.props.updateProvinces(provinces);
        this.forceUpdate();
    }
    render() {
        const {
            provinces: {        
                name,
                code
            }
        } = this.props;
        return (
            <div>
                <h1>Edicion de Provincias</h1>
                <br/>
                <InputText 
                        key = "name"
                        label="Nombre :"
                        value = {name}
                        onChange=  {({target: {value}}) => this.handleChange({name: value})}

                    />
                <br/> 
                <InputText 
                        key = "code"
                        label = "Codigo"
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
    provinces: state.province.currentProvince
});
const mapDispatchToProps = dispatch => ({
    updateProvinces: provinces => dispatch (updateProvince(provinces)),
    submit: () => dispatch(submitProvinceRequested())


});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);