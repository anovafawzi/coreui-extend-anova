import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    FormFeedback,
    FormText,
    Label,
    ListGroupItem
} from 'reactstrap';
import NumberFormat from 'react-number-format';
import Datetime from 'react-datetime';

export const renderIconField = ({ 
    input, 
    required, 
    disabled, 
    label, 
    placeholderlabel, 
    type, 
    props, 
    setRef, 
    isPrependTextHtml, 
    prependText, 
    isAppendTextHtml, 
    appendText, 
    size,
    dateFormat,
    timeFormat,
    isValidDate,
    defaultValue,
    setValidDate,
    setDefaultValue,
    meta: { touched, error, warning } 
}) => (
    (size === "sm")
        ?
        <FormGroup>
            <div className="controls">
                <InputGroup className="input-prepend">
                    {(prependText)
                        ?
                        <InputGroupAddon addonType="prepend">
                            {(isPrependTextHtml)
                                ? <span className="input-group-text" title={label} dangerouslySetInnerHTML={{ __html: prependText }}></span>
                                : <InputGroupText title={label}>{prependText}</InputGroupText>}
                        </InputGroupAddon>
                        : null}
                    {
                        (type === "currency")
                            ?
                            <NumberFormat {...input} value={input.value} displayType={'input'} thousandSeparator={true} allowNegative={false} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} disabled={disabled} decimalScale={2} isNumericString={true}/>
                            :
                            (type === "integer")
                                ?
                                <NumberFormat {...input} value={input.value} displayType={'input'} allowNegative={false}  className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} disabled={disabled} decimalScale={0} isNumericString={true}/>
                                :
                                    (type === "phone")
                                    ?
                                    <NumberFormat {...input} format="+##-###############" mask="_" value={input.value} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} disabled={disabled}/>
                                    :
                                        (type === "datepicker")
                                            ?
                                            <Datetime inputProps={{name: input.name}} value={input.value} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} onChange={param => input.onChange(param)} dateFormat={dateFormat} timeFormat={timeFormat} isValidDate={setValidDate} defaultValue={setDefaultValue}/>
                                            :
                                            <Input {...input} disabled={disabled} placeholder={label} type={type} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} size="16" />
                    }
                    {(appendText)
                        ?
                        <InputGroupAddon addonType="append">
                            {(isAppendTextHtml)
                                ? <span className="input-group-text" title={label} dangerouslySetInnerHTML={{ __html: appendText }}></span>
                                : <InputGroupText title={label}>{appendText}</InputGroupText>}
                        </InputGroupAddon>
                        : null}
                </InputGroup>
                {touched && ((error && <FormText color="red">{error}</FormText>) || (warning && <FormText color="yellow">{warning}</FormText>))}
            </div>
        </FormGroup>
        :
        <FormGroup row>
            <Col md="3">
                <Label htmlFor="text-input">{label}</Label>
            </Col>
            <Col xs="12" md="9">
                <div className="controls">
                    <InputGroup className="input-prepend">
                        {(prependText)
                            ?
                            <InputGroupAddon addonType="prepend">
                                {(isPrependTextHtml)
                                    ? <span className="input-group-text" title={label} dangerouslySetInnerHTML={{ __html: prependText }}></span>
                                    : <InputGroupText title={label}>{prependText}</InputGroupText>}
                            </InputGroupAddon>
                            : null}
                        {
                            (type === "currency")
                                ?
                                <NumberFormat {...input} value={input.value} displayType={'input'} thousandSeparator={true} allowNegative={false} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} disabled={disabled} decimalScale={2} isNumericString={true}/>
                                :
                                (type === "integer")
                                    ?
                                    <NumberFormat {...input} value={input.value} displayType={'input'} allowNegative={false}  className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} disabled={disabled} decimalScale={0} isNumericString={true}/>
                                    :
                                        (type === "phone")
                                        ?
                                        <NumberFormat {...input} format="+##-###############" mask="_" value={input.value} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} disabled={disabled}/>
                                        :
                                            (type === "datepicker")
                                                ?
                                                <Datetime inputProps={{name: input.name}} value={input.value} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} onChange={param => input.onChange(param)} dateFormat={dateFormat} timeFormat={timeFormat} isValidDate={setValidDate} defaultValue={setDefaultValue}/>
                                                :
                                                <Input {...input} disabled={disabled} placeholder={label} type={type} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} size="16" />
                        }
                        {(appendText)
                            ?
                            <InputGroupAddon addonType="append">
                                {(isAppendTextHtml)
                                    ? <span className="input-group-text" title={label} dangerouslySetInnerHTML={{ __html: appendText }}></span>
                                    : <InputGroupText title={label}>{appendText}</InputGroupText>}
                            </InputGroupAddon>
                            : null}
                    </InputGroup>
                    {touched && ((error && <FormText color="red">{error}</FormText>) || (warning && <FormText color="yellow">{warning}</FormText>))}
                </div>
            </Col>
        </FormGroup>
)

export const renderTextAreaField = ({ 
    input, 
    required, 
    disabled, 
    label, 
    type, 
    size,
    meta: { touched, error, warning } 
}) => (
    (size === "sm")
        ?
        <FormGroup>
            <InputGroup>
                <Input type="textarea" disabled={disabled} onBlur={input.onBlur} onChange={input.onChange} value={input.value} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} rows="2" placeholder={label} />
            </InputGroup>
            {touched && ((error && <FormText color="red">{error}</FormText>) || (warning && <FormText color="yellow">{warning}</FormText>))}
        </FormGroup>
        :
        <FormGroup row>
            <Col md="3">
                <Label htmlFor="textarea-input">{label}</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="textarea" disabled={disabled} onBlur={input.onBlur} onChange={input.onChange} value={input.value} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")} rows="2" placeholder={label} />
                {touched && ((error && <FormText color="red">{error}</FormText>) || (warning && <FormText color="yellow">{warning}</FormText>))}
            </Col>
        </FormGroup>
)

export const renderSelectField = ({ 
    input, 
    required, 
    disabled, 
    label, 
    type, 
    size,
    children,
    meta: { touched, error, warning } 
}) => (
    (size === "sm")
        ?
        <FormGroup>
            <select {...input} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")}>
                {children}
            </select>
            {touched && ((error && <FormText color="red">{error}</FormText>) || (warning && <FormText color="yellow">{warning}</FormText>))}
        </FormGroup>
        :
        <FormGroup row>
            <Col md="3">
                <Label htmlFor="textarea-input">{label}</Label>
            </Col>
            <Col xs="12" md="9">
                <select {...input} className={(touched ? (error ? "is-invalid form-control" : "form-control") : "form-control")}>
                    {children}
                </select>
                {touched && ((error && <FormText color="red">{error}</FormText>) || (warning && <FormText color="yellow">{warning}</FormText>))}
            </Col>
        </FormGroup>
)

export const renderProfilePictureField = ({ 
    input, 
    required, 
    disabled, 
    label, 
    type, 
    meta: { touched, error, warning } 
}) => (
    <FormGroup row>
        <Col xs="12" md="12">
            <label htmlFor={input.name} className="profpic-upload">
                <i className="fa fa-cloud-upload"></i> Change picture
            </label>
            <Input type="file" id={input.name} name={input.name} />
        </Col>
    </FormGroup>
)

export const renderCheckboxField = ({ 
    input, 
    required, 
    disabled, 
    label, 
    type, 
    meta: { touched, error, warning } 
}) => (
    <FormGroup row>
        <Col md="3">
            <Label htmlFor="text-input">{label}</Label>
        </Col>
        <Col xs="12" md="9">
            <Label className="float-right switch switch-default switch-success">
                <Input {...input} type="checkbox" className="switch-input" />
                <span className="switch-label"></span>
                <span className="switch-handle"></span>
            </Label>
            {touched && ((error && <FormText color="red">{error}</FormText>) || (warning && <FormText color="yellow">{warning}</FormText>))}
        </Col>
    </FormGroup>
)

export const renderTimeSlotCheckbox = ({
    input,
    label,
    meta: { touched, error, warning }
}) => (
    <ListGroupItem className="justify-content-between">{label}
        <Label className="float-right switch switch-default switch-success">
            <Input {...input} id={input.name} checked={input.value} type="checkbox" className="switch-input" />
            <span className="switch-label"></span>
            <span className="switch-handle"></span>
        </Label>
    </ListGroupItem>
)