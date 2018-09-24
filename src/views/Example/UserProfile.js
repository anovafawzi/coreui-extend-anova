import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Collapse,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';
import Alert from 'react-s-alert';
import Rating from 'react-rating';

import { required, email, minLength8 } from '../../helpers/Validator';
import { renderIconField, renderTextAreaField, renderProfilePictureField } from '../../helpers';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        //Alert.error('Test message 3');
    }

    handleSave = (values) => {
        // if (values.password !== values.passwordrepeat) {
        //     throw new SubmissionError({
        //         passwordrepeat: 'Repeat password not the same with password',
        //         _error: 'Registration failed'
        //     })
        // }
        console.log(values);
    }

    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props
        const loading = this.state.isLoading

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <form onSubmit={handleSubmit(this.handleSave)}>
                            <Card>
                                <CardHeader>
                                    <strong>User</strong> Data
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col xs="12" md="2">
                                            <img src={'assets/img/avatars/6.jpg'} className="profile-pic mx-auto d-block" height="150" width="150" alt="admin@bootstrapmaster.com" />
                                            <br/>
                                            <div className="text-center">
                                                <Field
                                                    name="profpic"
                                                    type="fileprofile"
                                                    label="Profile picture"
                                                    component={renderProfilePictureField}
                                                />
                                                <Rating
                                                    emptySymbol="fa fa-star-o fa-2x rating-color"
                                                    fullSymbol="fa fa-star fa-2x rating-color"
                                                    initialRating={3}
                                                    readonly
                                                />
                                            </div>
                                            <br/>
                                            <div className="text-center">
                                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM0NC45NjMgMzQ0Ljk2MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ0Ljk2MyAzNDQuOTYzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPHBhdGggZD0iTTMyMS44NDcsODYuMjQybC00MC4wMjYtMjMuMTFsLTIzLjEwNC00MC4wMmgtNDYuMjEzbC00MC4wMjYtMjMuMTFsLTQwLjAyNiwyMy4xMUg4Ni4yMzkgICBsLTIzLjExLDQwLjAyNkwyMy4xMSw4Ni4yNDJ2NDYuMjEzTDAsMTcyLjQ4MWwyMy4xMSw0MC4wMjZ2NDYuMjEzbDQwLjAyNiwyMy4xMWwyMy4xMSw0MC4wMjZoNDYuMjEzbDQwLjAyLDIzLjEwNGw0MC4wMjYtMjMuMTEgICBoNDYuMjEzbDIzLjExLTQwLjAyNmw0MC4wMjYtMjMuMTF2LTQ2LjIxM2wyMy4xMS00MC4wMjZsLTIzLjExLTQwLjAyNlY4Ni4yNDJIMzIxLjg0N3ogTTE1Ni45MTEsMjQzLjA3NSAgIGMtMy4yMTYsMy4yMTYtNy40NTMsNC43NzktMTEuNjcxLDQuNzJjLTQuMjE5LDAuMDYtOC40NTUtMS41MDQtMTEuNjcxLTQuNzJsLTUwLjQ0NC01MC40NDRjLTYuMzE5LTYuMzE5LTYuMzE5LTE2LjU3LDAtMjIuODg5ICAgbDEzLjM1NC0xMy4zNTRjNi4zMTktNi4zMTksMTYuNTctNi4zMTksMjIuODg5LDBsMjUuODcyLDI1Ljg3Mmw4MC4zNDQtODAuMzVjNi4zMTktNi4zMTksMTYuNTctNi4zMTksMjIuODg5LDBsMTMuMzU0LDEzLjM1NCAgIGM2LjMxOSw2LjMxOSw2LjMxOSwxNi41NywwLDIyLjg4OUwxNTYuOTExLDI0My4wNzV6IiBmaWxsPSIjMjBhOGQ4Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                                                &nbsp;<span className="verified-text">Verified</span>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="5">
                                            <Field
                                                name="fullname"
                                                type="text"
                                                label="Full name"
                                                size="lg"
                                                component={renderIconField}
                                                required={true}
                                                validate={[required]}
                                            />
                                            <Field
                                                name="mobilephone"
                                                type="phone"
                                                label="Mobile phone"
                                                size="lg"
                                                component={renderIconField}
                                                required={true}
                                                validate={[required]}
                                            />
                                            <Field
                                                name="email"
                                                type="text"
                                                label="Email address"
                                                size="lg"
                                                component={renderIconField}
                                                required={true}
                                                validate={[required, email]}
                                            />
                                            <Field
                                                name="currentaddress"
                                                label="Current address"
                                                size="lg"
                                                component={renderTextAreaField}
                                                required={true}
                                                validate={[required]}
                                            />
                                            <Field
                                                name="permanentaddress"
                                                label="Permanent address"
                                                size="lg"
                                                component={renderTextAreaField}
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default reduxForm({
    form: 'formUserProfile'
})(UserProfile);
